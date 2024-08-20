/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */

/* eslint-disable @typescript-eslint/await-thenable */
/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import type { SettingsType } from "@/src/types";
import type { ColorChangeHandler } from "react-color";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import {
  debounce,
  randomElement,
  randomNumberBetween,
  uniq,
} from "@/lib/dutils";
import { ColorInput } from "@/src/components/common/colors/color-input";
import CustomSvgIcon from "@/src/components/common/colors/CustomSvgIcon";
import {
  DownloadPNG,
  DownloadSVG,
} from "@/src/components/common/colors/export-modal";
import { presets } from "@/src/components/common/colors/grad-types";
import ResultDIcon from "@/src/components/common/colors/result-dicon";
import usePngClipboardSupported from "@/src/components/common/colors/usePngClipboardSupported";
import { CodeBlock } from "@/src/components/mdx/layers/code-block";
import GridPattern from "@/src/components/ui/grid-pattern";
import { cn } from "@designali/ui";
import { Button } from "@designali/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@designali/ui/dtabs";
import { Input } from "@designali/ui/input";
import { Label } from "@designali/ui/label";
import { RadioGroup, RadioGroupItem } from "@designali/ui/radio-group";
import { ScrollArea } from "@designali/ui/scroll-area";
import { Slider } from "@designali/ui/slider";
import { toast } from "@designali/ui/toaster";
import { DIcons } from "dicons";
import { CSSTransition } from "react-transition-group";
import { svgAsPngUri } from "save-svg-as-png";

const scales = [0.25, 0.5, 1, 2];

const FEEDBACK_EMAIL = "contact@designali.in";

