/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
/* eslint-disable @typescript-eslint/no-misused-promises */
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
  getPastedSvgFile,
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
import GridPattern from "@/src/components/ui/grid-pattern";
import { cn } from "@designali/ui";
import { Button } from "@designali/ui/button";
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

let infoMessageTimeout: NodeJS.Timeout | undefined;

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
  const [infoMessage, setInfoMessage] = useState<string>();
  const [infoMessageVisible, setInfoMessageVisible] = useState<boolean>(false);
  const [showInfoMessageUndoButton, setShowInfoMessageUndoButton] =
    useState<boolean>(true);
  const [iconpelOpened, setIconpelOpened] = useState<boolean>(false);
  const [optionpelOpened, setOptionpelOpened] = useState<boolean>(false);

  const [draggingFile, setDraggingFile] = useState<boolean>(false);
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
  const mainRef = useRef<HTMLElement>(null);
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

  const showInfoMessage = (message: string, showUndo = false) => {
    if (infoMessageTimeout) {
      clearTimeout(infoMessageTimeout);
    }
    setInfoMessageVisible(true);
    setInfoMessage(message);
    setShowInfoMessageUndoButton(showUndo);
    infoMessageTimeout = setTimeout(() => {
      setInfoMessageVisible(false);
    }, 3000);
  };

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

  // Custom SVG icons support: copy/paste, drag-n-drop
  useEffect(() => {
    async function onPaste(event: ClipboardEvent) {
      try {
        const customSvg = await getPastedSvgFile(
          event.clipboardData?.items || [],
        );
        if (customSvg) {
          showInfoMessage("Image pasted to canvas", true);
          pushNewSettings({
            customSvg,
            icon: undefined,
          });
        }
      } catch (err) {
        console.log(err);
      }
    }

    async function onDrop(event: DragEvent) {
      event.preventDefault();
      setDraggingFile(false);
      try {
        const customSvg = await getPastedSvgFile(
          event.dataTransfer?.items || [],
        );
        if (customSvg) {
          showInfoMessage("Image pasted to canvas", true);
          pushNewSettings({
            customSvg,
            icon: undefined,
          });
        }
      } catch (err) {
        showInfoMessage(err as string, false);
      }
    }

    function onDragOver(event: DragEvent) {
      setDraggingFile(true);
      event.preventDefault();
    }

    function onDragLeave() {
      setDraggingFile(false);
    }

    document.addEventListener("paste", onPaste);
    document.addEventListener("drop", onDrop);
    document.addEventListener("dragover", onDragOver);
    document.addEventListener("dragleave", onDragLeave);

    return () => {
      document.removeEventListener("paste", onPaste);
      document.removeEventListener("drop", onDrop);
      document.removeEventListener("dragover", onDragOver);
      document.removeEventListener("dragleave", onDragLeave);
    };
  }, [pushNewSettings]);

  useEffect(() => {
    const mainRefCurent = mainRef?.current;

    if (mainRefCurent) {
      mainRefCurent.addEventListener("wheel", onWheel, { passive: false });
    }

    return () => {
      if (mainRefCurent) {
        mainRefCurent.removeEventListener("wheel", onWheel);
      }
    };
  }, [mainRef]);

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
          if (
            key === "backgroundRadialGlare" ||
            key === "backgroundNoiseTexture"
          ) {
            value = value === "true" || value === "1";
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

    // If these properties change, we need to detach from preset
    const shouldDetatchPreset =
      data.backgroundStartColor !== settings.backgroundStartColor ||
      data.backgroundEndColor !== settings.backgroundEndColor ||
      data.backgroundAngle !== settings.backgroundAngle;

    pushNewSettings({
      ...data,
      backgroundRadialGlare: data.backgroundRadialGlare ? true : false,
      backgroundNoiseTexture: data.backgroundNoiseTexture ? true : false,
      selectedPresetIndex: shouldDetatchPreset
        ? null
        : settings.selectedPresetIndex,
    });
  };

  const onChangeSearchTerm: React.FormEventHandler<HTMLInputElement> = (
    event,
  ) => {
    const newSeachTerm = (event.target as HTMLInputElement).value;
    router.replace(`?q=${newSeachTerm}`);
  };

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

  const onWheel = (event: WheelEvent) => {
    if (event.ctrlKey || event.metaKey) {
      setScale((currentScale) => currentScale + 0.0001 * event.deltaY);
      event.preventDefault();
      event.stopPropagation();
    }
  };

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
    <div className="border-b border-t md:h-[900px]">
      <main className={"flex-1 md:flex"}>
        <div className="-z-0 mx-auto grid max-w-md border-r md:h-[898px]">
          <div className="p-6">
            <div className="relative">
              <p className="my-4 text-center">{settings.icon}</p>
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
                    onStartExport={() =>
                      showInfoMessage("Download started", false)
                    }
                    fileName={settings.fileName}
                    svgRef={svgRef}
                  />
                  <DownloadSVG
                    open={showExportModal}
                    onOpenChange={setShowExportModal}
                    onStartExport={() =>
                      showInfoMessage("Download started", false)
                    }
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
              <div className="grid gap-2">
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
                              step={5}
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
        <div className="relative w-full">
          <div className="p-6">
            <div ref={iconsWrapperRef} className={""}>
              <div className="">
                <div className="flex justify-center gap-3 md:justify-start">
                  <div className="relative">
                    <Input
                      type="text"
                      value={searchTerm}
                      ref={searchRef}
                      onChange={onChangeSearchTerm}
                      placeholder="Search Icon"
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
                      <h4 className="pb-3 text-center md:text-left">
                        {searchTerm ? "Results" : "All Icons"}
                      </h4>

                      <ScrollArea>
                        <div className="flex h-[500px] w-full flex-wrap gap-2 md:h-auto">
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
      </main>
    </div>
  );
};
