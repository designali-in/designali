import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { colord, extend } from "colord";
import a11yPlugin from "colord/plugins/a11y";
import { ComboBoxItemType } from "../types/global";
import { enIN as locale } from "date-fns/locale";
import { formatDistanceToNowStrict, intervalToDuration } from "date-fns";
import { siteConfig } from "../config/site";
import { Metadata } from "next";

export function getBaseUrl() {
  if (process.env.DOMAIN_URL) return process.env.DOMAIN_URL;
  if (process.env.NEXT_PUBLIC_APP_URL) return process.env.NEXT_PUBLIC_APP_URL;
}

export function constructMetadata({
  title = siteConfig.name,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  icons = "/favicon.ico",
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    keywords: [
      "Next.js",
      "React",
      "Prisma",
      "Neon",
      "Auth.js",
      "shadcn ui",
      "Resend",
      "React Email",
      "Stripe",
    ],
    authors: [
      {
        name: "mickasmt",
      },
    ],
    creator: "mickasmt",
    openGraph: {
      type: "website",
      locale: "en_US",
      url: siteConfig.url,
      title,
      description,
      siteName: title,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@miickasmt",
    },
    icons,
    metadataBase: new URL(siteConfig.url),
    manifest: `${siteConfig.url}/site.webmanifest`,
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}

export const getBlurDataURL = async (url: string | null) => {
  if (!url) {
    return "data:image/webp;base64,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=";
  }

  if (url.startsWith("/_static/")) {
    url = `${siteConfig.url}${url}`;
  }

  try {
    const response = await fetch(
      `https://wsrv.nl/?url=${url}&w=50&h=50&blur=5`,
    );
    const buffer = await response.arrayBuffer();
    const base64 = Buffer.from(buffer).toString("base64");

    return `data:image/png;base64,${base64}`;
  } catch (error) {
    return "data:image/webp;base64,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=";
  }
};

export const placeholderBlurhash =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAoJJREFUWEfFl4lu4zAMRO3cx/9/au6reMaOdkxTTl0grQFCRoqaT+SQotq2bV9N8rRt28xms87m83l553eZ/9vr9Wpkz+ezkT0ej+6dv1X81AFw7M4FBACPVn2c1Z3zLgDeJwHgeLFYdAARYioAEAKJEG2WAjl3gCwNYymQQ9b7/V4spmIAwO6Wy2VnAMikBWlDURBELf8CuN1uHQSrPwMAHK5WqwFELQ01AIXdAa7XawfAb3p6AOwK5+v1ugAoEq4FRSFLgavfQ49jAGQpAE5wjgGCeRrGdBArwHOPcwFcLpcGU1X0IsBuN5tNgYhaiFFwHTiAwq8I+O5xfj6fOz38K+X/fYAdb7fbAgFAjIJ6Aav3AYlQ6nfnDoDz0+lUxNiLALvf7XaDNGQ6GANQBKR85V27B4D3QQRw7hGIYlQKWGM79hSweyCUe1blXhEAogfABwHAXAcqSYkxCtHLUK3XBajSc4Dj8dilAeiSAgD2+30BAEKV4GKcAuDqB4TdYwBgPQByCgApUBoE4EJUGvxUjF3Q69/zLw3g/HA45ABKgdIQu+JPIyDnisCfAxAFNFM0EFNQ64gfS0EUoQP8ighrZSjn3oziZEQpauyKbfjbZchHUL/3AS/Dd30gAkxuRACgfO+EWQW8qwI1o+wseNuKcQiESjALvwNoMI0TcRzD4lFcPYwIM+JTF5x6HOs8yI7jeB5oKhpMRFH9UwaSCDB2Jmg4rc6E2TT0biIaG0rQhNqyhpHBcayTTSXH6vcDL7/sdqRK8LkwTsU499E8vRcAojHcZ4AxABdilgrp4lsXk8oVqgwh7+6H3phqd8J0Kk4vbx/+sZqCD/vNLya/5dT9fAH8g1WdNGgwbQAAAABJRU5ErkJggg==";


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function absoluteUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_APP_URL}${path}`
}

extend([a11yPlugin]);

export const handleColorTextClass = (color: string) => {
  const luminance = colord(color).luminance();

  return luminance < 0.3 ? "white" : "black";
};


export function capitalizeFirstCharacter(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
// text.charAt(0).toUpperCase() + text.slice(1);


export function formatUrl(name: string, reverse?: boolean) {
  if (reverse) {
    return decodeURIComponent(name.split("-").join(" "));
  }

  return name.split(" ").join("-");
}

export function formatDate(input: string | number): string {
  const date = new Date(input);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function randomElement<T>(items: T[]): T {
  if (items.length === 0) {
    throw new Error("Cannot select a random element from an empty array");
  }
  if (items.length === 0) {
    throw new Error("Cannot select a random element from an empty array");
  }
  return items[Math.floor(Math.random() * items.length)] as T;
}

export function uniq<T>(arr: T[]): T[] {
  return arr.filter((value, index, self) => self.indexOf(value) === index);
}

let debounceTimer: NodeJS.Timeout | null = null;

export const debounce =
  (fn: Function, delay = 300) =>
  (...args: any[]) => {
    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }
    debounceTimer = setTimeout(() => {
      fn(...args);
    }, delay);
  };

  export function getYearData() {
    const currentYear = new Date().getFullYear();
    const years: ComboBoxItemType[] = [];
  
    for (let i = currentYear; i >= 1980; i--) {
      years.push({
        value: i.toString(),
        label: i.toString(),
      });
    }
  
    return years;
  }


const formatDistanceLocale = {
  lessThanXSeconds: "just now",
  xSeconds: "just now",
  halfAMinute: "just now",
  lessThanXMinutes: "{{count}}m",
  xMinutes: "{{count}}m",
  aboutXHours: "{{count}}h",
  xHours: "{{count}}h",
  xDays: "{{count}}d",
  aboutXWeeks: "{{count}}w",
  xWeeks: "{{count}}w",
  aboutXMonths: "{{count}}m",
  xMonths: "{{count}}m",
  aboutXYears: "{{count}}y",
  xYears: "{{count}}y",
  overXYears: "{{count}}y",
  almostXYears: "{{count}}y",
};

  function formatDistance(token: string, count: number, options?: any): string {
    options = options || {};
  
    const result = formatDistanceLocale[
      token as keyof typeof formatDistanceLocale
    ].replace("{{count}}", count.toString());
  
    if (options.addSuffix) {
      if (options.comparison > 0) {
        return "in " + result;
      } else {
        if (result === "just now") return result;
        return result + " ago";
      }
    }
  
    return result;
  }

  export function formatTimeToNow(date: Date): string {
    return formatDistanceToNowStrict(date, {
      addSuffix: true,
      locale: {
        ...locale,
        formatDistance,
      },
    });
  }

  export function formatDescription(description: string, trim: number) {
    if (description.length > trim) {
      const trimmedDescription = description.slice(0, trim).trimEnd();
      return trimmedDescription + "...";
    }
  
    return description;
  }


export function convertToSingleDecimalPlace(
  number: number,
  decimalPlaces: number,
) {
  const roundedNumber = number.toFixed(decimalPlaces);
  const singleDecimalPlace = parseFloat(roundedNumber).toFixed(1);

  return parseFloat(singleDecimalPlace);
}


export function formatTimeLeft(expiryDate: Date) {
  const currentDate = new Date();

  const duration = intervalToDuration({ start: currentDate, end: expiryDate });

  if (!duration) return "Expired";

  const years = duration.years ?? 0;
  const months = duration.months ?? 0;
  const days = duration.days ?? 0;
  const hours = duration.hours ?? 0;
  const minutes = duration.minutes ?? 0;
  const seconds = duration.seconds ?? 0;

  if (years > 0) {
    return `${years} year${years > 1 ? "s" : ""}`;
  } else if (months > 0) {
    return `${months} month${months > 1 ? "s" : ""}`;
  } else if (days > 0) {
    return `${days} day${days > 1 ? "s" : ""}`;
  } else if (hours > 0) {
    return `${hours} hour${hours > 1 ? "s" : ""}`;
  } else if (minutes > 0) {
    return `${minutes} minute${minutes > 1 ? "s" : ""}`;
  } else {
    return `${seconds} second${seconds > 1 ? "s" : ""}`;
  }
}