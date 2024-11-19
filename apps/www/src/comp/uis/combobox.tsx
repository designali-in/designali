/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import type { ComboBoxItemType } from "@/types";
import type { FC } from "react";
import React, { forwardRef, useEffect, useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ComboboxProps extends React.HTMLAttributes<HTMLInputElement> {
  placeholder: string;
  data: ComboBoxItemType[];
  setState: (catalog: string) => void;
  selectedOption?: string;
  disabled?: boolean;
  large?: boolean;
  reset?: boolean;
}

export const Combobox: FC<ComboboxProps> = forwardRef<
  HTMLInputElement,
  ComboboxProps
>(
  (
    {
      data,
      placeholder,
      setState,
      selectedOption,
      disabled,
      large,
      reset,
      ...props
    },
    ref,
  ) => {
    const [open, setOpen] = useState(false);

    const selectedGenre = data.find((item) => item.label === selectedOption);

    const [value, setValue] = useState(selectedGenre ?? "");

    useEffect(() => {
      if (!reset) return;

      setValue("");
    }, [reset]);

    useEffect(() => {
      if (value) {
        const findIndex = data.findIndex((item) => item.value === value);

        setState(data[findIndex]?.value || "");
      } else {
        setState("");
      }
    }, [value, setState, data]);

    return (
      <Popover open={open} onOpenChange={setOpen} {...props}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[200px] justify-between"
          >
            {value
              ? data?.find((item) => item.value === value)?.label ||
                "Default Label"
              : placeholder}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput
              placeholder={placeholder}
              ref={ref}
              disabled={disabled}
            />
            <CommandEmpty>Search not found.</CommandEmpty>
            <CommandGroup>
              <ScrollArea
                className={cn({
                  "h-48": large,
                })}
              >
                {data.map((item) => (
                  <CommandItem
                    key={item.value}
                    className="cursor-pointer"
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === item.value ? "opacity-100" : "opacity-0",
                      )}
                    />
                    {item.label}
                  </CommandItem>
                ))}
              </ScrollArea>
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    );
  },
);
Combobox.displayName = "Combobox";
