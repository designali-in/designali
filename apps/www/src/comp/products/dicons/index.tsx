"use client";

import type { DIconsSettingsType } from "@/src/types/color";
import type { ColorChangeHandler } from "react-color";
import { Suspense, useCallback, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/registry/default/designali/ui/button";
import { ScrollArea } from "@/registry/default/designali/ui/scroll-area";
import { Skeleton } from "@/registry/default/designali/ui/skeleton";
import { Tabs } from "@/registry/default/designali/ui/tabs";
import { toast } from "@/registry/default/designali/ui/toasts";
import { debounce, randomElement, uniq } from "@/src/lib/dutils";
import { svgAsPngUri } from "save-svg-as-png";

import { DIcons } from "../../../../../../packages/icons/src/dicons";
import CustomSvgIcon from "./CustomSvgIcon";
import usePngClipboardSupported from "./usePngClipboardSupported";

const SideIcon = dynamic(() => import("./side-icon"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full flex-col gap-6 border-r p-6   sm:flex-row lg:flex-col">
      <Skeleton className="h-72 w-72" />
      <div className="flex w-1/2 flex-col justify-end gap-y-4 md:w-full">
        <div className="flex gap-2">
          <Skeleton className="h-9 w-1/3" />
          <Skeleton className="h-9 w-1/3" />
          <Skeleton className="h-9 w-1/3" />
        </div>
        <div className="mt-4 w-full space-y-6">
          {Array.from({ length: 10 }).map((_, index) => (
            <Skeleton key={index} className="h-9 w-full" />
          ))}
        </div>
      </div>
    </div>
  ),
});

const MainIcons = dynamic(() => import("./dicons"), {
  ssr: false,
  loading: () => (
    <div className="mt-6 flex flex-wrap items-center gap-2">
      {Array.from({ length: 200 }).map((_, index) => (
        <Skeleton key={index} className="h-20 w-20" />
      ))}
    </div>
  ),
});

const NavigationIcon = dynamic(() => import("./nav"), {
  ssr: false,
  loading: () => <Skeleton className="h-14 w-full rounded-none" />,
});

export default function DIconsPage() {
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const router = useRouter();
  const pngClipboardSupported = usePngClipboardSupported();
  const [showExportModal, setShowExportModal] = useState<boolean>(false);
  const [recentColors, setRecentColors] = useState<string[]>([]);
  const svgRef = useRef<HTMLElement & SVGSVGElement>(null);
  let IconComponent: React.FC<React.SVGProps<SVGSVGElement>> = () => null;
  const searchRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [settings, setSettings] = useState<DIconsSettingsType>({
    icon: "Designali",
    iconFill: "currentColor",
    strokeColor: "currentColor",
    iconSize: 150,
    linecap: "round",
    linejoin: "round",
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

  const onRandomIconClick = () => {
    pushNewSettings({
      icon: randomElement(Object.keys(DIcons) as "Designali"[]),
    });
  };

  const onChangeColorSetting =
    (settingName: string): ColorChangeHandler =>
    (newValue) => {
      const color = newValue.hex.toUpperCase();
      pushNewSettings({
        [settingName]: color,
      });
      onSaveRecentColor(color);
    };

  const onChangeIcon = (value: string) => {
    pushNewSettings({
      icon: value as "Designali",
      customSvg: null,
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
    <main>
      <Tabs defaultValue="1">
        <NavigationIcon
          settings={settings}
          searchTerm={searchTerm}
          searchRef={searchRef}
          onChangeSearchTerm={onChangeSearchTerm}
          filteredDIcons={filteredDIcons}
        />
        <div className={"md:flex"}>
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
            onRandomIconClick={onRandomIconClick}
          />

          <div className="w-full">
            <div className="w-full">
              <div className="h-full w-full">
                <div>
                  <div className="w-full px-6">
                    {filteredDIcons.length === 0 ? (
                      <div className="mt-10 grid gap-2 ">
                        <p>We couldn’t find an icon for that</p>
                        <Link
                          className=""
                          href={`mailto:?subject=Request%20Icon`}
                        >
                          <Button>Request an Icon</Button>
                        </Link>
                      </div>
                    ) : (
                      <div className=" w-full">
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
        </div>
      </Tabs>
    </main>
  );
}
