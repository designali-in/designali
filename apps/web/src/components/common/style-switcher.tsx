"use client";

import type { Style } from "@/lib/registry/styles";
import type { SelectTriggerProps } from "@radix-ui/react-select";
import * as React from "react";
import { useConfig } from "@/hooks/use-config";
import { styles } from "@/lib/registry/styles";
import { cn } from "@designali/ui";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@designali/ui/select";

export function StyleSwitcher({ className, ...props }: SelectTriggerProps) {
  const [config, setConfig] = useConfig();

  return (
    <Select
      value={config.style}
      onValueChange={(value: Style["name"]) =>
        setConfig({
          ...config,
          style: value,
        })
      }
    >
      <SelectTrigger
        className={cn(
          "h-10 w-auto gap-2 text-xs [&_svg]:h-4 [&_svg]:w-4",
          className,
        )}
        {...props}
      >
        <span className="text-muted-foreground">Style: </span>
        <SelectValue placeholder="Select style" />
      </SelectTrigger>
      <SelectContent>
        {styles.map((style) => (
          <SelectItem key={style.name} value={style.name} className="text-xs">
            {style.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
