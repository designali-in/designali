"use client";

import React, { use, useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Icons } from "@/components/icons";
import useHotkeys from "@/utils/useHotkeys";
import { cn } from "@designali/ui";
import { Badge } from "@designali/ui/badge";
import { Button } from "@designali/ui/button";
import { Label } from "@designali/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@designali/ui/select";
import { Switch } from "@designali/ui/switch";
import { toast } from "@designali/ui/toaster";
import * as Popover from "@radix-ui/react-popover";
import { SelectItemText } from "@radix-ui/react-select";
import { ColorChangeHandler, SketchPicker } from "react-color";
import { CSSTransition } from "react-transition-group";
import { svgAsPngUri } from "save-svg-as-png";

import type { SettingsType } from "./lib/types";
import DropZoneIndicator from "./assets/drop-zone-indicator.svg";
import CustomSvgIcon from "./components/CustomSvgIcon";
import ExportModal from "./components/ExportModal";
import { Input, InputSlot } from "./components/input";
import { NavigationActions } from "./components/navigation";
import ResultIcon from "./components/ResultIcon";
import usePngClipboardSupported from "./components/usePngClipboardSupported";
import styles from "./icon-generator.module.css";
import {
  debounce,
  getPastedSvgFile,
  randomElement,
  randomNumberBetween,
  uniq,
} from "./lib/utils";

const scales = [0.25, 0.5, 1, 2];

const FEEDBACK_EMAIL = "feedback+rayso@raycast.com";

type PresetType = Pick<
  SettingsType,
  | "backgroundFillType"
  | "backgroundStartColor"
  | "backgroundEndColor"
  | "backgroundAngle"
  | "backgroundPosition"
  | "iconColor"
>;

