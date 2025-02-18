"use client";

import { Lightbulb } from "lucide-react";

import { Suggestion } from "@/lib/ai/suggestions";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

interface PromptSuggestionsProps {
  suggestions: Suggestion[];
  onSelect: (prompt: string) => void;
  disabled?: boolean;
}

export function PromptSuggestions({
  suggestions,
  onSelect,
  disabled = false,
}: PromptSuggestionsProps) {
  return (
    <div className="relative flex-grow overflow-hidden">
      <ScrollArea className="w-full whitespace-nowrap rounded-md">
        <div className="flex items-center gap-2">
          <div className="flex gap-2 py-1">
            {suggestions.map((suggestion) => (
              <Button
                key={suggestion.text}
                variant="secondary"
                size="sm"
                className="h-8 shrink-0 gap-1.5"
                disabled={disabled}
                onClick={() => onSelect(suggestion.prompt)}
              >
                <Lightbulb className="h-3.5 w-3.5 text-muted-foreground" />
                {suggestion.text}
              </Button>
            ))}
          </div>
        </div>
        <ScrollBar orientation="horizontal" className="h-2.5" />
      </ScrollArea>
    </div>
  );
}
