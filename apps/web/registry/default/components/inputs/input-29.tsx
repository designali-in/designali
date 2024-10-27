// Dependencies: npm install dicons react-aria-components

"use client";

import { buttonVariants } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "dicons";
import {
  Button,
  Group,
  Input,
  Label,
  NumberField,
} from "react-aria-components";

export default function Input29() {
  return (
    <NumberField
      defaultValue={99}
      formatOptions={{
        style: "currency",
        currency: "EUR",
        currencySign: "accounting",
      }}
    >
      <div className="space-y-2">
        <Label className="text-sm font-medium text-foreground">
          Number input with chevrons
        </Label>
        <Group className="relative inline-flex h-9 items-center overflow-hidden whitespace-nowrap rounded-lg border border-input text-sm shadow-sm shadow-black/[.04] ring-offset-background transition-shadow data-[focus-within]:border-ring data-[disabled]:opacity-50 data-[focus-within]:outline-none data-[focus-within]:ring-2 data-[focus-within]:ring-ring/30 data-[focus-within]:ring-offset-2">
          <Input className="w-40 flex-1 bg-background px-3 py-2 tabular-nums text-foreground focus:outline-none" />
          <div className="flex">
            <Button
              slot="increment"
              className={buttonVariants({ variant: "outline" })}
            >
              <ChevronUp className="size-4" />
            </Button>
            <Button
              slot="decrement"
              className={buttonVariants({ variant: "outline" })}
            >
              <ChevronDown className="size-4" />
            </Button>
          </div>
        </Group>
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
    </NumberField>
  );
}
