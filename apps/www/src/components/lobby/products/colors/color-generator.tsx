"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import { HexColorPicker } from "react-colorful";
import { Download, Check, Copy, RefreshCw, AlertCircle } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { useTheme } from "next-themes";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { motion } from "framer-motion";

interface ColorShade {
  shade: number;
  hex: string;
  hue: number;
  saturation: number;
  lightness: number;
}

interface ContrastScore {
  background: ColorShade;
  foreground: ColorShade;
  ratio: number;
  level: string;
  pass: boolean;
}

export function ColorPaletteGenerator() {
  const [baseColor, setBaseColor] = useState("#15437F");
  const [vibrancy, setVibrancy] = useState(50);
  const [hueShift, setHueShift] = useState(0);
  const [colorShades, setColorShades] = useState<ColorShade[]>([]);
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState(baseColor);
  const [isRandomizing, setIsRandomizing] = useState(false);
  const [cssCode, setCssCode] = useState("");
  const [tailwindConfig, setTailwindConfig] = useState("");
  const { theme, setTheme } = useTheme();

  // Convert hex to HSL - memoized for performance
  const hexToHSL = useCallback((hex: string): [number, number, number] => {
    // Remove the # if present
    hex = hex.replace(/^#/, "");

    // Parse the hex values
    const r = Number.parseInt(hex.substring(0, 2), 16) / 255;
    const g = Number.parseInt(hex.substring(2, 4), 16) / 255;
    const b = Number.parseInt(hex.substring(4, 6), 16) / 255;

    // Find min and max values
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);

    // Calculate lightness
    let l = (max + min) / 2;

    let h = 0;
    let s = 0;

    if (max !== min) {
      // Calculate saturation
      s = l > 0.5 ? (max - min) / (2 - max - min) : (max - min) / (max + min);

      // Calculate hue
      if (max === r) {
        h = (g - b) / (max - min) + (g < b ? 6 : 0);
      } else if (max === g) {
        h = (b - r) / (max - min) + 2;
      } else {
        h = (r - g) / (max - min) + 4;
      }
      h /= 6;
    }

    // Convert to degrees, percentage, percentage
    h = Math.round(h * 360);
    s = Math.round(s * 100);
    l = Math.round(l * 100);

    return [h, s, l];
  }, []);

  // Convert HSL to hex - memoized for performance
  const hslToHex = useCallback((h: number, s: number, l: number): string => {
    h /= 360;
    s /= 100;
    l /= 100;

    let r, g, b;

    if (s === 0) {
      r = g = b = l;
    } else {
      const hue2rgb = (p: number, q: number, t: number) => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 1 / 2) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
      };

      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;

      r = hue2rgb(p, q, h + 1 / 3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1 / 3);
    }

    const toHex = (x: number) => {
      const hex = Math.round(x * 255).toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    };

    return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
  }, []);

  // Generate color shades - memoized to prevent unnecessary recalculations
  const generateColorShades = useCallback(() => {
    const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
    const [baseHue, baseSat, baseLight] = hexToHSL(baseColor);

    // Apply hue shift
    const adjustedHue = (baseHue + hueShift + 360) % 360;

    // Apply vibrancy (affects saturation)
    // Cap vibrancy to prevent issues with extreme values
    const cappedVibrancy = Math.min(vibrancy, 85); // Cap at 85% to prevent oversaturation
    const saturationMultiplier = cappedVibrancy / 50; // 0-85 range to 0-1.7 multiplier

    const newShades = shades.map((shade) => {
      // Fixed lightness values to ensure proper gradient
      // These values ensure 50 is always lightest and 900 is always darkest
      const lightnessMap: Record<number, number> = {
        50: 96, // Lightest
        100: 90,
        200: 80,
        300: 70,
        400: 60,
        500: 50,
        600: 40,
        700: 30,
        800: 20,
        900: 10, // Darkest
      };

      const targetLightness = lightnessMap[shade];

      // Calculate saturation with a more controlled approach
      // Lighter shades get less saturation, darker shades get more
      let adjustedSaturation: number;

      if (shade <= 100) {
        // Very light shades (50, 100) get significantly reduced saturation
        adjustedSaturation =
          baseSat * saturationMultiplier * (0.3 + shade / 500);
      } else if (shade < 500) {
        // Medium-light shades get moderately reduced saturation
        adjustedSaturation =
          baseSat * saturationMultiplier * (0.6 + shade / 1000);
      } else if (shade < 800) {
        // Medium-dark shades get slightly increased saturation
        adjustedSaturation =
          baseSat * saturationMultiplier * (0.9 + (shade - 500) / 2000);
      } else {
        // Very dark shades (800, 900) get reduced saturation to prevent muddiness
        adjustedSaturation = baseSat * saturationMultiplier * 0.95;
      }

      // Cap saturation to prevent oversaturation
      adjustedSaturation = Math.min(adjustedSaturation, 100);

      // Generate the hex color
      const hex = hslToHex(adjustedHue, adjustedSaturation, targetLightness);

      return {
        shade,
        hex,
        hue: adjustedHue,
        saturation: Math.round(adjustedSaturation),
        lightness: targetLightness,
      };
    });

    return newShades;
  }, [baseColor, vibrancy, hueShift, hexToHSL, hslToHex]);

  // Memoize color shades to prevent unnecessary re-renders
  const memoizedColorShades = useMemo(
    () => generateColorShades(),
    [generateColorShades]
  );

  // Update color shades when dependencies change
  useEffect(() => {
    setColorShades(memoizedColorShades);
  }, [memoizedColorShades]);

  // Reset copied state after 1 second (reduced from 2 seconds)
  useEffect(() => {
    if (copiedHex) {
      const timeout = setTimeout(() => {
        setCopiedHex(null);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [copiedHex]);

  // Update input value when baseColor changes from other sources
  useEffect(() => {
    setInputValue(baseColor);
  }, [baseColor]);

  // Set dark mode as default and sync the switch state
  useEffect(() => {
    // Only set dark mode if theme is undefined (initial load)
    if (!theme) {
      setTheme("dark");
      setIsDarkMode(true);
    }
  }, [theme, setTheme]);

  // Copy hex value to clipboard
  const copyToClipboard = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    toast({
      title: "Copied to clipboard",
      description: `${hex} has been copied to your clipboard.`,
      duration: 1000, // Reduced from 2000ms
    });
  };

  // Download palette as JSON
  const downloadPalette = () => {
    const palette = colorShades.reduce(
      (acc, { shade, hex }) => {
        acc[shade] = hex;
        return acc;
      },
      {} as Record<number, string>
    );

    const dataStr =
      "data:text/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify(palette, null, 2));
    const downloadAnchorNode = document.createElement("a");
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute(
      "download",
      `palette-${baseColor.replace("#", "")}.json`
    );
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  // Download palette as CSS
  const downloadCSS = () => {
    let css = `:root {\n`;
    colorShades.forEach(({ shade, hex }) => {
      css += `  --color-primary-${shade}: ${hex};\n`;
    });
    css += `}\n`;

    const dataStr = "data:text/css;charset=utf-8," + encodeURIComponent(css);
    const downloadAnchorNode = document.createElement("a");
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute(
      "download",
      `palette-${baseColor.replace("#", "")}.css`
    );
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  // Download palette as Tailwind config
  const downloadTailwindConfig = () => {
    const colors = colorShades.reduce(
      (acc, { shade, hex }) => {
        acc[shade] = hex;
        return acc;
      },
      {} as Record<number, string>
    );

    const config = `/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: ${JSON.stringify(colors, null, 6).replace(/"([^"]+)":/g, "$1:")}
      }
    }
  }
}`;

    const dataStr =
      "data:text/javascript;charset=utf-8," + encodeURIComponent(config);
    const downloadAnchorNode = document.createElement("a");
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute(
      "download",
      `tailwind-config-${baseColor.replace("#", "")}.js`
    );
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  // Format and validate hex value - memoized for performance
  const formatHexValue = useCallback(
    (value: string): string => {
      // Remove any non-hex characters
      let hex = value.replace(/[^0-9A-Fa-f]/g, "");

      // If empty, return the current base color
      if (!hex) return baseColor;

      // Handle shorthand hex (e.g., "F00" -> "FF0000")
      if (hex.length === 3) {
        hex = hex
          .split("")
          .map((char) => char + char)
          .join("");
      }

      // Complete incomplete hex values
      if (hex.length < 6) {
        // Pad with zeros or repeat the pattern
        if (hex.length === 1) {
          // Single character - repeat it (e.g., "F" -> "FFFFFF")
          hex = hex.repeat(6);
        } else if (hex.length === 2) {
          // Two characters - treat as RR and repeat (e.g., "FF" -> "FFFF00")
          hex = hex + hex + "00";
        } else if (hex.length === 4) {
          // Four characters - treat as RRGG and add default blue (e.g., "FFFF" -> "FFFF00")
          hex = hex + "00";
        } else if (hex.length === 5) {
          // Five characters - add one more from the pattern
          hex = hex + hex.charAt(0);
        }
      } else if (hex.length > 6) {
        // Truncate if too long
        hex = hex.substring(0, 6);
      }

      return "#" + hex.toUpperCase();
    },
    [baseColor]
  );

  // Generate a random color with more variation and reset sliders
  const randomizeColor = () => {
    // Set randomizing state for animation
    setIsRandomizing(true);

    // Reset vibrancy and hue shift to default values
    setVibrancy(50);
    setHueShift(0);

    // Decide whether to make a completely random color (30% chance) or stay somewhat related
    const completelyRandom = Math.random() < 0.3;

    if (completelyRandom) {
      // Generate a completely random color
      const newHue = Math.floor(Math.random() * 360);
      const newSaturation = 20 + Math.random() * 80; // 20-100%
      const newLightness = 20 + Math.random() * 60; // 20-80%

      const newColor = hslToHex(newHue, newSaturation, newLightness);
      setBaseColor(newColor);
      setInputValue(newColor);
    } else {
      // Generate a color with wider variation but still somewhat related
      const [currentHue, _, __] = hexToHSL(baseColor);

      // Much wider hue variation (±60°)
      const newHue = (currentHue + (Math.random() * 120 - 60) + 360) % 360;
      const newSaturation = 20 + Math.random() * 80; // 20-100%
      const newLightness = 20 + Math.random() * 60; // 20-80%

      const newColor = hslToHex(newHue, newSaturation, newLightness);
      setBaseColor(newColor);
      setInputValue(newColor);
    }

    toast({
      title: "Color Randomized",
      description: `New base color: ${baseColor}`,
      duration: 1000,
    });

    // Reset randomizing state after animation
    setTimeout(() => {
      setIsRandomizing(false);
    }, 500);
  };

  // Helper function to calculate relative luminance
  const getLuminance = (hex: string) => {
    // Remove # if present
    hex = hex.replace("#", "");

    // Convert hex to rgb
    const r = Number.parseInt(hex.substr(0, 2), 16) / 255;
    const g = Number.parseInt(hex.substr(2, 2), 16) / 255;
    const b = Number.parseInt(hex.substr(4, 2), 16) / 255;

    // Calculate luminance
    const R = r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4);
    const G = g <= 0.03928 ? g / 12.92 : Math.pow((g + 0.055) / 1.055, 2.4);
    const B = b <= 0.03928 ? b / 12.92 : Math.pow((b + 0.055) / 1.055, 2.4);

    return 0.2126 * R + 0.7152 * G + 0.0722 * B;
  };

  // Calculate contrast ratio
  const getContrastRatio = useCallback(
    (color1: string, color2: string) => {
      const luminance1 = getLuminance(color1);
      const luminance2 = getLuminance(color2);

      const lighter = Math.max(luminance1, luminance2);
      const darker = Math.min(luminance1, luminance2);

      return (lighter + 0.05) / (darker + 0.05);
    },
    [] // Removed getLuminance as a dependency
  );

  // Calculate accessibility scores for all shade combinations
  const calculatePaletteAccessibility = useMemo(() => {
    // Skip some shades to avoid too many combinations
    const testShades = [50, 100, 200, 500, 700, 900];
    const results: ContrastScore[] = [];

    // Test all combinations of shades against each other
    for (let i = 0; i < testShades.length; i++) {
      for (let j = i + 1; j < testShades.length; j++) {
        const bgShade = colorShades.find((s) => s.shade === testShades[i]);
        const fgShade = colorShades.find((s) => s.shade === testShades[j]);

        if (bgShade && fgShade) {
          const ratio = getContrastRatio(bgShade.hex, fgShade.hex);
          let level = "";
          let pass = false;

          if (ratio >= 7) {
            level = "AAA";
            pass = true;
          } else if (ratio >= 4.5) {
            level = "AA";
            pass = true;
          } else if (ratio >= 3) {
            level = "AA Large";
            pass = true;
          } else {
            level = "Fail";
            pass = false;
          }

          results.push({
            background: bgShade,
            foreground: fgShade,
            ratio,
            level,
            pass,
          });
        }
      }
    }

    // Sort by contrast ratio (highest first)
    return results.sort((a, b) => b.ratio - a.ratio);
  }, [colorShades, getContrastRatio]);

  // Get passing combinations
  const passingCombinations = useMemo(() => {
    return calculatePaletteAccessibility.filter((score) => score.pass);
  }, [calculatePaletteAccessibility]);

  // Get failing combinations
  const failingCombinations = useMemo(() => {
    return calculatePaletteAccessibility.filter((score) => !score.pass);
  }, [calculatePaletteAccessibility]);
  const generateCSS = () => {
    let css = `:root {\n`;
    colorShades.forEach(({ shade, hex }) => {
      css += `  --color-primary-${shade}: ${hex};\n`;
    });
    css += `}\n`;
    setCssCode(css);
  };

  const generateTailwindConfig = () => {
    const colors = colorShades.reduce((acc, { shade, hex }) => {
      acc[shade] = hex;
      return acc;
    }, {});

    const config = `/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: ${JSON.stringify(colors, null, 6).replace(/"([^"]+)":/g, "$1:")}
      }
    }
  }
}`;
    setTailwindConfig(config);
  };

  return (
    <div className="space-y-6">
      <div>
        <motion.div
          className="flex pb-6 items-center gap-3 justify-center"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex justify-center items-center gap-3">
            <motion.div
              className="w-8 h-8 rounded"
              style={{ backgroundColor: baseColor }}
              animate={{ backgroundColor: baseColor }}
              transition={{ duration: 0.3 }}
            />
            <h1 className="text-2xl font-bold">Color Palette Generator</h1>
            <motion.span className="text-gray-800 dark:text-white">
              {baseColor}
            </motion.span>
          </div>

          <div className="flex items-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" size="icon" onClick={downloadPalette}>
                <Download className="h-4 w-4" />
                <span className="sr-only">Download JSON</span>
              </Button>
            </motion.div>
            <div className="space-y-4">
              {/* Trigger Buttons */}
              <div className="flex gap-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      onClick={generateCSS}
                      className="px-4 py-2 border rounded-md"
                    >
                      View CSS
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-lg">
                    <DialogHeader>
                      <DialogTitle>CSS Code</DialogTitle>
                      <DialogDescription>
                        Copy and use the generated CSS.
                      </DialogDescription>
                    </DialogHeader>
                    <pre className=" p-4 rounded-md text-sm max-h-60 overflow-auto">
                      {cssCode}
                    </pre>
                    <Button
                      onClick={() => copyToClipboard(cssCode)}
                      className="mt-2 px-4 py-1 border rounded-md"
                    >
                      Copy CSS
                    </Button>
                  </DialogContent>
                </Dialog>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      onClick={generateTailwindConfig}
                      className="px-4 py-2 border rounded-md"
                    >
                      View Tailwind Config
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-lg">
                    <DialogHeader>
                      <DialogTitle>Tailwind Config</DialogTitle>
                      <DialogDescription>
                        Copy and use the generated Tailwind configuration.
                      </DialogDescription>
                    </DialogHeader>
                    <pre className="  p-4 rounded-md text-sm max-h-100 overflow-auto">
                      {tailwindConfig}
                    </pre>
                    <Button
                      onClick={() => copyToClipboard(tailwindConfig)}
                      className="mt-2 px-4 py-1 border rounded-md"
                    >
                      Copy Tailwind Config
                    </Button>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <motion.div
              className="space-y-4 border p-4 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-medium">Base Color</h3>
                <div className="flex items-center gap-2">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={randomizeColor}
                      className="text-xs"
                      disabled={isRandomizing}
                    >
                      <RefreshCw
                        className={`h-3 w-3 mr-1 ${isRandomizing ? "animate-spin" : ""}`}
                      />
                      Randomize
                    </Button>
                  </motion.div>
                  <motion.div
                    className="w-8 h-8 rounded"
                    style={{ backgroundColor: baseColor }}
                    animate={{ backgroundColor: baseColor }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>

              <div className="relative aspect-video w-full rounded-lg overflow-hidden">
                <HexColorPicker
                  color={baseColor}
                  onChange={setBaseColor}
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                />
              </div>

              <div className="flex items-center space-x-2">
                <motion.div
                  className="w-8 h-8 rounded"
                  style={{ backgroundColor: baseColor }}
                  animate={{ backgroundColor: baseColor }}
                  transition={{ duration: 0.3 }}
                />
                <motion.input
                  type="text"
                  value={inputValue}
                  onChange={(e) => {
                    // Always update the input value as the user types
                    setInputValue(e.target.value);
                  }}
                  onBlur={() => {
                    // When the user clicks outside, try to convert to a valid hex
                    const validHex = formatHexValue(inputValue);
                    setInputValue(validHex);
                    setBaseColor(validHex);
                  }}
                  onKeyDown={(e) => {
                    // When the user presses Enter, update the color
                    if (e.key === "Enter") {
                      const validHex = formatHexValue(inputValue);
                      setInputValue(validHex);
                      setBaseColor(validHex);
                      e.currentTarget.blur();
                    }
                  }}
                  className="flex-1 px-3 py-2 border rounded-lg text-sm font-mono transition-all duration-200 focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="#RRGGBB"
                  initial={{ scale: 1 }}
                  whileFocus={{ scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                />
              </div>
            </motion.div>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <motion.div
                className="space-y-2"
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <div className="flex justify-between">
                  <label className="text-sm font-medium">Vibrancy</label>
                  <motion.span
                    className="text-sm text-gray-500"
                    animate={{
                      x: vibrancy === 50 ? [0, 5, -5, 5, -5, 0] : 0,
                      transition: { duration: vibrancy === 50 ? 0.5 : 0 },
                    }}
                  >
                    {vibrancy}%
                  </motion.span>
                </div>
                <Slider
                  value={[vibrancy]}
                  min={0}
                  max={100}
                  step={1}
                  onValueChange={(value) => setVibrancy(value[0])}
                  className="transition-all duration-150 ease-out"
                />
              </motion.div>

              <motion.div
                className="space-y-2"
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <div className="flex justify-between">
                  <label className="text-sm font-medium">Hue Shift</label>
                  <motion.span
                    className="text-sm text-gray-500"
                    animate={{
                      x: hueShift === 0 ? [0, 5, -5, 5, -5, 0] : 0,
                      transition: { duration: hueShift === 0 ? 0.5 : 0 },
                    }}
                  >
                    {hueShift}°
                  </motion.span>
                </div>
                <Slider
                  value={[hueShift]}
                  min={-180}
                  max={180}
                  step={1}
                  onValueChange={(value) => setHueShift(value[0])}
                  className="transition-all duration-150 ease-out"
                />
              </motion.div>
            </motion.div>

            <motion.div
              className="h-24 rounded-lg overflow-hidden flex"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              whileHover={{ boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
            >
              {colorShades.map(({ shade, hex }, index) => (
                <motion.div
                  key={shade}
                  className="flex-1"
                  style={{ backgroundColor: hex }}
                  title={`${shade}: ${hex}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.05 * index }}
                />
              ))}
            </motion.div>
          </div>

          <motion.div
            className="space-y-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {colorShades.map(
              ({ shade, hex, hue, saturation, lightness }, index) => (
                <motion.div
                  key={shade}
                  className="flex items-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.05 * index }}
                  whileHover={{ scale: 1.01, x: 5 }}
                >
                  <motion.div
                    className="w-10 h-10 rounded mr-4"
                    style={{ backgroundColor: hex }}
                    animate={{ backgroundColor: hex }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="font-bold text-lg w-10">{shade}</div>
                  <motion.div
                    className="font-mono px-3 text-sm cursor-pointer flex items-center gap-1"
                    onClick={() => copyToClipboard(hex)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {hex}
                    {copiedHex === hex ? (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 15,
                        }}
                      >
                        <Check className="h-3 w-3 text-green-500" />
                      </motion.div>
                    ) : (
                      <Copy className="h-3 w-3 mx-2 opacity-50" />
                    )}
                  </motion.div>
                  <div className="ml-auto grid grid-cols-3 gap-6">
                    <div className="flex flex-col items-center">
                      <div className="text-xs text-gray-500">H {hue}</div>
                      <div className="w-16 h-1 bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-black dark:bg-primary"
                          style={{ width: `${(hue / 360) * 100}%` }}
                          animate={{ width: `${(hue / 360) * 100}%` }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="text-xs text-gray-500">
                        S {saturation}
                      </div>
                      <div className="w-16 h-1 bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-black dark:bg-primary"
                          style={{ width: `${saturation}%` }}
                          animate={{ width: `${saturation}%` }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="text-xs text-gray-500">L {lightness}</div>
                      <div className="w-16 h-1 bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-black dark:bg-primary"
                          style={{ width: `${lightness}%` }}
                          animate={{ width: `${lightness}%` }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            )}
          </motion.div>
        </div>
        <div className="border mt-6 p-4 rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium">Accessibility Pairs</h3>
            <div className="text-xs text-gray-500">
              {passingCombinations.length} passing /{" "}
              {calculatePaletteAccessibility.length} total
            </div>
          </div>
          <motion.div
            className="grid grid-cols-2 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            {/* Passing combinations */}
            <div>
              <h4 className="text-sm font-medium text-green-600 dark:text-green-400 mb-2 flex items-center">
                <Check className="h-4 w-4 mr-1" /> Accessible Combinations
              </h4>
              <div className="grid grid-cols-1 gap-2 h-full pr-2">
                {passingCombinations.length > 0 ? (
                  passingCombinations.map((score, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-2 rounded border border-green-100 dark:border-green-900 bg-green-50 dark:bg-green-900/20"
                    >
                      <div className="flex items-center gap-2">
                        <div className="flex items-center">
                          <div
                            className="w-6 h-6 rounded-l flex items-center justify-center text-xs font-medium"
                            style={{
                              backgroundColor: score.background.hex,
                              color: score.foreground.hex,
                              border: "1px solid rgba(0,0,0,0.1)",
                            }}
                          >
                            A
                          </div>
                          <div
                            className="w-6 h-6 rounded-r flex items-center justify-center text-xs font-medium"
                            style={{
                              backgroundColor: score.foreground.hex,
                              color: score.background.hex,
                              border: "1px solid rgba(0,0,0,0.1)",
                            }}
                          >
                            A
                          </div>
                        </div>
                        <div className="text-xs">
                          <span className="font-medium">
                            {score.background.shade}
                          </span>
                          {" + "}
                          <span className="font-medium">
                            {score.foreground.shade}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-medium">
                          {score.ratio.toFixed(2)}:1
                        </span>
                        <div className="px-1.5 py-0.5 text-xs rounded bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                          {score.level}
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-sm text-gray-500 italic">
                    No accessible combinations found
                  </div>
                )}
              </div>
            </div>

            {/* Failing combinations */}
            <div>
              <h4 className="text-sm font-medium text-red-600 dark:text-red-400 mb-2 flex items-center">
                <AlertCircle className="h-4 w-4 mr-1" /> Inaccessible
                Combinations
              </h4>
              <div className="grid grid-cols-1 gap-2 h-full pr-2">
                {failingCombinations.length > 0 ? (
                  failingCombinations.map((score, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-2 rounded border border-red-100 dark:border-red-900 bg-red-50 dark:bg-red-900/20"
                    >
                      <div className="flex items-center gap-2">
                        <div className="flex items-center">
                          <div
                            className="w-6 h-6 rounded-l flex items-center justify-center text-xs font-medium"
                            style={{
                              backgroundColor: score.background.hex,
                              color: score.foreground.hex,
                              border: "1px solid rgba(0,0,0,0.1)",
                            }}
                          >
                            A
                          </div>
                          <div
                            className="w-6 h-6 rounded-r flex items-center justify-center text-xs font-medium"
                            style={{
                              backgroundColor: score.foreground.hex,
                              color: score.background.hex,
                              border: "1px solid rgba(0,0,0,0.1)",
                            }}
                          >
                            A
                          </div>
                        </div>
                        <div className="text-xs">
                          <span className="font-medium">
                            {score.background.shade}
                          </span>
                          {" + "}
                          <span className="font-medium">
                            {score.foreground.shade}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-medium">
                          {score.ratio.toFixed(2)}:1
                        </span>
                        <div className="px-1.5 py-0.5 text-xs rounded bg-red-100 text-red-800                            dark:bg-900 dark:text-red-200">
                          {score.level}
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-sm text-gray-500 italic">
                    All combinations are accessible!
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
