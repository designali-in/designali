"use client";

import { useState } from "react";
import { Eye, EyeOff } from "dicons";

// Dependencies: npm install dicons

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Input23() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisibility = () => setIsVisible((prevState) => !prevState);

  return (
    <div className="space-y-2">
      <Label htmlFor="input-23">Show/hide password input</Label>
      <div className="relative">
        <Input
          id="input-23"
          className="absolute"
          placeholder="Password"
          type={isVisible ? "text" : "password"}
        />
        <Button
          className="absolute right-0"
          size="icon"
          variant="ghost"
          type="button"
          onClick={toggleVisibility}
          aria-label={isVisible ? "Hide password" : "Show password"}
          aria-pressed={isVisible}
          aria-controls="password"
        >
          {isVisible ? (
            <EyeOff className="size-4" />
          ) : (
            <Eye className="size-4" />
          )}
        </Button>
      </div>
    </div>
  );
}
