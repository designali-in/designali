// Dependencies: npm install react-aria-components

"use client";

import {
  DateField,
  DateInput,
  DateSegment,
  Label,
} from "react-aria-components";

export default function Input36() {
  return (
    <DateField className="space-y-2">
      <Label className="text-sm font-medium text-foreground">Date input</Label>
      <DateInput className="relative inline-flex h-9 w-full items-center overflow-hidden whitespace-nowrap rounded-lg border border-input bg-background px-3 py-2 text-sm">
        {(segment) => <DateSegment segment={segment} className=" " />}
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
