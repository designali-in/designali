import type { UseFormReturn } from "react-hook-form";
import { customAlphabet } from "nanoid";

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

export function setFormErrors(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: UseFormReturn<any>,
  errors: Record<string, string[]>,
) {
  for (const [field, messages] of Object.entries(errors)) {
    form.setError(field, { message: messages.join(" ") });
  }
}

export const nanoid = customAlphabet(
  "1234567890abcdefabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
  6,
);

export const convertToCamelCase = (inputString) => {
  // Remove leading numbers, symbols, and hyphens
  if (!inputString) {
    return "";
  }
  const cleanedString = inputString
    .replace(/^[^a-zA-Z_]+/, "")
    .replace(/[^a-zA-Z0-9_]+/g, "");

  // Split the string into words
  const words = cleanedString.split(/[\s-_]+/);

  // Capitalize the first letter of each word and join with underscores
  const camelCaseString = words
    .map((word, index) => {
      return index === 0
        ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join("_");

  return camelCaseString;
};
