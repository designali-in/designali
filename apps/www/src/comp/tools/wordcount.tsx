/* eslint-disable @typescript-eslint/no-unnecessary-condition */
"use client";

import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

const WordCounter = () => {
  const [value, setValue] = React.useState("");
  const words = value.match(/\S+/g)?.length || 0;
  const chars = value.length || 0;
  const charsWithoutSpaces = value.replaceAll(" ", "").length || 0;
  const paragraphs =
    value.split("\n").filter((paragraph) => paragraph !== "").length || 0;

  return (
    <div
      id="word-counter"
      className="mx-auto mt-10  flex max-w-5xl flex-col items-center justify-center  "
    >
      <div className="grid w-full grid-cols-2 gap-2 sm:grid-cols-4">
        <Card x-chunk="dashboard-01-chunk-0">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-2xl font-bold">{words}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">words</p>
          </CardContent>
        </Card>
        <Card x-chunk="dashboard-01-chunk-0">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-2xl font-bold">{chars}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">characters</p>
          </CardContent>
        </Card>
        <Card x-chunk="dashboard-01-chunk-0">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-2xl font-bold">
              {charsWithoutSpaces}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">
              characters without spaces
            </p>
          </CardContent>
        </Card>
        <Card x-chunk="dashboard-01-chunk-0">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-2xl font-bold">{paragraphs}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">paragraphs</p>
          </CardContent>
        </Card>
      </div>

      <Textarea
        className="mt-2 h-[600px] border border-accent"
        placeholder="Type here ..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default WordCounter;
