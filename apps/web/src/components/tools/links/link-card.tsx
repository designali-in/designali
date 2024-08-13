"use client";

import type { ShortLink } from "@designali/db/src/schema";
import type { Session } from "next-auth";
import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { LinkCopyButton } from "@/components/ui/link-copy-button";
import { getQRAsCanvas, getQRAsSVGDataUri, QRCodeSVG } from "@/lib/qrcode";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@designali/ui/accordion";
import { Button } from "@designali/ui/button";
import { Card, CardContent } from "@designali/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@designali/ui/dropdown-menu";
import { Icons, iconVariants } from "@designali/ui/icons";
import { Tooltip, TooltipContent, TooltipTrigger } from "@designali/ui/tooltip";
import { formatDistanceToNowStrict } from "date-fns";
import { toast } from "sonner";

import { formatNumber } from "~/lib/dutils";
import { LinkOptionsDropdown } from "./link-options-dropdown";

interface LinkCardProps {
  link: ShortLink;
  session?: Session | null;
}

const supportedFormats = [
  { label: "PNG", value: "png", icon: Icons.FileImage },
  { label: "JPEG", value: "jpeg", icon: Icons.Image },
  { label: "SVG", value: "svg", icon: Icons.FileCode2 },
];

export const LinkCard = ({ link, session }: LinkCardProps) => {
  const { slug, url, clicks } = link;
  const decodedURL = decodeURIComponent(url);
  const shortenedURL = `${"https://www.designali.in"}/${slug}`;

  const qrcodeRef = React.useRef<React.ElementRef<"div">>(null);
  const anchorRef = React.useRef<React.ElementRef<"a">>(null);

  const qrcode = React.useMemo(
    () => ({
      value: url,
      bgColor: "#ffffff",
      fgColor: "#000000",
      size: 1024,
      level: "Q",
    }),
    [url],
  );

  const handleCopyToClipboard = async () => {
    try {
      const canvas = await getQRAsCanvas(qrcode, "image/png", true);
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      (canvas as HTMLCanvasElement).toBlob(async (blob) => {
        const data = [new ClipboardItem({ "image/png": blob })];
        await navigator.clipboard.write(data);
        toast("Copied to clipboard");
      });
    } catch (error) {
      toast.error("Failed to copy QR Code");
    }
  };

  const handleDownload = async (format: string) => {
    if (!anchorRef.current) return;
    let dataUri;
    switch (format) {
      case "png":
      case "jpeg":
        dataUri = await getQRAsCanvas(qrcode, `image/${format}`);
        break;
      case "svg":
        dataUri = getQRAsSVGDataUri(qrcode);
        break;
      default:
        throw new Error(`Unsupported format: ${format}`);
    }
    anchorRef.current.href = dataUri as string;
    anchorRef.current.download = `${slug}-qrcode.${format}`;
    anchorRef.current.click();
  };

  return (
    <Card className="relative rounded-xl transition-colors hover:border-slate-400 dark:hover:border-slate-600">
      <CardContent className="flex gap-2 p-3">
        <div className="flex min-w-8 flex-col justify-center">
          <Image
            src={`https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${
              new URL(decodedURL).origin
            }&size=64`}
            className="rounded-full"
            alt="link favicon"
            width={32}
            height={32}
            quality={100}
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-wrap items-center gap-2 pe-8">
            <Link
              href={shortenedURL}
              className="w-[200px] truncate font-mono font-medium"
              target="_blank"
            >
              {shortenedURL.split("://")[1]}
            </Link>
          </div>
          <div className="flex w-full max-w-52 flex-col gap-2 text-xs text-muted-foreground sm:max-w-72">
            <Link href={decodedURL} className="truncate" target="_blank">
              {decodedURL}
            </Link>
            {link.description && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <p className="line-clamp-1 cursor-pointer">
                    {link.description}
                  </p>
                </TooltipTrigger>
                <TooltipContent className="max-w-[300px]">
                  <p>{link.description}</p>
                </TooltipContent>
              </Tooltip>
            )}
          </div>
        </div>
      </CardContent>
      <LinkOptionsDropdown
        link={{ ...link, url: decodedURL }}
        session={session}
      />
      <div className="flex items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <LinkCopyButton textToCopy={shortenedURL} />
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                className="flex cursor-pointer items-center gap-1 font-mono opacity-50 transition-opacity hover:opacity-100"
                type="button"
                variant="outline"
                size="sm"
              >
                <Icons.Eye
                  className={iconVariants({ size: "sm" })}
                  aria-label="Total clicks"
                />
                <span className="text-xs">
                  {formatNumber(clicks, { notation: "compact" })}
                </span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>
                {formatNumber(clicks, { notation: "standard" })} Total clicks
              </p>
            </TooltipContent>
          </Tooltip>
        </div>
        {slug !== "google" && (
          <span className="text-[10px] font-medium text-muted-foreground">
            <Tooltip>
              <TooltipTrigger>
                {formatDistanceToNowStrict(new Date(link.createdAt), {
                  addSuffix: true,
                })}
              </TooltipTrigger>
              <TooltipContent>
                <p>
                  {new Intl.DateTimeFormat("en-US", {
                    dateStyle: "long",
                    timeStyle: "short",
                  }).format(new Date(link.createdAt))}
                </p>
              </TooltipContent>
            </Tooltip>
          </span>
        )}
      </div>
      <div>
        <Accordion type="single" collapsible className="w-full px-4">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <div className="flex items-center">
                <Icons.Download
                  className={iconVariants({
                    className: "mr-2 text-slate-600 dark:text-slate-400",
                  })}
                />
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Download QR code
                </p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col items-center gap-6 px-4 py-6">
                <div className="border-slid rounded-lg border border-border p-4">
                  <div ref={qrcodeRef}>
                    <QRCodeSVG
                      value={url}
                      size={256}
                      bgColor="hsl(var(--background))"
                      fgColor="hsl(var(--foreground))"
                    />
                  </div>
                </div>
                <div className="flex w-full justify-center gap-2 px-4">
                  <Button
                    variant="secondary"
                    className="flex-1"
                    onClick={handleCopyToClipboard}
                  >
                    <Icons.Clipboard
                      className={iconVariants({ className: "mr-2" })}
                    />
                    Copy
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button className="flex-1">
                        <Icons.Download
                          className={iconVariants({ className: "mr-2" })}
                        />
                        Download
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="center">
                      {supportedFormats.map((format) => (
                        <DropdownMenuItem
                          key={format.value}
                          onClick={() => handleDownload(format.value)}
                        >
                          <format.icon
                            className={iconVariants({ className: "mr-2" })}
                          />
                          {format.label}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </Card>
  );
};

export const LinkCardDashboard = ({ link, session }: LinkCardProps) => {
  const { slug, url, clicks } = link;
  const decodedURL = decodeURIComponent(url);
  const shortenedURL = `${"https://www.designali.in"}/${slug}`;

  const qrcodeRef = React.useRef<React.ElementRef<"div">>(null);
  const anchorRef = React.useRef<React.ElementRef<"a">>(null);

  const qrcode = React.useMemo(
    () => ({
      value: url,
      bgColor: "#ffffff",
      fgColor: "#000000",
      size: 1024,
      level: "Q",
    }),
    [url],
  );

  const handleCopyToClipboard = async () => {
    try {
      const canvas = await getQRAsCanvas(qrcode, "image/png", true);
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      (canvas as HTMLCanvasElement).toBlob(async (blob) => {
        const data = [new ClipboardItem({ "image/png": blob })];
        await navigator.clipboard.write(data);
        toast("Copied to clipboard");
      });
    } catch (error) {
      toast.error("Failed to copy QR Code");
    }
  };

  const handleDownload = async (format: string) => {
    if (!anchorRef.current) return;
    let dataUri;
    switch (format) {
      case "png":
      case "jpeg":
        dataUri = await getQRAsCanvas(qrcode, `image/${format}`);
        break;
      case "svg":
        dataUri = getQRAsSVGDataUri(qrcode);
        break;
      default:
        throw new Error(`Unsupported format: ${format}`);
    }
    anchorRef.current.href = dataUri as string;
    anchorRef.current.download = `${slug}-qrcode.${format}`;
    anchorRef.current.click();
  };

  return (
    <div className="">
      <Card className="relative rounded-xl transition-colors hover:border-slate-400 dark:hover:border-slate-600">
        <CardContent className="flex gap-2 p-3">
          <div className="flex min-w-8 flex-col justify-center">
            <Image
              src={`https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${
                new URL(decodedURL).origin
              }&size=64`}
              className="rounded-full"
              alt="link favicon"
              width={32}
              height={32}
              quality={100}
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap items-center gap-2 pe-8">
              <Link
                href={shortenedURL}
                className="w-[200px] truncate font-mono font-medium"
                target="_blank"
              >
                {shortenedURL.split("://")[1]}
              </Link>
            </div>
            <div className="flex w-full max-w-52 flex-col gap-2 text-xs text-muted-foreground sm:max-w-72">
              <Link
                href={decodedURL}
                className="w-[200px] truncate"
                target="_blank"
              >
                {decodedURL}
              </Link>
              {link.description && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <p className="line-clamp-1 cursor-pointer">
                      {link.description}
                    </p>
                  </TooltipTrigger>
                  <TooltipContent className="max-w-[300px]">
                    <p>{link.description}</p>
                  </TooltipContent>
                </Tooltip>
              )}
            </div>
          </div>
        </CardContent>

        <div className="flex items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <LinkCopyButton textToCopy={shortenedURL} />
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  className="flex cursor-pointer items-center gap-1 font-mono opacity-50 transition-opacity hover:opacity-100"
                  type="button"
                  variant="outline"
                  size="sm"
                >
                  <Icons.Eye
                    className={iconVariants({ size: "sm" })}
                    aria-label="Total clicks"
                  />
                  <span className="text-xs">
                    {formatNumber(clicks, { notation: "compact" })}
                  </span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>
                  {formatNumber(clicks, { notation: "standard" })} Total clicks
                </p>
              </TooltipContent>
            </Tooltip>
          </div>
          {slug !== "google" && (
            <span className="text-[10px] font-medium text-muted-foreground">
              <Tooltip>
                <TooltipTrigger>
                  {formatDistanceToNowStrict(new Date(link.createdAt), {
                    addSuffix: true,
                  })}
                </TooltipTrigger>
                <TooltipContent>
                  <p>
                    {new Intl.DateTimeFormat("en-US", {
                      dateStyle: "long",
                      timeStyle: "short",
                    }).format(new Date(link.createdAt))}
                  </p>
                </TooltipContent>
              </Tooltip>
            </span>
          )}
        </div>
        <div>
          <div className="flex grid-cols-2 items-center justify-center gap-3 p-4">
            <div className="border-slid rounded-lg border border-border p-4">
              <div ref={qrcodeRef}>
                <QRCodeSVG
                  value={url}
                  className="h-full w-full"
                  size={600}
                  bgColor="hsl(var(--background))"
                  fgColor="hsl(var(--foreground))"
                />
              </div>
            </div>
            <div className="grid w-full justify-center gap-2">
              <Button
                variant="outline"
                className="flex-1"
                onClick={handleCopyToClipboard}
              >
                <Icons.Clipboard
                  className={iconVariants({ className: "mr-2" })}
                />
                Copy
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="default" className="flex-1">
                    <Icons.Download
                      className={iconVariants({ className: "mr-2" })}
                    />
                    Download
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center">
                  {supportedFormats.map((format) => (
                    <DropdownMenuItem
                      key={format.value}
                      onClick={() => handleDownload(format.value)}
                    >
                      <format.icon
                        className={iconVariants({ className: "mr-2" })}
                      />
                      {format.label}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              <Link href={"/app/overview/short-links"}>
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex-1"
                  onClick={handleCopyToClipboard}
                >
                  <Icons.Eye className={iconVariants({ className: "mr-2" })} />
                  View Link
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
