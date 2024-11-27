"use client";

import { DIcons } from "dicons";
import { useTheme } from "next-themes";

function handleScrollTop() {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
}

const Footer = () => {
  const { setTheme } = useTheme();

  return (
    <div className="flex justify-center">
      <div className="rounded-full border border-slate-100 p-1 dark:border-slate-900">
        <button
          onClick={() => setTheme("light")}
          className="bg-ali mr-3 rounded-full p-2 text-white dark:bg-background dark:text-slate-400"
        >
          <DIcons.Sun className="h-5 w-5" strokeWidth={1} />
          <span className="sr-only">T</span>
        </button>

        <button type="button" onClick={handleScrollTop}>
          <DIcons.ArrowUp className="h-5 w-5" />
          <span className="sr-only">Top</span>
        </button>

        <button
          onClick={() => setTheme("dark")}
          className="dark:bg-ali ml-3 rounded-full p-2 text-slate-600 dark:text-white"
        >
          <DIcons.Moon className="h-5 w-5" strokeWidth={1} />
          <span className="sr-only">T</span>
        </button>
      </div>
    </div>
  );
};

export default Footer;
