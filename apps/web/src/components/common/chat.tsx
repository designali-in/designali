"use client";

import React from "react";
import { useChat } from "ai/react";

import "@/styles/text.css";

import { useRouter } from "next/navigation";
import { CanvasRevealEffect } from "@/components/ui/canvas-effect";
import { cn } from "@designali/ui";
import { Button } from "@designali/ui/button";
import { Input } from "@designali/ui/input";
import { ScrollArea } from "@designali/ui/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@designali/ui/tooltip";
import { AnimatePresence, motion } from "framer-motion";

import { Icons } from "../icons";
import { Logo } from "../logo";

export function Chatbot() {
  const router = useRouter();
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  const [hovered, setHovered] = React.useState(false);

  return (
    <div className="mx-auto mb-16 w-full max-w-5xl gap-4 px-6 md:mb-32">
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative mx-auto w-full items-center justify-center overflow-hidden"
      >
        <div className="relative mx-auto flex w-full max-w-5xl items-center justify-center border border-slate-200 p-4 dark:border-slate-800">
          <AnimatePresence>
            <div className="tracking-tightest flex select-none flex-col py-2 text-center text-7xl font-extrabold leading-none sm:text-8xl md:flex-col lg:flex-row">
              <Icons.plus
                strokeWidth={0.5}
                className="text-aired absolute -left-4 -top-4 h-8 w-8"
              />
              <Icons.plus
                strokeWidth={0.5}
                className="text-aired absolute -bottom-4 -left-4 h-8 w-8"
              />
              <Icons.plus
                strokeWidth={0.5}
                className="text-aired absolute -right-4 -top-4 h-8 w-8"
              />
              <Icons.plus
                strokeWidth={0.5}
                className="text-aired absolute -bottom-4 -right-4 h-8 w-8"
              />
            </div>
            {hovered && (
              <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 1 }}
                className="absolute inset-0 h-full w-full object-cover"
              >
                <CanvasRevealEffect
                  animationSpeed={5}
                  containerClassName="bg-transparent opacity-30 dark:opacity-50"
                  colors={[
                    [245, 5, 55],
                    [245, 5, 55],
                  ]}
                  opacities={[1, 0.8, 1, 0.8, 0.5, 0.8, 1, 0.5, 1, 3]}
                  dotSize={2}
                />
              </motion.div>
            )}
          </AnimatePresence>
          <div className="z-20 w-full">
            <div className="px-6">
              <div className="flex justify-center py-3">
                <Logo className="w-7" />
              </div>
              <div className="relative flex h-full w-full justify-center text-center">
                <h1 className="flex select-none flex-col py-2 text-center text-4xl font-extrabold leading-none tracking-tight sm:text-5xl md:flex-col lg:flex-row">
                  <span
                    data-content="AI."
                    className="before:animate-gradient-background-1 relative before:absolute before:bottom-4 before:left-0 before:top-0 before:z-0 before:w-full before:px-2 before:content-[attr(data-content)] sm:before:top-0"
                  >
                    <span className="from-gradient-1-start to-gradient-1-end animate-gradient-foreground-1 bg-gradient-to-r bg-clip-text px-2 text-transparent">
                      AI.
                    </span>
                  </span>
                  <span
                    data-content="Chat."
                    className="before:animate-gradient-background-2 relative before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:w-full before:px-2 before:content-[attr(data-content)] sm:before:top-0"
                  >
                    <span className="from-gradient-2-start to-gradient-2-end animate-gradient-foreground-2 bg-gradient-to-r bg-clip-text px-2 text-transparent">
                      Chat.
                    </span>
                  </span>
                  <span
                    data-content="Experience."
                    className="before:animate-gradient-background-3 relative before:absolute before:bottom-1 before:left-0 before:top-0 before:z-0 before:w-full before:px-2 before:content-[attr(data-content)] sm:before:top-0"
                  >
                    <span className="from-gradient-3-start to-gradient-3-end animate-gradient-foreground-3 bg-gradient-to-r bg-clip-text px-2 text-transparent">
                      Experience.
                    </span>
                  </span>
                </h1>
              </div>
              <p className="md:text-md lg:text-md mx-auto mt-2 px-6 text-center text-xs text-slate-600 dark:text-slate-400 sm:px-6 md:max-w-2xl md:px-20">
                How can I help you today?
              </p>
            </div>
            <div id="chat" className="h-60 w-full">
              <div className="">
                <ScrollArea className="h-60 w-full overflow-auto p-2 md:p-4">
                  <div className={cn("pt-4")}>
                    {messages.map((m) => (
                      <div key={m.id} className="space-y-2 overflow-hidden p-2">
                        <p className="font-bold text-black dark:text-white">
                          {" "}
                          {m.role === "user" ? "You: " : "AI: "}
                        </p>
                        <p className="text-slate-600 dark:text-slate-400">
                          {m.content}
                        </p>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </div>
            </div>
            <div className="relative mt-2 w-full">
              <form onSubmit={handleSubmit}>
                <div className="">
                  <Input
                    className="pl-12"
                    value={input}
                    placeholder="Ask something with AI"
                    onChange={handleInputChange}
                  />
                </div>
              </form>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="default"
                      size="icon"
                      className="absolute left-1 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full bg-ali"
                      onClick={() => {
                        router.push("/new");
                      }}
                    >
                      <Icons.plus className="h-5 w-5 text-white" />

                      <span className="sr-only">New Chat</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>New Chat</TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <div className="">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        type="submit"
                        variant="default"
                        size="icon"
                        className="absolute right-1 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full bg-ali"
                        disabled={input === ""}
                      >
                        <Icons.enter className="mx-1 h-4 w-4 text-white" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>Send message</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