export const IconGenerator = () => {
  const randomPresetIndex = randomNumberBetween(0, presets.length - 1);

  const [urlParsed, setUrlParsed] = useState<boolean>(false);
  const [scale, setScale] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [history, setHistory] = useState<SettingsType[]>([]);
  const [redoHistory, setRedoHistory] = useState<SettingsType[]>([]);
  const [recentColors, setRecentColors] = useState<string[]>([]);
  const [showExportModal, setShowExportModal] = useState<boolean>(false);
  const [panelsVisible, setPanelsVisible] = useState<boolean>(false);
  const [settings, setSettings] = useState<SettingsType>({
    fileName: "designali",
    icon: "",
    backgroundRadius: 72,
    backgroundOpacity: 0,
    backgroundStrokeSize: 0,
    backgroundStrokeColor: "#FFFFFF",
    backgroundRadialGlare: false,
    backgroundNoiseTexture: false,
    backgroundNoiseTextureOpacity: 25,
    backgroundStrokeOpacity: 100,
    backgroundPosition: "50%,0%",
    backgroundSpread: 100,
    backgroundAngle: 0,
    iconSize: 120,
    strokeWidth: 2,
    iconOffsetX: 0,
    iconOffsetY: 0,
    selectedPresetIndex: randomPresetIndex,
    customSvg: undefined,
    ...presets[randomPresetIndex],
  });

  const router = useRouter();
  const searchParams = useSearchParams();
  const pngClipboardSupported = usePngClipboardSupported();

  const searchRef = useRef<HTMLInputElement>(null);
  const iconsWrapperRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<HTMLElement & SVGSVGElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const pushNewSettings = useCallback(
    (newSettings: Partial<SettingsType>) => {
      setSettings((currentSettings) => {
        const settingsToSet = {
          ...currentSettings,
          ...newSettings,
        };
        setHistory((history) => [...history, settingsToSet]);
        setRedoHistory([]);
        return settingsToSet;
      });
    },
    [setSettings],
  );

  const onChangeIcon = (value: string) => {
    pushNewSettings({
      icon: value as "",
      customSvg: undefined,
    });
  };

  const onRandomIconClick = () => {
    pushNewSettings({
      icon: randomElement(Object.keys(DIcons) as ""[]),
    });
  };

  const onCopyImageToClipboard = useCallback(async () => {
    if (svgRef.current) {
      // Fixes @2x png export instead of the same size as png
      const realPixelRatio = window.devicePixelRatio;
      window.devicePixelRatio = 1;
      const dataUri = await svgAsPngUri(svgRef.current, { encoderOptions: 1 });
      const blob = await (await fetch(dataUri)).blob();
      await navigator.clipboard.write([
        new ClipboardItem({
          [blob.type]: blob,
        }),
      ]);
      window.devicePixelRatio = realPixelRatio;
      toast("Image copied to clipboard");
    }
  }, []);

  useEffect(() => {
    if (window.innerWidth < 512) {
      setScale(window.innerWidth / 512 - 0.03125 * 2);
    }
    setSettings((currentSettings) => {
      const randomIcon = randomElement(Object.keys(DIcons) as ""[]);
      const settingsToSet = {
        ...currentSettings,
        icon: randomIcon,
      };
      setHistory([settingsToSet]);
      setPanelsVisible(true);
      return settingsToSet;
    });
  }, []);

  useEffect(() => {
    const q = searchParams.get("q") || "";

    if (q !== undefined) {
      setSearchTerm(q as string);
    }

    if (!urlParsed) {
      // Parse settings from query string
      const settingsFromUrl = Object.keys(
        Object.fromEntries(searchParams),
      ).reduce((acc, key) => {
        if (
          key in settings &&
          key !== "customSvg" // Do not allow to pass customSvg in url to prevent XSS attacks
        ) {
          let value = searchParams.get(key) as
            | string
            | boolean
            | number
            | undefined;
          if (value === "undefined") {
            value = undefined;
          }

          return {
            ...acc,
            [key]: value,
          };
        }
        return acc;
      }, {} as Partial<SettingsType>);
      setUrlParsed(true);
      setSettings((settings) => ({ ...settings, ...settingsFromUrl }));
    }
  }, [router, settings, urlParsed, searchParams]);

  const onFormChange = () => {
    if (!formRef.current) {
      return;
    }
    const formData = new FormData(formRef.current);
    const data: Record<string, unknown> = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    pushNewSettings({
      ...data,
    });
  };

  const onChangeSearchTerm: React.FormEventHandler<HTMLInputElement> = (
    event,
  ) => {
    const newSeachTerm = (event.target as HTMLInputElement).value;
    router.replace(`?q=${newSeachTerm}`);
  };

  const sp = useSearchParams();

  const onChangeColorSetting =
    (settingName: string): ColorChangeHandler =>
    (newValue) => {
      const color = newValue.hex.toUpperCase();
      pushNewSettings({
        [settingName]: color,
        selectedPresetIndex: null,
      });
      onSaveRecentColor(color);
    };

  // TODO: update to the latest react-color when it is released and use onChangeComplete
  const onSaveRecentColor = debounce((color: string) => {
    setRecentColors((colors) => uniq([color, ...colors]).slice(0, 16));
  });

  let IconComponent: React.FC<React.SVGProps<SVGSVGElement>> = () => null;
  const customSvgIsPng = settings.customSvg?.startsWith("data:image/png");
  if (settings.customSvg) {
    const svgSource = customSvgIsPng
      ? `<svg><image xlink:href="${settings.customSvg}" x="0" y="0" width="${settings.iconSize}" height="${settings.iconSize}" /></svg>`
      : settings.customSvg;
    IconComponent = function CustomSvg(props) {
      return <CustomSvgIcon {...props} svgSource={svgSource} />;
    };
  } else if (settings.icon) {
    IconComponent = DIcons[settings.icon];
  }

  const filteredIcons = Object.keys(DIcons).filter((key) =>
    key.toLowerCase().includes(searchTerm.toLowerCase()),
  ) as ""[];

  const scaleOptions = scales.map((value) => ({
    value,
    label: `${Math.round(value * 100)}%`,
  }));

  if (!scales.includes(scale)) {
    scaleOptions.unshift({
      value: scale,
      label: `${Math.round(scale * 100)}%`,
    });
  }

  return (
    <div className="border-b border-t md:h-screen">
      <main className={"flex-1 md:flex"}>
        <div className="-z-0 mx-auto grid max-w-sm md:h-screen md:border-r">
          <div className="p-6">
            <div className="relative">
              <p className="my-2 text-center text-xl font-semibold text-ali">
                {settings.icon}
              </p>
              <div className="relative mx-auto flex h-auto w-auto max-w-[202px] justify-center border">
                <GridPattern
                  width={11.2}
                  height={11.2}
                  x={-1}
                  y={-1}
                  strokeDasharray={"1 1"}
                  className={cn("-z-10")}
                />
                <DIcons.Plus
                  strokeWidth={0.5}
                  className="text-aired absolute -left-3 -top-3 h-5 w-5"
                />
                <DIcons.Plus
                  strokeWidth={0.5}
                  className="text-aired absolute -bottom-3 -left-3 h-5 w-5"
                />
                <DIcons.Plus
                  strokeWidth={0.5}
                  className="text-aired absolute -right-3 -top-3 h-5 w-5"
                />
                <DIcons.Plus
                  strokeWidth={0.5}
                  className="text-aired absolute -bottom-3 -right-3 h-5 w-5"
                />

                <CSSTransition
                  in={history.length > 0}
                  nodeRef={svgRef}
                  timeout={200}
                  className=""
                  unmountOnExit
                >
                  <ResultDIcon
                    size={200}
                    settings={settings}
                    IconComponent={IconComponent}
                    ref={svgRef}
                    strokeWidth={0}
                  />
                </CSSTransition>
              </div>
              <div className="mt-4 flex justify-center gap-2">
                <div className="grid gap-2">
                  <DownloadPNG
                    open={showExportModal}
                    onOpenChange={setShowExportModal}
                    onStartExport={() => toast("PNG Image Downloaded")}
                    fileName={settings.fileName}
                    svgRef={svgRef}
                  />
                  <DownloadSVG
                    open={showExportModal}
                    onOpenChange={setShowExportModal}
                    onStartExport={() => toast("SVG Image Downloaded")}
                    fileName={settings.fileName}
                    svgRef={svgRef}
                  />
                </div>
                <div className="grid gap-2">
                  {pngClipboardSupported && (
                    <Button
                      variant="outline"
                      size="icon"
                      className=""
                      onSelect={onCopyImageToClipboard}
                    >
                      <DIcons.Copy strokeWidth={1} className="h-3 w-3" />
                    </Button>
                  )}
                  {pngClipboardSupported && (
                    <Button
                      variant="outline"
                      size="icon"
                      className=""
                      onSelect={onCopyImageToClipboard}
                    >
                      <DIcons.Copy strokeWidth={1} className="h-3 w-3" />
                    </Button>
                  )}
                </div>
              </div>
            </div>
            <div className={""}>
              <div className="grid gap-2 px-6 md:px-0">
                <form
                  className="grid gap-2"
                  onChange={onFormChange}
                  ref={formRef}
                >
                  <div className="mt-10 w-full">
                    <div className="grid gap-6">
                      {!customSvgIsPng && (
                        <div className="flex items-center justify-between">
                          <span className="pr-5 text-xs">Color</span>
                          <ColorInput
                            value={settings.iconColor}
                            name="iconColor"
                            onChange={onChangeColorSetting("iconColor")}
                            recentColors={recentColors}
                          />
                        </div>
                      )}

                      <div className="grid items-center gap-2">
                        <div className="flex items-center justify-between">
                          <span className="pr-5 text-xs">Stroke Width</span>
                          <div className="flex items-center gap-1">
                            <span className="flex w-[30px] justify-end font-semibold">
                              {settings.strokeWidth}
                            </span>
                            <span className="text-xs"> px</span>
                          </div>
                        </div>
                        <div className="">
                          <div className="flex flex-1 justify-end gap-2">
                            <Slider
                              name="strokeWidth"
                              defaultValue={[settings.strokeWidth]}
                              min={0.5}
                              max={3}
                              step={0.1}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="grid items-center gap-2">
                        <div className="flex items-center justify-between">
                          <span className="pr-5 text-xs">Size</span>
                          <div className="flex items-center gap-1">
                            <span className="flex w-[30px] justify-end font-semibold">
                              {settings.iconSize}
                            </span>
                            <span className="text-xs"> px</span>
                          </div>
                        </div>
                        <div className="">
                          <div className="flex flex-1 justify-end gap-2">
                            <Slider
                              name="iconSize"
                              defaultValue={[settings.iconSize]}
                              min={20}
                              max={200}
                              step={1}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
                <Link href={"/dicons/icons"}>
                  <Button size="lg" className="mt-6 h-10 w-full">
                    Edit {settings.icon}
                    <DIcons.Plus className="mx-1 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="relative grid w-full justify-between">
          <div className="h-auto p-6">
            <div ref={iconsWrapperRef} className={""}>
              <div className="">
                <div className="grid justify-center gap-3 text-center md:flex md:justify-start">
                  <h1 className="py-2 text-xl font-semibold">
                    Designali Icons
                  </h1>
                  <div className="flex gap-3">
                    <div className="relative">
                      <Input
                        type="text"
                        value={searchTerm}
                        ref={searchRef}
                        onChange={onChangeSearchTerm}
                        placeholder={`Search ${filteredIcons.length} icons...`}
                        aria-label="Search Icon"
                        className="h-10 w-full rounded-full pl-12"
                        id="search"
                      />
                      <Label htmlFor="search">
                        <DIcons.Search
                          strokeWidth={1}
                          className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2"
                        />
                      </Label>
                    </div>

                    <Button
                      variant="outline"
                      size="lgicon"
                      className="h-10 w-10"
                      onClick={onRandomIconClick}
                      title="Random icon"
                    >
                      <DIcons.Shuffle strokeWidth={1} className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="">
                {filteredIcons.length === 0 ? (
                  <div className="mt-20 grid gap-2 text-center">
                    <p>We couldn’t find an icon for that</p>
                    <Link
                      className=""
                      href={`mailto:${FEEDBACK_EMAIL}?subject=Request%20Icon`}
                    >
                      <Button>Request an Icon</Button>
                    </Link>
                  </div>
                ) : (
                  <div className="my-6">
                    <div className="">
                      <h4 className="pb-3 text-center text-slate-600 dark:text-slate-400 md:text-left">
                        {searchTerm ? "Results" : "All Icons"}
                      </h4>

                      <ScrollArea>
                        <div className="flex h-[400px] w-full flex-wrap gap-2 md:h-[650px]">
                          {filteredIcons.map((icon) => {
                            const Component = DIcons[icon];
                            return (
                              <div>
                                <RadioGroup
                                  className="relative"
                                  defaultValue="option-one"
                                >
                                  <RadioGroupItem
                                    className="absolute -z-10"
                                    value={icon}
                                    checked={icon === settings.icon}
                                    onChange={() => onChangeIcon(icon)}
                                  />
                                </RadioGroup>
                                <Label className="" key={icon}>
                                  <div className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-md border transition hover:border-ali hover:bg-slate-100 hover:dark:bg-slate-900">
                                    <Component
                                      width={24}
                                      height={24}
                                      stroke={settings.iconColor}
                                      strokeWidth={settings.strokeWidth}
                                    />
                                    <Input
                                      type="radio"
                                      className="hidden"
                                      name="icon"
                                      value={icon}
                                      checked={icon === settings.icon}
                                      onChange={() => onChangeIcon(icon)}
                                    />
                                  </div>
                                </Label>
                              </div>
                            );
                          })}
                        </div>
                      </ScrollArea>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto h-screen max-w-sm gap-6 md:border-l">
          <ScrollArea>
            <div className="h-screen px-6 py-6">
              <div className="">
                <h1 className="text-2xl font-semibold">What is DIcons?</h1>
                <p className="py-3 text-sm text-slate-600 dark:text-slate-400">
                  Dicons is an open-source icon library that provides 1000+
                  vector (svg) files for displaying icons and symbols in digital
                  and non-digital projects. The library aims to make it easier
                  for designers and developers to incorporate icons into their
                  projects by providing several official packages to make it
                  easier to use these icons in your project.
                </p>
              </div>
              <div className="">
                <h1 className="py-3 text-slate-600 dark:text-slate-400">
                  Import
                </h1>
                <Tabs defaultValue="1">
                  <TabsList>
                    <TabsTrigger value="1">All Icons</TabsTrigger>
                    <TabsTrigger value="2">One Icon</TabsTrigger>
                  </TabsList>
                  <TabsContent className="-mt-2" value="1">
                    <CodeBlock
                      title={".tsx"}
                      children={`import { DIcons } from 'dicons';

const App = () => {
  return (
    <DIcons.${settings.icon} />
  );
};

export default App;`}
                    />
                  </TabsContent>
                  <TabsContent className="-mt-2" value="2">
                    <CodeBlock
                      title={".tsx"}
                      children={`import { ${settings.icon} from 'dicons';

const App = () => {
  return (
    <${settings.icon} />
  );
};

export default App;`}
                    />
                  </TabsContent>
                </Tabs>
              </div>
              <div className="grid gap-6">
                <div className="grid gap-6">
                  <div className="">
                    <h1 className="py-3 text-slate-600 dark:text-slate-400">
                      Installation
                    </h1>
                    <Tabs defaultValue="npm">
                      <TabsList>
                        <TabsTrigger value="npm">npm</TabsTrigger>
                        <TabsTrigger value="pnpm">pnpm</TabsTrigger>
                        <TabsTrigger value="yarn">yarn</TabsTrigger>
                      </TabsList>
                      <TabsContent className="-mt-2" value="npm">
                        <CodeBlock
                          title={"React/Nextjs"}
                          children={`npm install dicons`}
                        />
                      </TabsContent>
                      <TabsContent className="-mt-2" value="pnpm">
                        <CodeBlock
                          title={"React/Nextjs"}
                          children={`pnpm install dicons`}
                        />
                      </TabsContent>
                      <TabsContent className="-mt-2" value="yarn">
                        <CodeBlock
                          title={"React/Nextjs"}
                          children={`yarn add dicons`}
                        />
                      </TabsContent>
                    </Tabs>
                  </div>
                  <div>
                    <h1 className="py-3 text-slate-600 dark:text-slate-400">
                      Settings
                    </h1>
                    <Tabs defaultValue="1">
                      <TabsList>
                        <TabsTrigger value="1">Color</TabsTrigger>
                        <TabsTrigger value="2">Sizing</TabsTrigger>
                        <TabsTrigger value="3">Stroke Width</TabsTrigger>
                      </TabsList>
                      <TabsContent className="-mt-2" value="1">
                        <CodeBlock
                          title={".tsx"}
                          children={`<${settings.icon} color="${settings.iconColor}" />`}
                        />
                      </TabsContent>
                      <TabsContent className="-mt-2" value="2">
                        <CodeBlock
                          title={".tsx"}
                          children={`<${settings.icon} size={64} />`}
                        />
                      </TabsContent>
                      <TabsContent className="-mt-2" value="3">
                        <CodeBlock
                          title={".tsx"}
                          children={`<${settings.icon} strokeWidth={${settings.strokeWidth}} />`}
                        />
                      </TabsContent>
                    </Tabs>
                  </div>
                  <div className="w-full pb-10">
                    <Link href={"/guides/dicons"}>
                      <Button size="lg" className="h-10 w-full">
                        Go to Docs
                        <DIcons.Plus className="mx-1 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </ScrollArea>
        </div>
      </main>
    </div>
  );
};
