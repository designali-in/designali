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
    console.log("Fetched Tags:", suggestions.join("\n"));
  }, [suggestions]);
  
  useEffect(() => {
    const fetchTags = async () => {
      try {
        const response = await fetch("/api/admin/inspiration/tags");
        if (response.ok) {
          const existingTags = await response.json();
          setSuggestions(existingTags); // Directly store string array
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
    const cleanTag = tag.trim().replace(/[\[\]"]/g, ""); // Remove brackets and quotes
    if (cleanTag && !tags.includes(cleanTag)) {
      setTags([...tags, cleanTag]);
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
    if (value && !tags.includes(value)) {
      setTags((prevTags) => [...prevTags, value]); // Store only the tag name
    }
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
              suggestions.map((tag, index) => (
                <SelectItem key={index} value={tag}>
                  {tag}
                </SelectItem>
              ))
            ) : (
              <SelectItem disabled value="no-tags">
                No tags available
              </SelectItem>
            )}
          </SelectContent>
        </Select>
        <Input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
          placeholder="Add tags..."
        />
        <Button type="button" onClick={() => addTag(inputValue)}>
          Add
        </Button>
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
