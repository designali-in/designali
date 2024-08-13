"use client";

import React from "react";
import dayjs from "dayjs";

interface Card {
  icon: React.ReactNode;
  title: string;
  link: string;
  value: number | string | undefined;
}

export const Exp = () => {
  const getAge = () =>
    (
      dayjs().diff("2015-03-01", "milliseconds") /
      (365.25 * 24 * 60 * 60 * 1000)
    ).toFixed(9);

  const [age, setAge] = React.useState(getAge());
  const [mounted, setMounted] = React.useState(false);

  setInterval(() => {
    setAge(getAge());
  }, 10);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const data: Card[] = [
    {
      title: "Years",
      link: "",
      value: age,
      icon: "",
    },
  ];

  return (
    <>
      <div className="mb-4 text-center">
        {mounted &&
          data.map((item) => {
            const { title, value } = item;

            return (
              <a key={title}>
                <h1 className="text-2xl font-bold text-ali">{value}</h1>
                <div className="dark:slate-600 text-center text-xs text-slate-400">
                  {title}
                </div>
              </a>
            );
          })}
      </div>
    </>
  );
};

export const AIExp = () => {
  const getAge = () =>
    (
      dayjs().diff("2015-03-01", "milliseconds") /
      (365.25 * 24 * 60 * 60 * 1000)
    ).toFixed(9);

  const [age, setAge] = React.useState(getAge());
  const [mounted, setMounted] = React.useState(false);

  setInterval(() => {
    setAge(getAge());
  }, 10);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const data: Card[] = [
    {
      title: "Years",
      link: "",
      value: age,
      icon: "",
    },
  ];

  return (
    <>
      <div className="text-center">
        {mounted &&
          data.map((item) => {
            const { title, value } = item;

            return (
              <a key={title} className="flex items-center gap-2">
                <h1 className="text-aired text-2xl font-bold">{value}</h1>
              </a>
            );
          })}
      </div>
    </>
  );
};