const presets: PresetType[] = [
  {
    backgroundFillType: "Linear",
    backgroundStartColor: "#8E2DE2",
    backgroundEndColor: "#4A00E0",
    backgroundAngle: 45,
    iconColor: "#FFFFFF",
  },
  {
    backgroundFillType: "Linear",
    backgroundStartColor: "#99F2C8",
    backgroundEndColor: "#1F4037",
    backgroundAngle: 45,
    iconColor: "#FFFFFF",
  },
  {
    backgroundFillType: "Linear",
    backgroundStartColor: "#F953C6",
    backgroundEndColor: "#B91D73",
    backgroundAngle: 45,
    iconColor: "#FFFFFF",
  },
  {
    backgroundFillType: "Linear",
    backgroundStartColor: "#91EAE4",
    backgroundEndColor: "#7F7FD5",
    backgroundAngle: 45,
    iconColor: "#FFFFFF",
  },
  {
    backgroundFillType: "Linear",
    backgroundStartColor: "#F5AF19",
    backgroundEndColor: "#F12711",
    backgroundAngle: 45,
    iconColor: "#FFFFFF",
  },
  {
    backgroundFillType: "Linear",
    backgroundStartColor: "#EAAFC8",
    backgroundEndColor: "#EC2F4B",
    backgroundAngle: 45,
    iconColor: "#FFFFFF",
  },
  {
    backgroundFillType: "Linear",
    backgroundStartColor: "#FF7DB4",
    backgroundEndColor: "#654EA3",
    backgroundAngle: 45,
    iconColor: "#FFFFFF",
  },
  {
    backgroundFillType: "Linear",
    backgroundStartColor: "#00B4DB",
    backgroundEndColor: "#003357",
    backgroundAngle: 45,
    iconColor: "#FFFFFF",
  },
  {
    backgroundFillType: "Linear",
    backgroundStartColor: "#A8C0FF",
    backgroundEndColor: "#3F2B96",
    backgroundAngle: 90,
    iconColor: "#FFFFFF",
  },
  {
    backgroundFillType: "Linear",
    backgroundStartColor: "#DD1818",
    backgroundEndColor: "#380202",
    backgroundAngle: 135,
    iconColor: "#FFFFFF",
  },
  {
    backgroundFillType: "Linear",
    backgroundStartColor: "#DECBA4",
    backgroundEndColor: "#3E5151",
    backgroundAngle: 45,
    iconColor: "#FFFFFF",
  },
  {
    backgroundFillType: "Linear",
    backgroundStartColor: "#FC466B",
    backgroundEndColor: "#3F5EFB",
    backgroundAngle: 180,
    iconColor: "#FFFFFF",
  },
  {
    backgroundFillType: "Linear",
    backgroundStartColor: "#CCCFE2",
    backgroundEndColor: "#25242B",
    backgroundAngle: 180,
    iconColor: "#FFFFFF",
  },
  {
    backgroundFillType: "Linear",
    backgroundStartColor: "#68AEFF",
    backgroundEndColor: "#003EB7",
    backgroundAngle: 180,
    iconColor: "#FFFFFF",
  },
  {
    backgroundFillType: "Linear",
    backgroundStartColor: "#C9D6FF",
    backgroundEndColor: "#596AA1",
    backgroundAngle: 180,
    iconColor: "#FFFFFF",
  },
  {
    backgroundFillType: "Linear",
    backgroundStartColor: "#5C5C5C",
    backgroundEndColor: "#0F1015",
    backgroundAngle: 180,
    iconColor: "#FFFFFF",
  },
  {
    backgroundFillType: "Radial",
    backgroundStartColor: "#695BF8",
    backgroundEndColor: "#131308",
    backgroundPosition: "50%,0%",
    iconColor: "#FFFFFF",
  },
  {
    backgroundFillType: "Radial",
    backgroundStartColor: "#4d4d4d",
    backgroundEndColor: "#000000",
    backgroundPosition: "50%,0%",
    iconColor: "#e6e6e6",
  },
  {
    backgroundFillType: "Radial",
    backgroundStartColor: "#f5af19",
    backgroundEndColor: "#f12711",
    backgroundPosition: "50%,50%",
    iconColor: "#FFFFFF",
  },
  {
    backgroundFillType: "Radial",
    backgroundStartColor: "#1D6E47",
    backgroundEndColor: "#041B11",
    backgroundPosition: "50%,0%",
    iconColor: "#DCEEDE",
  },
  {
    backgroundFillType: "Radial",
    backgroundStartColor: "#ffffff",
    backgroundEndColor: "#666666",
    backgroundPosition: "50%,100%",
    iconColor: "#232323",
  },
  {
    backgroundFillType: "Radial",
    backgroundStartColor: "#d9f1f8",
    backgroundEndColor: "#002069",
    backgroundPosition: "50%,100%",
    iconColor: "#e3efff",
  },
  {
    backgroundFillType: "Radial",
    backgroundStartColor: "#f95356",
    backgroundEndColor: "#7e0000",
    backgroundPosition: "50%,50%",
    iconColor: "#ffd5d5",
  },
  {
    backgroundFillType: "Radial",
    backgroundStartColor: "#ffbb00",
    backgroundEndColor: "#ffe74b",
    backgroundPosition: "50%,0%",
    iconColor: "#2a1a00",
  },
];

type ColorInputPropTypes = {
  value: string;
  name: string;
  recentColors: string[];
  onChange: ColorChangeHandler;
  disabled?: boolean;
};

