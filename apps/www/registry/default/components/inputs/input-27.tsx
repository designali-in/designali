"use client";

// Dependencies: npm install dicons
import { useEffect, useState } from "react";
import { LoaderCircle, Mic, Search } from "dicons";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Input27() {
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (inputValue) {
      setIsLoading(true);
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [inputValue]);

  return (
    <div className="space-y-2">
      <Label htmlFor="input-27">Search input with loader</Label>
      <div className="relative">
        <Input
          id="input-27"
          className="absolute pl-8"
          placeholder="Search..."
          type="search"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <div className="absolute left-1 top-2.5">
          {isLoading ? (
            <LoaderCircle className="absolute left-2 size-4 animate-spin" />
          ) : (
            <Search className="size-4" />
          )}
        </div>
        <Button
          variant="ghost"
          className="absolute right-4"
          aria-label="Press to speak"
          type="submit"
        >
          <Mic className="size-4" />
        </Button>
      </div>
    </div>
  );
}
