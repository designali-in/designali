"use client";

import { HTMLAttributes, useEffect, useState } from "react";
import { Check, Copy } from "lucide-react";
import { motion } from "motion/react";
import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ScriptCopyBtnProps extends HTMLAttributes<HTMLDivElement> {
  codeLanguage: string;
  lightTheme: string;
  darkTheme: string;
  commandMap: Record<string, string>;
  className?: string;
}

export default function ScriptCopyBtn({
  codeLanguage,
  lightTheme,
  darkTheme,
  commandMap,
  className,
}: ScriptCopyBtnProps) {
  const packageManagers = Object.keys(commandMap);
  const [packageManager, setPackageManager] = useState(packageManagers[0]);
  const [copied, setCopied] = useState(false);
  const [highlightedCode, setHighlightedCode] = useState("");
  const { theme } = useTheme();
  const command = commandMap[packageManager];

  useEffect(() => {
    async function loadHighlightedCode() {
      try {
        const { codeToHtml } = await import("shiki");
        const highlighted = await codeToHtml(command, {
          lang: codeLanguage,
          themes: {
            light: lightTheme,
            dark: darkTheme,
          },
          defaultColor: theme === "dark" ? "dark" : "light",
        });
        setHighlightedCode(highlighted);
      } catch (error) {
        console.error("Error highlighting code:", error);
        setHighlightedCode(`<pre>${command}</pre>`);
      }
    }

    loadHighlightedCode();
  }, [command, theme, codeLanguage, lightTheme, darkTheme]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={cn("mx-auto flex w-full flex-col", className)}>
      <Tabs
        defaultValue={packageManager}
        onValueChange={setPackageManager}
        className="w-full"
      >
        <TabsList className="mb-2">
          {packageManagers.map((pm) => (
            <TabsTrigger key={pm} value={pm}>
              {pm}
            </TabsTrigger>
          ))}
        </TabsList>

        {packageManagers.map((pm) => (
          <TabsContent key={pm} value={pm}>
            <div className="relative flex items-center">
              <div className="grid grow font-mono text-sm">
                <div className="grid w-full min-w-0 overflow-auto rounded-xl">
                  {highlightedCode ? (
                    <div
                      className={`[&>pre]:overflow-x-auto [&>pre]:rounded-md [&>pre]:p-4 [&>pre]:px-4 [&>pre]:font-mono ${
                        theme === "dark" ? "dark" : "light"
                      }`}
                      dangerouslySetInnerHTML={{ __html: highlightedCode }}
                    />
                  ) : (
                    <pre className="my-4 max-h-[450px] w-full overflow-auto rounded-lg border bg-slate-50 p-4 dark:bg-slate-950">
                      {commandMap[pm]}
                    </pre>
                  )}
                </div>
              </div>
              <Button
                variant="outline"
                size="icon"
                className="relative ml-2 rounded-md"
                onClick={copyToClipboard}
                aria-label={copied ? "Copied" : "Copy to clipboard"}
              >
                <span className="sr-only">{copied ? "Copied" : "Copy"}</span>
                <Copy
                  className={`h-4 w-4 transition-all duration-300 ${
                    copied ? "scale-0" : "scale-100"
                  }`}
                />
                <Check
                  className={`absolute inset-0 m-auto h-4 w-4 transition-all duration-300 ${
                    copied ? "scale-100" : "scale-0"
                  }`}
                />
              </Button>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
