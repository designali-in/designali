"use client";

import React, { useState } from "react";
import Image from "next/image";

interface Card {
  id: number;
  src: string;
  name: string;
  designation: string;
  content: React.ReactNode;
}

export const CardStack = ({
  items,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const [cards] = useState<Card[]>(items);

  return (
    <div className="rounded-3xl border border-slate-200 p-2 dark:border-slate-800">
      <div className="relative flex h-[450px]">
        {cards.map((card) => {
          return (
            <div key={card.id} className="flex h-full w-auto flex-col">
              <Image
                src={card.src}
                alt={""}
                loading="lazy"
                className="w-xl -z-10 h-full rounded-2xl object-cover object-center"
                width={1400}
                height={800}
              />
              <div className="grid">
                <div className="absolute top-0 p-6">
                  <p className="text-4xl font-bold text-white">{card.name}</p>
                  <p className="font-normal text-white">{card.designation}</p>
                </div>
                <div className="absolute bottom-6 flex px-6 text-xs text-white md:text-sm">
                  {card.content}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const MiniCardStack = ({
  items,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const [cards] = useState<Card[]>(items);

  return (
    <div className="rounded-3xl border border-slate-200 p-2 dark:border-slate-800">
      <div className="relative flex h-[200px] w-full">
        {cards.map((card) => {
          return (
            <div key={card.id} className="flex h-full w-full flex-col">
              <Image
                src={card.src}
                alt={""}
                loading="lazy"
                className="absolute -z-10 h-full w-full rounded-2xl object-cover object-center"
                width={1200}
                height={800}
              />
              <div className="grid">
                <div className="p-6">
                  <p className="text-2xl font-bold text-white">{card.name}</p>
                  <p className="font-normal text-white">{card.designation}</p>
                </div>
                <div className="absolute bottom-6 flex px-6 text-xs text-white md:text-sm">
                  {card.content}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
