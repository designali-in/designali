"use client";

import { useEffect, useRef, useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const Dropdown = ({ items, value, onChange }) => {
  const [isHidden, setHidden] = useState(true);
  const dropdownRef = useRef(null);
  const [currentItem, setItem] = useState(value);

  useEffect(() => {
    onChange(currentItem);
  }, [currentItem]);

  useEffect(() => {
    setItem(value);
  }, [value]);

  return (
    <div>
      <Select>
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder={currentItem} />
        </SelectTrigger>
        <SelectContent>
          {items.map((item, _i) => {
            return (
              <SelectItem value={item}>
                <div
                  key={item + _i}
                  onClick={() => {
                    setItem(item);
                    setHidden(true);
                  }}
                >
                  {item}
                </div>
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
};
