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
import CustomSvgIcon from "@/src/components/common/colors/CustomSvgIcon";
import { presets } from "@/src/components/common/colors/grad-types";
import usePngClipboardSupported from "@/src/components/common/colors/usePngClipboardSupported";
import { Button } from "@designali/ui/button";
import { ScrollArea } from "@designali/ui/scroll-area";
import { toast } from "@designali/ui/toaster";
import { DIcons } from "dicons";
import { svgAsPngUri } from "save-svg-as-png";

import {
  Access,
  Account,
  Animal,
  Buildings,
  DArrows,
  DCharts,
  DCommunication,
  DCursor,
} from "../icons";
import { DDesign } from "../icons/design";
import { InstallIcon } from "../main/install-icon";
import { Navigation } from "../main/nav";
import { SideIcon } from "../main/side-icon";
import { MainIcons } from "./catego";

const scales = [0.25, 0.5, 1, 2];

const FEEDBACK_EMAIL = "contact@designali.in";

export const DIconCategories = () => {
  const randomPresetIndex = randomNumberBetween(0, presets.length - 1);

  const [urlParsed, setUrlParsed] = useState<boolean>(false);
  const [scale, setScale] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const [recentColors, setRecentColors] = useState<string[]>([]);
  const [showExportModal, setShowExportModal] = useState<boolean>(false);

  const [settings, setSettings] = useState<SettingsType>({
    fileName: "designali",
    icon: "",
    backgroundRadius: 72,
    iconFill: "",
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
    iconSize: 140,
    strokeWidth: 1.5,
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

  const filteredDIcons = Object.keys(DIcons).filter((key) =>
    key.toLowerCase().includes(searchTerm.toLowerCase()),
  ) as ""[];

  const filteredAccount = Object.keys(Account).filter((key) =>
    key.toLowerCase().includes(searchTerm.toLowerCase()),
  ) as ""[];

  const filteredAnimal = Object.keys(Animal).filter((key) =>
    key.toLowerCase().includes(searchTerm.toLowerCase()),
  ) as ""[];

  const filteredAccess = Object.keys(Access).filter((key) =>
    key.toLowerCase().includes(searchTerm.toLowerCase()),
  ) as ""[];

  const filteredBuildings = Object.keys(Buildings).filter((key) =>
    key.toLowerCase().includes(searchTerm.toLowerCase()),
  ) as ""[];

  const filteredCharts = Object.keys(DCharts).filter((key) =>
    key.toLowerCase().includes(searchTerm.toLowerCase()),
  ) as ""[];

  const filteredArrows = Object.keys(DArrows).filter((key) =>
    key.toLowerCase().includes(searchTerm.toLowerCase()),
  ) as ""[];

  const filteredCommunication = Object.keys(DCommunication).filter((key) =>
    key.toLowerCase().includes(searchTerm.toLowerCase()),
  ) as ""[];

  const filteredCursor = Object.keys(DCursor).filter((key) =>
    key.toLowerCase().includes(searchTerm.toLowerCase()),
  ) as ""[];

  const filteredDesign = Object.keys(DDesign).filter((key) =>
    key.toLowerCase().includes(searchTerm.toLowerCase()),
  ) as ""[];

  return (
    <main className={"justify-between md:flex"} id="categories">
      <SideIcon
        settings={settings}
        svgRef={svgRef}
        IconComponent={IconComponent}
        showExportModal={showExportModal}
        setShowExportModal={setShowExportModal}
        pngClipboardSupported={pngClipboardSupported}
        onCopyImageToClipboard={onCopyImageToClipboard}
        onChangeColorSetting={onChangeColorSetting}
        customSvgIsPng={customSvgIsPng}
        recentColors={recentColors}
        formRef={formRef}
        onFormChange={onFormChange}
        iconFill={settings.iconFill}
      />
      <div className="w-full">
        <div className="">
          <div className="h-auto">
            <div ref={iconsWrapperRef}>
              <Navigation
                settings={settings}
                searchTerm={searchTerm}
                searchRef={searchRef}
                onChangeSearchTerm={onChangeSearchTerm}
                filteredDIcons={filteredDIcons}
              />
              <div className="">
                {filteredDIcons.length === 0 ? (
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
                    <ScrollArea className="md:h-[950px]">
                      <MainIcons
                        settings={settings}
                        filteredBuildings={filteredBuildings}
                        filteredAccess={filteredAccess}
                        filteredAccount={filteredAccount}
                        filteredArrows={filteredArrows}
                        filteredCharts={filteredCharts}
                        filteredAnimal={filteredAnimal}
                        filteredCommunication={filteredCommunication}
                        filteredCursor={filteredCursor}
                        onChangeIcon={onChangeIcon}
                        filteredDesign={filteredDesign}
                      />
                    </ScrollArea>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <InstallIcon settings={settings} />
      </div>
    </main>
  );
};
