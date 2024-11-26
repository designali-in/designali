"use client";

import type { DIconsSettingsType } from "@/src/types/color";
import type { ColorChangeHandler } from "react-color";
import { Suspense, useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/registry/default/designali/ui/button";
import { ScrollArea } from "@/registry/default/designali/ui/scroll-area";
import { toast } from "@/registry/default/designali/ui/toasts";
import {
  debounce,
  randomElement,
  randomNumberBetween,
  uniq,
} from "@/src/lib/dutils";
import { DIcons } from "dicons";
import { svgAsPngUri } from "save-svg-as-png";

import CustomSvgIcon from "./CustomSvgIcon";
import { MainIcons } from "./dicons";
import { Navigation } from "./nav";
import { SideIcon } from "./side-icon";
import usePngClipboardSupported from "./usePngClipboardSupported";

export default function DIconsPage() {
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const router = useRouter();
  const [scale, setScale] = useState<number>(1);
  const pngClipboardSupported = usePngClipboardSupported();
  const [showExportModal, setShowExportModal] = useState<boolean>(false);
  const [recentColors, setRecentColors] = useState<string[]>([]);
  const svgRef = useRef<HTMLElement & SVGSVGElement>(null);
  let IconComponent: React.FC<React.SVGProps<SVGSVGElement>> = () => null;
  const searchRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [settings, setSettings] = useState<DIconsSettingsType>({
    icon: "",
    iconFill: "none",
    strokeColor: "currentColor",
    iconSize: 150,
    linecap: "round",
    linejoin: "",
    strokeWidth: 1.5,
  });

  const onChangeSearchTerm: React.FormEventHandler<HTMLInputElement> = (
    event,
  ) => {
    const newSearchTerm = (event.target as HTMLInputElement).value;
    setSearchTerm(newSearchTerm);
    handleSearch(newSearchTerm);
  };

  const handleSearch = debounce((value: string) => {
    router.replace(`/products/dicons/?q=${value}`);
  }, 300); // 300ms delay

  useEffect(() => {
    const q = searchParams.get("q") || "";

    if (q !== undefined) {
      setSearchTerm(q);
    }
  }, [router, settings, searchParams]);
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
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

  const filteredDIcons = Object.keys(DIcons).filter((key) =>
    key.toLowerCase().includes(searchTerm.toLowerCase()),
  ) as ""[];

  const pushNewSettings = useCallback(
    (newSettings: Partial<DIconsSettingsType>) => {
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

  const onSaveRecentColor = debounce((color: string) => {
    setRecentColors((colors) => uniq([color, ...colors]).slice(0, 16));
  });

  const onChangeColorSetting =
    (settingName: string): ColorChangeHandler =>
    (newValue) => {
      const color = newValue.hex.toUpperCase();
      pushNewSettings({
        [settingName]: color,
      });
      onSaveRecentColor(color);
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

      return settingsToSet;
    });
  }, []);

  const onChangeIcon = (value: string) => {
    pushNewSettings({
      icon: value as "",
      customSvg: undefined,
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

  return (
    <main className={"md:flex"}>
      <SideIcon
        settings={settings}
        svgRef={svgRef}
        IconComponent={IconComponent}
        pngClipboardSupported={pngClipboardSupported}
        onCopyImageToClipboard={onCopyImageToClipboard}
        showExportModal={showExportModal}
        setShowExportModal={setShowExportModal}
        formRef={formRef}
        onFormChange={onFormChange}
        customSvgIsPng={customSvgIsPng}
        recentColors={recentColors}
        onChangeColorSetting={onChangeColorSetting}
        iconFill={settings.iconFill}
      />
      <div className="w-full">
        <div className="w-full">
          <div className="h-full w-full">
            <div>
              <Navigation
                settings={settings}
                searchTerm={searchTerm}
                searchRef={searchRef}
                onChangeSearchTerm={onChangeSearchTerm}
                filteredDIcons={filteredDIcons}
              />
              <div className="w-full px-6">
                {filteredDIcons.length === 0 ? (
                  <div className="mt-20 grid gap-2 text-center">
                    <p>We couldn’t find an icon for that</p>
                    <Link className="" href={`mailto:?subject=Request%20Icon`}>
                      <Button>Request an Icon</Button>
                    </Link>
                  </div>
                ) : (
                  <div className="my-6 w-full">
                    <h1 className="pb-3 text-slate-600 dark:text-slate-400">
                      {searchTerm ? "Results" : "All Icons"}
                    </h1>
                    <ScrollArea className="h-screen w-full">
                      <MainIcons
                        settings={settings}
                        filteredDIcons={filteredDIcons}
                        onChangeIcon={onChangeIcon}
                      />
                    </ScrollArea>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
