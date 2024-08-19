/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
/* eslint-disable @typescript-eslint/no-misused-promises */

/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import type { SettingsType } from "@/src/types";
import type { ColorChangeHandler } from "react-color";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { DIcons } from "@/components/dicons";
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
  ExportModal,
} from "@/src/components/common/colors/export-modal";
import { presets } from "@/src/components/common/colors/grad-types";
import ResultIcon from "@/src/components/common/colors/result-icon";
import usePngClipboardSupported from "@/src/components/common/colors/usePngClipboardSupported";
import GridPattern from "@/src/components/ui/grid-pattern";
import { cn } from "@designali/ui";
import { Button, IconButton } from "@designali/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@designali/ui/daccordion";
import { Input } from "@designali/ui/input";
import { Label } from "@designali/ui/label";
import { RadioGroup, RadioGroupItem } from "@designali/ui/radio-group";
import { ScrollArea } from "@designali/ui/scroll-area";

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
    iconSize: 180,
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

  const onChangeSearchTerm: React.FormEventHandler<HTMLInputElement> = (
    event,
  ) => {
    const newSeachTerm = (event.target as HTMLInputElement).value;
    router.replace(`?q=${newSeachTerm}`);
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
    <div className="">
      <main
        className={"grid justify-center gap-8 md:flex md:h-screen"}
        ref={mainRef}
      >
        <div className="mx-auto flex h-screen max-w-5xl bg-slate-50 dark:bg-slate-950 md:absolute">
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
                      <DIcons.alignleft
                        strokeWidth={1}
                        className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2"
                      />
                    </Label>
                  </div>
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
                      {searchTerm ? "Results" : ""}
                    </h4>

                    <ScrollArea>
                      <div className="flex h-auto w-full flex-wrap justify-center gap-2">
                        {filteredIcons.map((icon) => {
                          const Component = DIcons[icon];
                          return (
                            <div>
                              <Label className="" key={icon}>
                                <div className="flex h-14 w-14 items-center justify-center rounded-md border">
                                  <Component width={24} height={24} />
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
      </main>
    </div>
  );
};
