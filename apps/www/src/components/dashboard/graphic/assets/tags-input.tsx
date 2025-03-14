import React, { useEffect, useState } from "react";
import { DIcons } from "dicons";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface TagInputProps {
  initialTags: string[];
  onTagsChange: (tags: string[]) => void;
}

export function TagInput({ initialTags, onTagsChange }: TagInputProps) {
  const [inputValue, setInputValue] = useState("");
  const [tags, setTags] = useState<string[]>(initialTags);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const response = await fetch("/api/assets/tags");
        if (response.ok) {
          const existingTags = await response.json();
          setSuggestions(existingTags.map((tag: { name: string }) => tag.name));
        } else {
          console.error("Failed to fetch tags.");
        }
      } catch (error) {
        console.error("Error fetching tags:", error);
      }
    };
    fetchTags();
  }, []);

  useEffect(() => {
    onTagsChange(tags);
  }, [tags, onTagsChange]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const addTag = (tag: string) => {
    const trimmedTag = tag.trim();
    if (trimmedTag && !tags.includes(trimmedTag)) {
      setTags((prevTags) => [...prevTags, trimmedTag]);
      setInputValue("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags((prevTags) => prevTags.filter((tag) => tag !== tagToRemove));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      addTag(inputValue);
    }
  };

  const handleSelectChange = (value: string) => {
    addTag(value);
  };

  return (
    <div className="space-y-2">
      <div className="flex space-x-2">
        <Select onValueChange={handleSelectChange}>
          <SelectTrigger className="w-96">
            <SelectValue placeholder="Select a tag" />
          </SelectTrigger>
          <SelectContent>
            {suggestions.length > 0 ? (
              suggestions.map((suggestion) => (
                <SelectItem key={suggestion} value={suggestion}>
                  {suggestion}
                </SelectItem>
              ))
            ) : (
              <SelectItem disabled value={null}>
                No tags available
              </SelectItem>
            )}
          </SelectContent>
        </Select>
        {/*<Input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
          placeholder="Add tags..."
        />
        <Button type="button" onClick={() => addTag(inputValue)}>
          Add
        </Button> */}
      </div>
      <div className="mt-2 flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <Badge
            key={index}
            variant="secondary"
            className="flex cursor-pointer items-center gap-2 px-3 py-1 text-sm"
          >
            <span className="flex items-center gap-1">
              {tag}
              <DIcons.Close
                onClick={() => removeTag(tag)}
                className="h-4 w-4 cursor-pointer"
              />
            </span>
          </Badge>
        ))}
      </div>
    </div>
  );
}
