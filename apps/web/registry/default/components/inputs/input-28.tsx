// Dependencies: npm install dicons react-aria-components

"use client";

import { buttonVariants } from "@/components/ui/button";
import { Minus, Plus } from "dicons";
import {
  Button,
  Group,
  Input,
  Label,
  NumberField,
} from "react-aria-components";

export default function Input28() {
  return (
    <NumberField defaultValue={2048} minValue={0}>
      <div className="space-y-2">
        <Label className="text-sm font-medium text-foreground">
          Number input with plus/minus buttons
        </Label>
        <Group className="relative inline-flex h-9 w-full items-center overflow-hidden whitespace-nowrap rounded-lg border border-input text-sm shadow-sm ring-offset-background transition-shadow data-[focus-within]:border-ring data-[disabled]:opacity-50 data-[focus-within]:outline-none data-[focus-within]:ring-2 data-[focus-within]:ring-ring/30 data-[focus-within]:ring-offset-2">
          <Button
            className={buttonVariants({ variant: "outline" })}
            slot="decrement"
          >
            <Minus className="size-4" />
          </Button>
          <Input className="w-full grow bg-background px-3 py-2 text-center tabular-nums text-foreground focus:outline-none" />
          <Button
            slot="increment"
            className={buttonVariants({ variant: "outline" })}
          >
            <Plus className="size-4" />
          </Button>
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
