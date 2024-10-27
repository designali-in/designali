"use client";

// Dependencies: npm install dicons
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CircleX } from "dicons";

export default function Input24() {
  const [inputValue, setInputValue] = useState("Click to clear");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClearInput = () => {
    setInputValue("");
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="space-y-2">
      <Label htmlFor="input-24">Input with clear button</Label>
      <div className="relative">
        <Input
          id="input-24"
          ref={inputRef}
          className="absolute"
          placeholder="Type something..."
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        {inputValue && (
          <Button
            className="absolute right-0"
            variant="ghost"
            aria-label="Clear input"
            onClick={handleClearInput}
          >
            <CircleX className="size-4" />
          </Button>
        )}
      </div>
    </div>
  );
}
