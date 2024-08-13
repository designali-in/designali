import { customAlphabet } from "nanoid";
import { type UseFormReturn } from "react-hook-form";

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
