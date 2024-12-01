// Dependencies: npm install lucide-react react-aria-components

"use client";

import { Clock } from "lucide-react";
import {
  DateInput,
  DateSegment,
  Label,
  TimeField,
} from "react-aria-components";

export default function Input38() {
  return (
    <TimeField className="space-y-2">
      <Label className="text-sm font-medium text-foreground">
        Time input with start icon
      </Label>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 start-0 z-10 flex items-center justify-center ps-3 text-muted-foreground/80">
          <Clock
            className="ml-2"
            size={16}
            strokeWidth={2}
            aria-hidden="true"
          />
        </div>
        <DateInput className="relative inline-flex h-9 w-full items-center overflow-hidden whitespace-nowrap rounded-lg border border-input bg-background px-3 py-2 pl-8 ps-9 text-sm">
          {(segment) => (
            <DateSegment
              segment={segment}
              className="inline rounded p-0.5 text-foreground caret-transparent"
            />
          )}
        </DateInput>
      </div>
      <p
        className="mt-2 text-xs text-muted-foreground"
        role="region"
        aria-live="polite"
      >
        Built with{" "}
        <a
          className="underline hover:text-foreground"
          href="https://react-spectrum.adobe.com/react-aria/DateField.html"
          target="_blank"
          rel="noopener nofollow"
        >
          React Aria
        </a>
      </p>
    </TimeField>
  );
}
