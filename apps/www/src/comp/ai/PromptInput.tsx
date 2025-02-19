import { useState } from "react";
import { Button } from "@/registry/default/ui/button";
import { DIcons } from "dicons";
import { ArrowUp, ArrowUpRight, RefreshCw } from "lucide-react";

import { getRandomDesignSuggestions, Suggestion } from "@/lib/ai/suggestions";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";

type QualityMode = "performance" | "quality";

interface PromptInputProps {
  onSubmit: (prompt: string) => void;
  isLoading?: boolean;
  showProviders: boolean;
  onToggleProviders: () => void;
  mode: QualityMode;
  onModeChange: (mode: QualityMode) => void;
  suggestions: Suggestion[];
}

export function PromptInput({
  suggestions: initSuggestions,
  isLoading,
  onSubmit,
}: PromptInputProps) {
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState<Suggestion[]>(initSuggestions);

  const updateSuggestions = () => {
    setSuggestions(getRandomDesignSuggestions());
  };
  const handleSuggestionSelect = (prompt: string) => {
    setInput(prompt);
    onSubmit(prompt);
  };

  const handleSubmit = () => {
    if (!isLoading && input.trim()) {
      onSubmit(input);
    }
  };

  // const handleRefreshSuggestions = () => {
  //   setCurrentSuggestions(getRandomSuggestions());
  // };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (!isLoading && input.trim()) {
        onSubmit(input);
      }
    }
  };

  return (
    <div className="mb-8 w-full">
      <div className="rounded-xl">
        <div className="flex flex-col gap-3">
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Enter your prompt here"
            rows={3}
            className="border-ali/50 h-12 resize-none border border-dotted p-3 text-base text-primary/50 focus-visible:ring-0 focus-visible:ring-offset-0"
          />
          <div className="flex items-center justify-between pt-1">
            <div className="flex items-center justify-between space-x-2">
              <button
                onClick={updateSuggestions}
                className="group flex items-center justify-between rounded-lg bg-background px-2 py-1 text-sm transition-opacity duration-200 hover:opacity-70"
              >
                <RefreshCw className="h-4 w-4 text-zinc-500 group-hover:opacity-70" />
              </button>
              {suggestions.map((suggestion, index) => (
                <Button
                  key={index}
                  variant="outline"
                  onClick={() => handleSuggestionSelect(suggestion.prompt)}
                  className={cn(
                    "",
                    index > 2
                      ? "hidden md:flex"
                      : index > 1
                        ? "hidden sm:flex"
                        : "",
                  )}
                >
                  <span>
                    <span className="text-xs   sm:text-sm">
                      {suggestion.text.toLowerCase()}
                    </span>
                  </span>
                  <ArrowUpRight className="ml-1 h-2 w-2   group-hover:opacity-70 sm:h-3 sm:w-3" />
                </Button>
              ))}
            </div>
            <button
              onClick={handleSubmit}
              disabled={isLoading || !input.trim()}
              className="flex h-8 w-8 items-center justify-center rounded-full  disabled:opacity-50"
            >
              {isLoading ? (
                <DIcons.Loader className="h-5 w-5 animate-spin" />
              ) : (
                <ArrowUp className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
