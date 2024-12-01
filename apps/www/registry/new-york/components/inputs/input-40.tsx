// Dependencies: npm install react-aria-components

"use client";

import {
  DateField,
  DateInput,
  DateSegment,
  Label,
} from "react-aria-components";

export default function Input40() {
  return (
    <DateField className="space-y-2" granularity="minute" hourCycle={24}>
      <Label className="text-sm font-medium text-foreground">
        Date and time input
      </Label>
      <DateInput className="relative inline-flex h-9 w-full items-center overflow-hidden whitespace-nowrap rounded-lg border border-input bg-background px-3 py-2 text-sm shadow-sm shadow-black/[.04] ring-offset-background transition-shadow data-[focus-within]:border-ring data-[disabled]:opacity-50 data-[focus-within]:outline-none data-[focus-within]:ring-2 data-[focus-within]:ring-ring/30 data-[focus-within]:ring-offset-2">
        {(segment) => (
          <DateSegment
            segment={segment}
            className="inline rounded p-0.5 text-foreground"
          />
        )}
      </DateInput>
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
    </DateField>
  );
}
