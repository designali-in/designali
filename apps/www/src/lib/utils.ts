import crypto from "crypto";
import type { ClassValue } from "clsx";
import { clsx } from "clsx";
import ms from "ms";
import qs from "query-string";
import { twMerge } from "tailwind-merge";

import { env } from "../env";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function absoluteUrl(path: string) {
  return `${env.NEXT_PUBLIC_APP_URL}${path}`;
}

export function truncate(str: string, length: number) {
  return str.length > length ? `${str.substring(0, length)}...` : str;
}

export function formatDate(input: string | number): string {
  const date = new Date(input);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function formUrlQuery({
  params,
  key,
  value,
}: {
  params: string;
  key: string;
  value: string | null;
}) {
  const currentUrl = qs.parse(params);

  currentUrl[key] = value;

  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: currentUrl,
    },
    { skipNull: true },
  );
}

export const expirationTime = (
  expiration: string,
  updatedAt?: Date,
  timeOnly?: boolean,
): string => {
  if (!expiration || !updatedAt) return "Invalid data";
  if (expiration === "-1") return "Never";

  const expirationSeconds = parseInt(expiration, 10);
  if (isNaN(expirationSeconds)) return "Invalid expiration format";

  const now = Date.now();
  const updatedAtTimestamp = new Date(updatedAt).getTime();
  const expirationMilliseconds = expirationSeconds * 1000;
  const expirationTime = updatedAtTimestamp + expirationMilliseconds;
  const remainingTime = expirationTime - now;
  if (remainingTime <= 0) return "Expired";

  const remainingTimeString = ms(remainingTime, { long: true });
  if (timeOnly) {
    return remainingTimeString;
  }
  return `${remainingTimeString}`;
};

export async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit,
): Promise<JSON> {
  const res = await fetch(input, init);

  if (!res.ok) {
    const json = await res.json();
    if (json.error) {
      const error = new Error(json.error) as Error & {
        status: number;
      };
      error.status = res.status;
      throw error;
    } else {
      throw new Error("An unexpected error occurred");
    }
  }

  return res.json();
}

export function removeUrlSuffix(url: string): string {
  return url.startsWith("http") ? url.split("//")[1] : url;
}

// Utils from precedent.dev
export const timeAgo = (timestamp: Date, timeOnly?: boolean): string => {
  if (!timestamp) return "never";
  return `${ms(Date.now() - new Date(timestamp).getTime())}${
    timeOnly ? "" : " ago"
  }`;
};

// eslint-disable-next-line @typescript-eslint/no-inferrable-types
export function generateUrlSuffix(length: number = 6): string {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let result = "";

  const randomValues = new Uint8Array(length);
  // Use crypto.getRandomValues for browser compatibility
  if (typeof window !== "undefined" && window.crypto) {
    window.crypto.getRandomValues(randomValues);
  } else {
    // Fallback to Node.js crypto module if in Node environment
    const crypto = require("crypto");
    const nodeRandomValues = crypto.randomBytes(length);
    randomValues.set(nodeRandomValues);
  }

  for (let i = 0; i < length; i++) {
    result += characters[randomValues[i] % charactersLength];
  }

  return result;
}
