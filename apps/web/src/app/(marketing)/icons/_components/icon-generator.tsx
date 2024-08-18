"use client";

import React, { use, useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Icons } from "@/components/icons";
import {
  debounce,
  getPastedSvgFile,
  randomElement,
  randomNumberBetween,
  uniq,
} from "@/lib/dutils";
import { ColorInput } from "@/src/components/common/colors/color-input";
import CustomSvgIcon from "@/src/components/common/colors/CustomSvgIcon";
import ExportModal from "@/src/components/common/colors/export-modal";
import { presets } from "@/src/components/common/colors/grad-types";
import ResultIcon from "@/src/components/common/colors/result-icon";
import usePngClipboardSupported from "@/src/components/common/colors/usePngClipboardSupported";
import { SettingsType } from "@/src/types";
import { cn } from "@designali/ui";
import { Badge } from "@designali/ui/badge";
import { Button } from "@designali/ui/button";
import { Input } from "@designali/ui/input";
import { Label } from "@designali/ui/label";
import { ScrollArea } from "@designali/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@designali/ui/select";
import { Switch } from "@designali/ui/switch";
import { toast } from "@designali/ui/toaster";
import { ColorChangeHandler } from "react-color";
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
  const [iconsPanelOpened, setIconsPanelOpened] = useState<boolean>(false);
  const [optionsPanelOpened, setOptionsPanelOpened] = useState<boolean>(false);

  const [draggingFile, setDraggingFile] = useState<boolean>(false);
  const [settings, setSettings] = useState<SettingsType>({
    fileName: "extension_icon",
    icon: "",
    backgroundRadius: 128,
    backgroundStrokeSize: 0,
    backgroundStrokeColor: "#FFFFFF",
    backgroundRadialGlare: false,
    backgroundNoiseTexture: false,
    backgroundNoiseTextureOpacity: 25,
    backgroundStrokeOpacity: 100,
    backgroundPosition: "50%,0%",
    backgroundSpread: 100,
    backgroundAngle: 0,
    iconSize: 352,
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

  const undo = useCallback(() => {
    if (history.length <= 1) {
      return;
    }
    history.pop();
    setRedoHistory((redoHistory) => [...redoHistory, settings]);
    setSettings(history[history.length - 1]);
    return setHistory(history);
  }, [history, settings]);

  const redo = useCallback(() => {
    if (redoHistory.length === 0) {
      return;
    }
    const lastHistory = redoHistory.pop();
    if (lastHistory) {
      setHistory((redoHistory) => [...redoHistory, lastHistory]);
      setSettings(lastHistory);
    }
    return setRedoHistory(redoHistory);
  }, [redoHistory]);

  const onChangeIcon = (value: string) => {
    pushNewSettings({
      icon: value as "",
      customSvg: undefined,
    });
  };

  const onRandomIconClick = () => {
    pushNewSettings({
      icon: randomElement(Object.keys(Icons) as ""[]),
    });
  };

  const onCopyImageToClipboard = useCallback(async () => {
    if (svgRef.current) {
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
      const randomIcon = randomElement(Object.keys(Icons) as ""[]);
      const settingsToSet = {
        ...currentSettings,
        icon: randomIcon,
      };
      setHistory([settingsToSet]);
      setPanelsVisible(true);
      return settingsToSet;
    });
  }, []);

  const onSelectCustomIcon = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    localStorage.setItem("uploadCustomIconClicked", "1");
    if (event && event.target && event.target.files) {
      const file = event.target.files[0];
      if (file?.type === "image/svg+xml") {
        const customSvg = await file.text();
        if (customSvg) {
          toast("Image pasted to canvas");
          pushNewSettings({
            customSvg,
            icon: undefined,
          });
        } else {
          toast(
            "We don't support that file format. Try dropping an .SVG or .PNG file instead.",
          );
        }
      } else if (file?.type === "image/png") {
        const reader = new FileReader();
        reader.onload = () => {
          const customPng = reader.result as string;
          toast("Image pasted to canvas");
          pushNewSettings({
            customSvg: customPng,
            icon: undefined,
          });
        };
        reader.onerror = () => {
          toast("Failed to read the file. Please try again.");
        };
        reader.readAsDataURL(file);
      } else {
        toast(
          "We don't support that file format. Try dropping an .SVG or .PNG file instead.",
        );
      }
    }
  };

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

  const onPresetChange = (preset: Partial<SettingsType>, index: number) => {
    pushNewSettings({
      ...preset,
      selectedPresetIndex: index,
    });
  };

  const onChangeSearchTerm: React.FormEventHandler<HTMLInputElement> = (
    event,
  ) => {
    const newSeachTerm = (event.target as HTMLInputElement).value;
    router.replace(`?q=${newSeachTerm}`);
  };

  const onFileNameBlured = (event: React.ChangeEvent<HTMLDivElement>) => {
    pushNewSettings({
      fileName:
        (event.currentTarget as HTMLDivElement).textContent || "extension_name",
    });
  };
  const onFileNameKeydown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      event.currentTarget.blur();
      pushNewSettings({
        fileName: (event.currentTarget as HTMLDivElement).textContent || "",
      });
    }
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

  const onChangeAngle = (event: React.ChangeEvent<HTMLInputElement>) => {
    return pushNewSettings({
      backgroundAngle: Number(event.target.value),
      selectedPresetIndex: null,
    });
  };

  // TODO: update to the latest react-color when it is released and use onChangeComplete
  const onSaveRecentColor = debounce((color: string) => {
    setRecentColors((colors) => uniq([color, ...colors]).slice(0, 16));
  });

  const onChangeFillType = (newValue: string) => {
    if (newValue) {
      pushNewSettings({
        backgroundFillType: newValue,
        selectedPresetIndex: null,
      });
    }
  };

  const onChangeBackgroundPosition = (newValue: string) => {
    if (newValue) {
      pushNewSettings({
        backgroundPosition: newValue,
        selectedPresetIndex: null,
      });
    }
  };

  const onChangeScale = (newValue: string) => {
    if (newValue) {
      setScale(Number(newValue));
    }
  };

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
    IconComponent = Icons[settings.icon];
  }

  const filteredIcons = Object.keys(Icons).filter((key) =>
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

  const fillTypeOptions = [
    { value: "Linear", label: "Linear" },
    { value: "Radial", label: "Radial" },
    { value: "Solid", label: "Solid" },
  ];

  const backgroundPositionOptions = [
    { value: "50%,50%", label: "Center" },
    { value: "50%,0%", label: "Top" },
    { value: "100%,50%", label: "Right" },
    { value: "50%,100%", label: "Bottom" },
    { value: "0%,50%", label: "Left" },
  ];

  const onShare = async () => {
    try {
      const url =
        window.location.href.split("?")[0] +
        "?" +
        new URLSearchParams(settings as any).toString();
      await navigator.share({
        title: "Raycast Icon",
        url,
      });
    } catch (err) {
      console.error("sharing not available");
    }
  };

  return (
    <div className="">
      <ExportModal
        open={showExportModal}
        onOpenChange={setShowExportModal}
        onStartExport={() => showInfoMessage("Download started", false)}
        fileName={settings.fileName}
        svgRef={svgRef}
      />
      <div className="fixed top-14 z-10 flex h-14 w-full items-center justify-center gap-2 border-b border-t bg-slate-100/60 backdrop-blur-md backdrop-filter dark:bg-slate-900/60">
        <div className={cn("flex items-center justify-between gap-2")}>
          <Button
            variant="outline"
            className={""}
            disabled={history.length <= 1}
            title={`cmd+z`}
            onClick={undo}
          >
            <Icons.undo className="mr-1 h-4 w-4" />
            <span className={""}>Undo</span>
          </Button>

          <Button
            variant="outline"
            className={""}
            disabled={redoHistory.length === 0}
            title={`shift+cmd+z`}
            onClick={redo}
          >
            <Icons.redo className="mr-1 h-4 w-4" />
            <span className={""}>Redo</span>
          </Button>

          <div
            className={"px-10"}
            contentEditable
            onBlur={onFileNameBlured}
            onKeyDown={onFileNameKeydown}
          >
            {settings.fileName}
          </div>
        </div>
        <div className="flex justify-center">
          <Button variant="ghost" onClick={onShare}>
            <Icons.share className="mr-1 h-4 w-4" />
          </Button>
          <div className="flex items-center gap-2">
            <Button
              variant="default"
              size="md"
              className={""}
              onClick={() => setShowExportModal(true)}
            >
              <Icons.download className="mr-1 h-4 w-4" />
              Export
            </Button>
            {pngClipboardSupported && (
              <Button
                variant="outline"
                size="icon"
                className="h-10 w-10"
                onSelect={onCopyImageToClipboard}
              >
                <Icons.copy className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      </div>

      <main
        className={"mt-28 grid justify-center gap-8 md:flex md:h-screen"}
        ref={mainRef}
      >
        <div className="left-0 mx-auto flex h-screen max-w-sm border-r md:absolute">
          <div className="">
            <div ref={iconsWrapperRef} className={""}>
              <div className="p-3">
                <h1 className="py-3 text-center text-2xl font-semibold">
                  Designali Icons
                </h1>
                <div className="flex justify-center gap-3">
                  <div className="relative mb-4">
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
                      <Icons.search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2" />
                    </Label>
                  </div>

                  <Button
                    variant="outline"
                    size="lgicon"
                    className="h-10 w-10"
                    onClick={onRandomIconClick}
                    title="Random icon"
                  >
                    <Icons.shuffle className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="lgicon" className="h-10 w-10">
                    <Input
                      type="file"
                      className=""
                      onChange={onSelectCustomIcon}
                      accept=".svg, .png"
                    />
                  </Button>
                </div>
              </div>
              <div className="px-4">
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
                  <div className="">
                    <h4 className="pb-3 text-center">
                      {searchTerm ? "Results" : "All Icons"}
                    </h4>

                    <ScrollArea>
                      <div className="flex h-[890px] w-full flex-wrap justify-center gap-2">
                        {filteredIcons.map((icon) => {
                          const Component = Icons[icon];
                          return (
                            <div>
                              <Label className="" key={icon}>
                                <div className="flex h-20 w-20 items-center justify-center rounded-md border">
                                  <Input
                                    type="radio"
                                    className="hidden"
                                    name="icon"
                                    value={icon}
                                    checked={icon === settings.icon}
                                    onChange={() => onChangeIcon(icon)}
                                  />
                                  <Component width={36} height={36} />
                                </div>
                              </Label>
                            </div>
                          );
                        })}
                      </div>
                    </ScrollArea>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div
          className=""
          style={{
            width: `${512 * scale + 32}px`,
            height: `${512 * scale + 32}px`,
          }}
          onClick={() => {
            setIconsPanelOpened(false);
            setOptionsPanelOpened(false);
          }}
        >
          <div
            className="mt-40"
            style={
              scale > 1
                ? {
                    transform: `scale(${scale})`,
                  }
                : {}
            }
          >
            <CSSTransition
              in={history.length > 0}
              nodeRef={svgRef}
              timeout={300}
              classNames={""}
              unmountOnExit
            >
              <ResultIcon
                settings={settings}
                IconComponent={IconComponent}
                ref={svgRef}
              />
            </CSSTransition>
          </div>

          <div className={"relative mt-10"}>
            <Badge className="absolute right-0 h-8" variant="outline">
              512 x 512
            </Badge>
            <div className="absolute">
              <Select
                defaultValue={`${scale}`}
                value={`${scale}`}
                onValueChange={onChangeScale}
              >
                <SelectTrigger className="w-sm h-10">
                  <SelectValue placeholder="Scale" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {scaleOptions.map((option) => (
                      <div>
                        <SelectItem value={`${option.value}`}>
                          {option.label}
                        </SelectItem>
                      </div>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="right-0 mx-auto flex max-w-sm border-l md:absolute md:h-screen">
          <ScrollArea>
            <div className={"p-4"}>
              <div className="grid gap-2">
                <details
                  className="flex rounded-lg bg-slate-100 p-4 dark:bg-slate-900"
                  open
                >
                  <summary className="flex items-center justify-between gap-2">
                    <h1 className="text-md px-4 text-center">Presets</h1>
                    <div className="flex gap-2 px-4">
                      <Icons.plus className="" />
                    </div>
                  </summary>
                  <ScrollArea>
                    <div className="mt-4 flex h-[300px] flex-wrap justify-center gap-2">
                      {presets.map((preset, index) => {
                        return (
                          <div className="">
                            <Label key={index} className="">
                              <div className="flex h-20 w-20 items-center justify-center rounded-md border">
                                <Input
                                  type="radio"
                                  className="hidden"
                                  name="preset"
                                  value={index}
                                  checked={
                                    settings.selectedPresetIndex === null
                                      ? false
                                      : index ===
                                        Number(settings.selectedPresetIndex)
                                  }
                                  onChange={() => onPresetChange(preset, index)}
                                />
                                <ResultIcon
                                  size={72}
                                  isPreview
                                  settings={{
                                    ...settings,
                                    ...preset,
                                    backgroundRadius: 10,
                                  }}
                                />
                              </div>
                            </Label>
                          </div>
                        );
                      })}
                    </div>
                  </ScrollArea>
                </details>
                <form onChange={onFormChange} ref={formRef}>
                  <details className="flex rounded-lg bg-slate-100 p-4 dark:bg-slate-900">
                    <summary className="flex items-center justify-between gap-2">
                      <h1 className="text-md px-4 text-center">Fill Styles</h1>
                      <div className="flex gap-2 px-4">
                        <Icons.plus className="" />
                      </div>
                    </summary>

                    <div className="grid gap-2 p-4">
                      <label className="flex items-center justify-between">
                        <span className="text-xs">Fill Type</span>
                        <Select
                          name="backgroundFillType"
                          value={settings.backgroundFillType}
                          onValueChange={onChangeFillType}
                        >
                          <SelectTrigger className="h-10 w-auto">
                            <SelectValue placeholder="Scale" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              {fillTypeOptions.map((option) => (
                                <div>
                                  <SelectItem
                                    key={option.value}
                                    value={option.value}
                                  >
                                    {option.label}
                                  </SelectItem>
                                </div>
                              ))}
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </label>
                      <label className="flex items-center justify-between">
                        <span className="text-xs">
                          {settings.backgroundFillType === "Solid"
                            ? "Color"
                            : "Primary color"}
                        </span>
                        <ColorInput
                          value={settings.backgroundStartColor}
                          name="backgroundStartColor"
                          onChange={onChangeColorSetting(
                            "backgroundStartColor",
                          )}
                          recentColors={recentColors}
                        />
                      </label>
                      {settings.backgroundFillType !== "Solid" && (
                        <label className="flex items-center justify-between">
                          <span className="text-xs">Secondary color</span>
                          <ColorInput
                            value={settings.backgroundEndColor}
                            name="backgroundEndColor"
                            onChange={onChangeColorSetting(
                              "backgroundEndColor",
                            )}
                            recentColors={recentColors}
                          />
                        </label>
                      )}
                      {settings.backgroundFillType === "Radial" ? (
                        <>
                          <label className="flex items-center justify-between">
                            <span className="text-xs">Position</span>
                            <Select
                              name="backgroundPosition"
                              value={settings.backgroundPosition}
                              onValueChange={onChangeBackgroundPosition}
                            >
                              <SelectTrigger className="h-10 w-auto">
                                <SelectValue placeholder="Scale" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectGroup>
                                  {backgroundPositionOptions.map((option) => (
                                    <div>
                                      <SelectItem
                                        key={option.value}
                                        value={option.value}
                                      >
                                        {option.label}
                                      </SelectItem>
                                    </div>
                                  ))}
                                </SelectGroup>
                              </SelectContent>
                            </Select>
                          </label>
                          <label className="flex items-center justify-between">
                            <span className="text-xs">Spread</span>
                            <Input
                              name="backgroundSpread"
                              type="number"
                              defaultValue={settings.backgroundSpread}
                              min={0}
                              max={100}
                              className="w-[120px]"
                            />
                            %
                          </label>
                        </>
                      ) : settings.backgroundFillType === "Linear" ? (
                        <label className="flex items-center justify-between">
                          <span className="text-xs">Angle</span>
                          <Input
                            name="backgroundAngle"
                            type="number"
                            onChange={onChangeAngle}
                            defaultValue={settings.backgroundAngle}
                            min={0}
                            max={360}
                            className="w-[120px]"
                          />
                          º
                        </label>
                      ) : null}
                    </div>
                  </details>
                  <div className="mt-2 grid gap-2">
                    <details
                      className="flex rounded-lg bg-slate-100 p-4 dark:bg-slate-900"
                      open
                    >
                      <summary className="flex items-center justify-between gap-2">
                        <h1 className="text-md px-4 text-center">Background</h1>
                        <div className="flex gap-2 px-4">
                          <Icons.plus className="" />
                        </div>
                      </summary>
                      <div className="grid gap-2 p-4">
                        <div className="flex items-center justify-between">
                          <span className="text-xs">Radial glare</span>
                          <Switch
                            name="backgroundRadialGlare"
                            checked={settings.backgroundRadialGlare}
                            onCheckedChange={(checked) =>
                              pushNewSettings({
                                backgroundRadialGlare: checked,
                              })
                            }
                            className="focus-visible:ring-offset-gray-3"
                          />
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="text-xs">Noise texture</span>
                          <Switch
                            name="backgroundNoiseTexture"
                            checked={settings.backgroundNoiseTexture}
                            onCheckedChange={(checked) =>
                              pushNewSettings({
                                backgroundNoiseTexture: checked,
                              })
                            }
                            className="focus-visible:ring-offset-gray-3"
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs">Noise opacity</span>
                          <Input
                            name="backgroundNoiseTextureOpacity"
                            type="number"
                            min={0}
                            max={100}
                            defaultValue={
                              settings.backgroundNoiseTextureOpacity
                            }
                            className="w-[120px]"
                          />
                          %
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs">Radius</span>
                          <Input
                            name="backgroundRadius"
                            type="number"
                            min={0}
                            max={256}
                            defaultValue={settings.backgroundRadius}
                            className="w-[120px]"
                          />
                          px
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs">Stroke size</span>
                          <Input
                            name="backgroundStrokeSize"
                            type="number"
                            min={0}
                            defaultValue={settings.backgroundStrokeSize}
                            className="w-[120px]"
                          />
                          px
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs">Stroke color</span>
                          <ColorInput
                            value={settings.backgroundStrokeColor}
                            name="backgroundStrokeColor"
                            onChange={onChangeColorSetting(
                              "backgroundStrokeColor",
                            )}
                            recentColors={recentColors}
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs">Stroke opacity</span>
                          <Input
                            name="backgroundStrokeOpacity"
                            type="number"
                            defaultValue={settings.backgroundStrokeOpacity}
                            className="w-[120px]"
                          />
                          %
                        </div>
                      </div>
                    </details>

                    <details className="flex rounded-lg bg-slate-100 p-4 dark:bg-slate-900">
                      <summary className="flex items-center justify-between gap-2">
                        <h1 className="text-md px-4 text-center">Icon</h1>
                        <div className="flex gap-2 px-4">
                          <Icons.plus className="" />
                        </div>
                      </summary>

                      <div className="grid gap-2 p-4">
                        {!customSvgIsPng && (
                          <div className="flex items-center justify-between">
                            <span className="text-xs">Color</span>
                            <ColorInput
                              value={settings.iconColor}
                              name="iconColor"
                              onChange={onChangeColorSetting("iconColor")}
                              recentColors={recentColors}
                            />
                          </div>
                        )}
                        <div className="flex items-center justify-between">
                          <span className="text-xs">Size</span>
                          <div className="">
                            <Input
                              name="iconSize"
                              type="number"
                              defaultValue={settings.iconSize}
                              min={0}
                              className="w-[120px]"
                            />
                            px
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs">X Offset</span>
                          <div className={""}>
                            <Input
                              name="iconOffsetX"
                              type="number"
                              defaultValue={settings.iconOffsetX}
                              className="w-[120px]"
                            />
                            px
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs">Y Offset</span>
                          <div className="flex flex-col">
                            <Input
                              name="iconOffsetY"
                              type="number"
                              defaultValue={settings.iconOffsetY}
                              className="w-[120px]"
                            />
                            px
                          </div>
                        </div>
                      </div>
                    </details>
                  </div>
                </form>
              </div>
            </div>
          </ScrollArea>
        </div>
      </main>
    </div>
  );
};