const ColorInput = ({
  value,
  name,
  recentColors,
  onChange,
  disabled = false,
}: ColorInputPropTypes) => {
  return (
    <Popover.Root>
      <div className={cn(styles.inputWrapper)}>
        <Popover.Trigger className={styles.popoverTrigger}>
          <Input
            name={name}
            type="text"
            value={value}
            disabled={disabled}
            className="w-[120px]"
            size="large"
          >
            <InputSlot side="left">
              <div
                className={styles.colorExample}
                style={{ backgroundColor: value }}
              />
            </InputSlot>
          </Input>
        </Popover.Trigger>

        <Popover.Portal>
          <Popover.Content align="end" sideOffset={4} className="z-10">
            <div className={styles.colorInput}>
              <SketchPicker
                onChange={onChange}
                color={value}
                disableAlpha={true}
                presetColors={recentColors}
              />
            </div>
          </Popover.Content>
        </Popover.Portal>
      </div>
    </Popover.Root>
  );
};

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
  const [headerVisible, setHeaderVisible] = useState<boolean>(true);
  const [infoMessage, setInfoMessage] = useState<string>();
  const [infoMessageVisible, setInfoMessageVisible] = useState<boolean>(false);
  const [showInfoMessageUndoButton, setShowInfoMessageUndoButton] =
    useState<boolean>(true);
  const [iconsPanelOpened, setIconsPanelOpened] = useState<boolean>(false);
  const [optionsPanelOpened, setOptionsPanelOpened] = useState<boolean>(false);
  const [exportDropdownOpen, setExportDropdownOpen] = useState<boolean>(false);

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
  const infoMessageRef = useRef<HTMLDivElement>(null);
  const dropZoneRef = useRef<HTMLDivElement>(null);

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

  useHotkeys("ctrl+0,cmd+0", () => setScale(1));
  useHotkeys("ctrl+.,cmd+.", () =>
    setPanelsVisible((panelsVisible) => !panelsVisible),
  );
  useHotkeys("ctrl+z,cmd+z", () => undo());
  useHotkeys("ctrl+shift+z,cmd+shift+z", () => redo());
  useHotkeys("ctrl+shift+e,cmd+shift+e", () => setShowExportModal(true));
  useHotkeys("ctrl+c,cmd+c", () => onCopyImageToClipboard() as any);
  useHotkeys("ctrl+f,cmd+f", (e) => {
    if (searchRef && searchRef.current) {
      e.preventDefault();
      searchRef.current.focus();
    }
  });
  useHotkeys("ctrl+k,cmd+k", () => setExportDropdownOpen((opened) => !opened));

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
    <div className="flex justify-center">
      <div className="mt-20">
        <ExportModal
          open={showExportModal}
          onOpenChange={setShowExportModal}
          onStartExport={() => showInfoMessage("Download started", false)}
          fileName={settings.fileName}
          svgRef={svgRef}
        />
        <CSSTransition
          in={draggingFile}
          nodeRef={dropZoneRef}
          timeout={300}
          classNames={{
            enter: styles.transitionEnter,
            enterActive: styles.transitionEnterActive,
            exit: styles.transitionExit,
            exitActive: styles.transitionExitActive,
          }}
          unmountOnExit
        >
          <div className="" ref={dropZoneRef}>
            <div className={styles.dropZoneIndicator}>
              <DropZoneIndicator />
              <span className={styles.dropZoneMessage}>
                Drag and drop
                <br /> your SVG file here
              </span>
            </div>
          </div>
        </CSSTransition>
      </div>
      <NavigationActions>
        <div className={cn("flex items-center justify-between gap-2")}>
          <Button
            variant="outline"
            className={""}
            disabled={history.length <= 1}
            title={`cmd+z`}
            onClick={undo}
          >
            <Icons.box className="mr-1 h-4 w-4" />
            <span className={""}>Undo</span>
          </Button>

          <Button
            variant="outline"
            className={""}
            disabled={redoHistory.length === 0}
            title={`shift+cmd+z`}
            onClick={redo}
          >
            <Icons.menu className="mr-1 h-4 w-4" />
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
          <Button variant="ghost" className={""} onClick={onShare}>
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
      </NavigationActions>

      <main className={"flex justify-between gap-8 px-6"} ref={mainRef}>
        <div className="w-full rounded-lg border">
          <CSSTransition
            in={panelsVisible}
            nodeRef={iconsWrapperRef}
            timeout={300}
            classNames={{
              enter: styles.transitionEnter,
              enterActive: styles.transitionEnterActive,
              exit: styles.transitionExit,
              exitActive: styles.transitionExitActive,
            }}
            unmountOnExit
          >
            <div
              ref={iconsWrapperRef}
              className={cn(
                styles.panel,
                styles.icons,
                iconsPanelOpened && styles.opened,
                optionsPanelOpened && styles.hidden,
              )}
            >
              <div className="flex gap-3 p-3">
                <Input
                  type="text"
                  placeholder="Search icons…"
                  defaultValue={searchTerm}
                  ref={searchRef}
                  variant="soft"
                  className="h-10 rounded-full"
                  onChange={onChangeSearchTerm}
                >
                  <InputSlot side="left">
                    <Icons.search className="ml-2 h-4 w-4" />
                  </InputSlot>
                </Input>
                <Button
                  variant="outline"
                  size="lgicon"
                  className="h-10 w-10"
                  onClick={onRandomIconClick}
                  title="Random icon"
                >
                  <Icons.shuffle className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lgicon"
                  className="h-10 w-10"
                  title="Upload your own SVG"
                >
                  <Input
                    type="file"
                    className=""
                    onChange={onSelectCustomIcon}
                    accept=".svg, .png"
                  />
                  <Icons.upload />
                </Button>
              </div>

              {filteredIcons.length === 0 ? (
                <div className="flex">
                  <Icons.menu className={""} />
                  We couldn’t find an icon for that
                  <Link
                    href={`mailto:${FEEDBACK_EMAIL}?subject=Request%20Icon`}
                  >
                    Request icon <Icons.menu />
                  </Link>
                </div>
              ) : (
                <div className="p-3">
                  <h4 className="py-3">
                    {searchTerm ? "Results" : "All Icons"}
                  </h4>
                  <div className="grid grid-cols-4 justify-center gap-2">
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
                </div>
              )}
            </div>
          </CSSTransition>
        </div>

        <div
          className={"w-full bg-slate-800"}
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
            className={"h-full w-full"}
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
              classNames={{
                enter: styles.transitionEnter,
                enterActive: styles.transitionEnterActive,
                exit: styles.transitionExit,
                exitActive: styles.transitionExitActive,
              }}
              unmountOnExit
            >
              <ResultIcon
                settings={settings}
                IconComponent={IconComponent}
                ref={svgRef}
              />
            </CSSTransition>
          </div>
          <div className={"mt-10 grid justify-center gap-8"}>
            <Badge className="h-8" variant="outline">
              512 x 512
            </Badge>
            <div className="">
              <Select
                defaultValue={`${scale}`}
                value={`${scale}`}
                onValueChange={onChangeScale}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {scaleOptions.map((option) => (
                    <SelectItem key={option.value} value={`${option.value}`}>
                      <SelectItemText>{option.label}</SelectItemText>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="w-full">
          <CSSTransition
            in={panelsVisible}
            nodeRef={formRef}
            timeout={300}
            classNames={{
              enter: styles.transitionEnter,
              enterActive: styles.transitionEnterActive,
              exit: styles.transitionExit,
              exitActive: styles.transitionExitActive,
            }}
            unmountOnExit
          >
            <div
              className={cn(
                styles.panel,
                styles.options,
                panelsVisible ? "" : styles.hidden,
                iconsPanelOpened && styles.hidden,
                optionsPanelOpened && styles.opened,
              )}
            >
              <div className="grid gap-4">
                <details className="flex rounded-lg bg-slate-900 p-3 px-8">
                  <summary className="flex gap-2">
                    Presets
                    <Icons.arrowup className={styles.closed} />
                    <Icons.arrowup className={styles.opened} />
                  </summary>
                  <div className="grid grid-cols-4">
                    {presets.map((preset, index) => {
                      return (
                        <Label key={index} className={styles.preset}>
                          <Input
                            type="radio"
                            name="preset"
                            value={index}
                            checked={
                              settings.selectedPresetIndex === null
                                ? false
                                : index === Number(settings.selectedPresetIndex)
                            }
                            onChange={() => onPresetChange(preset, index)}
                          />

                          <ResultIcon
                            size={36}
                            isPreview
                            settings={{
                              ...settings,
                              ...preset,
                              backgroundRadius: 2,
                            }}
                          />
                        </Label>
                      );
                    })}
                  </div>
                </details>
                <form
                  onChange={onFormChange}
                  ref={formRef}
                  style={{ width: "100%" }}
                >
                  <details
                    className="flex rounded-lg bg-slate-900 p-3 px-8"
                    open
                  >
                    <summary className="flex gap-2">
                      Fill Styles
                      <Icons.arrowup className={styles.closed} />
                      <Icons.arrowup className={styles.opened} />
                    </summary>
                    <div>
                      <label className={styles.formItem}>
                        <span className="text-xs">Fill Type</span>
                        <Select
                          name="backgroundFillType"
                          value={settings.backgroundFillType}
                          onValueChange={onChangeFillType}
                        >
                          <SelectTrigger className="">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {fillTypeOptions.map((option) => (
                              <SelectItem
                                key={option.value}
                                value={option.value}
                              >
                                <SelectItemText>{option.label}</SelectItemText>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </label>
                      <label className={styles.formItem}>
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
                        <label
                          className={cn(
                            styles.formItem,
                            settings.backgroundFillType === "Solid" &&
                              styles.disabled,
                          )}
                        >
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
                          <label className={styles.formItem}>
                            <span className="text-xs">Position</span>
                            <Select
                              name="backgroundPosition"
                              value={settings.backgroundPosition}
                              onValueChange={onChangeBackgroundPosition}
                            >
                              <SelectTrigger className="w-[120px]">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                {backgroundPositionOptions.map((option) => (
                                  <SelectItem
                                    key={option.value}
                                    value={option.value}
                                  >
                                    <SelectItemText>
                                      {option.label}
                                    </SelectItemText>
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </label>
                          <label className={styles.formItem}>
                            <span className="text-xs">Spread</span>
                            <Input
                              name="backgroundSpread"
                              type="number"
                              defaultValue={settings.backgroundSpread}
                              min={0}
                              max={100}
                              className="w-[120px]"
                              size="large"
                            >
                              <InputSlot>%</InputSlot>
                            </Input>
                          </label>
                        </>
                      ) : settings.backgroundFillType === "Linear" ? (
                        <label className={styles.formItem}>
                          <span>Angle</span>
                          <Input
                            name="backgroundAngle"
                            type="number"
                            onChange={onChangeAngle}
                            defaultValue={settings.backgroundAngle}
                            min={0}
                            max={360}
                            className="w-[120px]"
                            size="large"
                          >
                            <InputSlot>º</InputSlot>
                          </Input>
                        </label>
                      ) : null}
                    </div>
                  </details>
                  <details className="mt-4 flex rounded-lg bg-slate-900 p-3 px-8">
                    <summary className="flex gap-2 py-3">
                      Background
                      <Icons.arrowup className={styles.closed} />
                      <Icons.arrowup className={styles.opened} />
                    </summary>
                    <div className="grid gap-3">
                      <Label className={cn(styles.formItem)}>
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
                      </Label>

                      <label className={cn(styles.formItem)}>
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
                      </label>
                      <label
                        className={cn(
                          styles.formItem,
                          !settings.backgroundNoiseTexture && styles.disabled,
                        )}
                      >
                        <span className="text-xs">Noise opacity</span>
                        <Input
                          name="backgroundNoiseTextureOpacity"
                          type="number"
                          min={0}
                          max={100}
                          defaultValue={settings.backgroundNoiseTextureOpacity}
                          className="w-[120px]"
                          size="large"
                        >
                          <InputSlot>%</InputSlot>
                        </Input>
                      </label>
                      <label className={cn(styles.formItem)}>
                        <span className="text-xs">Radius</span>
                        <Input
                          name="backgroundRadius"
                          type="number"
                          min={0}
                          max={256}
                          defaultValue={settings.backgroundRadius}
                          className="w-[120px]"
                          size="large"
                        >
                          <InputSlot>px</InputSlot>
                        </Input>
                      </label>
                      <label className={styles.formItem}>
                        <span className="text-xs">Stroke size</span>
                        <Input
                          name="backgroundStrokeSize"
                          type="number"
                          min={0}
                          defaultValue={settings.backgroundStrokeSize}
                          className="w-[120px]"
                        >
                          <InputSlot>px</InputSlot>
                        </Input>
                      </label>
                      <label
                        className={cn(
                          styles.formItem,
                          settings.backgroundStrokeSize == 0 && styles.disabled,
                        )}
                      >
                        <span className="text-xs">Stroke color</span>
                        <ColorInput
                          value={settings.backgroundStrokeColor}
                          name="backgroundStrokeColor"
                          onChange={onChangeColorSetting(
                            "backgroundStrokeColor",
                          )}
                          recentColors={recentColors}
                        />
                      </label>
                      <label
                        className={cn(
                          styles.formItem,
                          settings.backgroundStrokeSize == 0 && styles.disabled,
                        )}
                      >
                        <span className="text-xs">Stroke opacity</span>
                        <Input
                          name="backgroundStrokeOpacity"
                          type="number"
                          defaultValue={settings.backgroundStrokeOpacity}
                          className="w-[120px]"
                          size="large"
                        >
                          <InputSlot>%</InputSlot>
                        </Input>
                      </label>
                    </div>
                  </details>

                  <details className="mt-4 flex rounded-lg bg-slate-900 p-3 px-8">
                    <summary className="flex gap-2">
                      Icon
                      <Icons.arrowright className={styles.closed} />
                      <Icons.arrowup className={styles.opened} />
                    </summary>
                    <div>
                      {!customSvgIsPng && (
                        <label className={styles.formItem}>
                          <span className="text-xs">Color</span>
                          <ColorInput
                            value={settings.iconColor}
                            name="iconColor"
                            onChange={onChangeColorSetting("iconColor")}
                            recentColors={recentColors}
                          />
                        </label>
                      )}
                      <label className={styles.formItem}>
                        <span className="text-xs">Size</span>
                        <div
                          className={cn(
                            styles.inputWrapper,
                            styles.inputWithUnit,
                          )}
                        >
                          <Input
                            name="iconSize"
                            type="number"
                            defaultValue={settings.iconSize}
                            min={0}
                            className="w-[120px]"
                            size="large"
                          >
                            <InputSlot>px</InputSlot>
                          </Input>
                        </div>
                      </label>
                      <label className={styles.formItem}>
                        <span className="text-xs">X Offset</span>
                        <div
                          className={cn(
                            styles.inputWrapper,
                            styles.inputWithUnit,
                          )}
                        >
                          <Input
                            name="iconOffsetX"
                            type="number"
                            defaultValue={settings.iconOffsetX}
                            className="w-[120px]"
                            size="large"
                          >
                            <InputSlot>px</InputSlot>
                          </Input>
                        </div>
                      </label>
                      <label className={styles.formItem}>
                        <span className="text-xs">Y Offset</span>
                        <div className="flex flex-col">
                          <Input
                            name="iconOffsetY"
                            type="number"
                            defaultValue={settings.iconOffsetY}
                            className="w-[120px]"
                            size="large"
                          >
                            <InputSlot>px</InputSlot>
                          </Input>
                        </div>
                      </label>
                    </div>
                  </details>
                </form>
              </div>
            </div>
          </CSSTransition>
        </div>
      </main>

      <CSSTransition
        in={infoMessageVisible}
        nodeRef={infoMessageRef}
        timeout={300}
        classNames={{
          enter: styles.transitionEnter,
          enterActive: styles.transitionEnterActive,
          exit: styles.transitionExit,
          exitActive: styles.transitionExitActive,
        }}
        unmountOnExit
      >
        <div className={styles.infoMessage} ref={infoMessageRef}>
          {infoMessage}
          {showInfoMessageUndoButton ? (
            <>
              <div className={styles.separator} />
              <button className={styles.undoLastAction} onClick={undo}>
                Undo
              </button>
            </>
          ) : null}
        </div>
      </CSSTransition>
    </div>
  );
};
