"use client";

import { usePathname } from "next/navigation";
import { cn } from "@designali/ui";
import { Button, buttonVariants } from "@designali/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@designali/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@designali/ui/tooltip";

import { Icons } from "../icons";
import { CopyInput } from "../ui/copy-input";

const popupCenter = ({ url, title, w, h }) => {
  const dualScreenLeft =
    window.screenLeft !== undefined ? window.screenLeft : window.screenX;
  const dualScreenTop =
    window.screenTop !== undefined ? window.screenTop : window.screenY;

  const width = window.innerWidth
    ? window.innerWidth
    : document.documentElement.clientWidth
      ? document.documentElement.clientWidth
      : screen.width;
  const height = window.innerHeight
    ? window.innerHeight
    : document.documentElement.clientHeight
      ? document.documentElement.clientHeight
      : screen.height;

  const systemZoom = width / window.screen.availWidth;
  const left = (width - w) / 2 / systemZoom + dualScreenLeft;
  const top = (height - h) / 2 / systemZoom + dualScreenTop;
  const newWindow = window.open(
    url,
    title,
    `
      scrollbars=yes,
      width=${w / systemZoom}, 
      height=${h / systemZoom}, 
      top=${top}, 
      left=${left}
      `,
  );

  return newWindow;
};

export function UpdatesToolbar({ posts }) {
  const pathname = usePathname();
  const currentIndex = posts.slug ?? 0;

  const currentPost = posts[currentIndex];

  const handleOnShare = () => {
    const popup = popupCenter({
      url: `https://x.com/intent/post?text=${currentPost.title} https://designali.in/blogs/${currentPost.slug}`,
      title: currentPost.title,
      w: 800,
      h: 400,
    });

    popup.focus();
  };

  return (
    <Dialog>
      <div className="flex-col items-center justify-center md:flex">
        <TooltipProvider delayDuration={20}>
          <Tooltip>
            <TooltipTrigger
              className={cn(
                buttonVariants({
                  variant: "outline",
                  size: "lgicon",
                }),
              )}
            >
              <DialogTrigger asChild>
                <Icons.share strokeWidth={1} className="h-5 w-5" />
              </DialogTrigger>
            </TooltipTrigger>
            <TooltipContent
              className="rounded-sm px-2 py-1"
              sideOffset={5}
              side="top"
            >
              <span className="text-xs">Share</span>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      <DialogContent className="sm:max-w-[425px]">
        <div className="p-6">
          <DialogHeader>
            <DialogTitle>Share</DialogTitle>
          </DialogHeader>

          <div className="grid gap-2 py-4 md:gap-6">
            <CopyInput
              className="truncate"
              value={`https://www.designali.in${pathname}`}
            />
            <Button
              className="flex h-10 w-full items-center space-x-2"
              onClick={handleOnShare}
            >
              <span>Share on</span>
              <Icons.twitterx className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function UpdatesToolbarDoc({ posts }) {
  const pathname = usePathname();
  const currentIndex = posts.slug ?? 0;

  const currentPost = posts[currentIndex];

  const handleOnShare = () => {
    const popup = popupCenter({
      url: `https://x.com/intent/post?text=${currentPost.title} https://designali.in/blogs/${currentPost.slug}`,
      title: currentPost.title,
      w: 800,
      h: 400,
    });

    popup.focus();
  };

  return (
    <Dialog>
      <div className="mb-6 flex items-center">
        <TooltipProvider delayDuration={20}>
          <Tooltip>
            <TooltipTrigger>
              <DialogTrigger
                asChild
                className={cn(
                  buttonVariants({
                    variant: "outline",
                    size: "md",
                  }),
                )}
              >
                <div className="flex gap-1">
                  <p>Share this page</p>
                  <Icons.share strokeWidth={1} className="h-4 w-4" />
                </div>
              </DialogTrigger>
            </TooltipTrigger>
            <TooltipContent
              className="rounded-sm px-2 py-1"
              sideOffset={5}
              side="right"
            >
              <span className="text-xs">Share</span>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      <DialogContent className="sm:max-w-[425px]">
        <div className="p-6">
          <DialogHeader>
            <DialogTitle>Share</DialogTitle>
          </DialogHeader>

          <div className="grid gap-6 py-4">
            <CopyInput value={`https://designali.in${pathname}`} />
            <Button
              className="flex h-10 w-full items-center space-x-2"
              onClick={handleOnShare}
            >
              <span>Share on</span>
              <Icons.twitterx className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
