import * as React from "react";
import {
  ResponsiveDialog,
  ResponsiveDialogBody,
  ResponsiveDialogContent,
  ResponsiveDialogHeader,
  ResponsiveDialogTitle,
} from "@/src/comp/uis/responsive-dialog";
import { Button } from "@designali/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@designali/ui/dropdown-menu";
import { Icons, iconVariants } from "@designali/ui/icons";
import { toast } from "sonner";

import { getQRAsCanvas, getQRAsSVGDataUri, QRCodeSVG } from "~/lib/qrcode";

type LinkQRCodeDialogProps = {
  slug: string;
  url: string;
  isOpen?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
};

const supportedFormats = [
  { label: "PNG", value: "png", icon: Icons.FileImage },
  { label: "JPEG", value: "jpeg", icon: Icons.Image },
  { label: "SVG", value: "svg", icon: Icons.FileCode2 },
];

export const LinkQRCodeDialog = ({
  slug,
  url,
  isOpen,
  onOpenChange,
}: LinkQRCodeDialogProps) => {
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
        const data = [new ClipboardItem({ "image/png": blob! })];
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
    <>
      <ResponsiveDialog open={isOpen} onOpenChange={onOpenChange}>
        <ResponsiveDialogContent>
          <ResponsiveDialogHeader>
            <ResponsiveDialogTitle>QR Code</ResponsiveDialogTitle>
          </ResponsiveDialogHeader>
          <ResponsiveDialogBody className="flex flex-col items-center gap-6 px-4 py-6">
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
          </ResponsiveDialogBody>
        </ResponsiveDialogContent>
      </ResponsiveDialog>
      <a className="hidden" ref={anchorRef} />
    </>
  );
};
