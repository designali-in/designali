"use client";

import React from "react";
import { colord, extend, getFormat } from "colord";
import a11yPlugin from "colord/plugins/a11y";
import cmykPlugin from "colord/plugins/cmyk";
import hwbPlugin from "colord/plugins/hwb";
import lchPlugin from "colord/plugins/lch";
import namesPlugin from "colord/plugins/names";

import { Input } from "@/components/ui/input";

extend([hwbPlugin, cmykPlugin, lchPlugin, namesPlugin, a11yPlugin]);

interface List {
  label: string;
  value: string;
}

interface Lists {
  label: string;
  data: List[];
}

interface ItemProps {
  list: List[];
}

const ColorConverter = () => {
  const [value, setValue] = React.useState("#f50537");

  const lists: Lists[] = [
    {
      label: "Conversion",
      data: [
        {
          label: "HEX",
          value: colord(value).toHex(),
        },
        {
          label: "RGB",
          value: colord(value).toRgbString(),
        },
        {
          label: "HSL",
          value: colord(value).toHslString(),
        },
        {
          label: "HWB",
          value: colord(value).toHwbString(),
        },
        {
          label: "CMYK",
          value: colord(value).toCmykString(),
        },
        {
          label: "LCH",
          value: colord(value).toLchString(),
        },
        {
          label: "CSS Keyword",
          value: colord(value).toName({ closest: true }) || "Unknown",
        },
        {
          label: "Format",
          value: getFormat(value) || "-",
        },
        {
          label: "Hue (0-359)",
          value: `${colord(value).hue()} deg`,
        },
        {
          label: "Brightness",
          value: `${Math.floor(colord(value).brightness() * 100)}% (${
            colord(value).isDark() ? "Dark" : "Light"
          })`,
        },
        {
          label: "Luminance",
          value: `${Math.floor(colord(value).luminance() * 100)}%`,
        },
        {
          label: "Contrast",
          value: `${colord(value).contrast()}:1`,
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative flex w-full items-center justify-center gap-3">
        <div className="relative flex w-full max-w-[200px] items-center justify-between gap-3">
          <label htmlFor="color" className="text-lg font-bold">
            <div
              className="border-ali size-10 cursor-pointer rounded-full border-2"
              style={{ backgroundColor: value }}
            />
          </label>
          <input
            className="invisible absolute left-0 top-2"
            type="color"
            id="color"
            onChange={(e) => setValue(e.target.value)}
          />
          <Input value={value} onChange={(e) => setValue(e.target.value)} />
        </div>

        <p className="text-ali py-4 text-xl">
          {colord(value).toName({ closest: true })}
        </p>
      </div>

      <div>
        {lists.map((list) => {
          const { label, data } = list;

          return (
            <div
              key={label}
              className="flex flex-wrap justify-center gap-3 rounded-lg p-4"
            >
              <Items list={data} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Items = (props: ItemProps) => {
  const { list } = props;

  return (
    <>
      {list.map((item) => {
        const { label, value } = item;

        return (
          <div key={label} className="flex gap-3 rounded-lg border p-6">
            <div className="text-center" key={label}>
              <div className="text-xs text-slate-600 dark:text-slate-400">
                {label}
              </div>
              <div className="mt-2 text-lg font-semibold">{value}</div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ColorConverter;
