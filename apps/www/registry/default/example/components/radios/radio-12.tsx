// Dependencies: pnpm install @remixicon/react

import { DIcons } from "dicons";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function RadioDemo() {
  return (
    <RadioGroup className="grid-cols-3" defaultValue="cc">
      {/* Credit card */}
      <label className="relative flex cursor-pointer flex-col items-center gap-3 rounded-lg border border-input px-2 py-3 text-center shadow-sm shadow-black/5 outline-offset-2 transition-colors has-[[data-state=checked]]:border-ring has-[[data-state=checked]]:bg-accent has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-ring/70">
        <RadioGroupItem
          id="radio-12-cc"
          value="cc"
          className="sr-only after:absolute after:inset-0"
        />
        <DIcons.Nike
          className="h-6 w-6 opacity-60"
          size={20}
          aria-hidden="true"
        />
        <p className="text-xs font-medium leading-none text-foreground">Nike</p>
      </label>
      {/* PayPal */}
      <label className="relative flex cursor-pointer flex-col items-center gap-3 rounded-lg border border-input px-2 py-3 text-center shadow-sm shadow-black/5 outline-offset-2 transition-colors has-[[data-state=checked]]:border-ring has-[[data-state=checked]]:bg-accent has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-ring/70">
        <RadioGroupItem
          id="radio-12-paypal"
          value="paypal"
          className="sr-only after:absolute after:inset-0"
        />
        <DIcons.Facebook className="opacity-60" size={20} aria-hidden="true" />
        <p className="text-xs font-medium leading-none text-foreground">
          Facebook
        </p>
      </label>
      {/* Apple Pay */}
      <label className="relative flex cursor-pointer flex-col items-center gap-3 rounded-lg border border-input px-2 py-3 text-center shadow-sm shadow-black/5 outline-offset-2 transition-colors has-[[data-state=checked]]:border-ring has-[[data-state=checked]]:bg-accent has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-ring/70">
        <RadioGroupItem
          id="radio-12-apple-pay"
          value="apple-pay"
          className="sr-only after:absolute after:inset-0"
        />
        <DIcons.Apple className="opacity-60" size={20} aria-hidden="true" />
        <p className="text-xs font-medium leading-none text-foreground">
          Apple
        </p>
      </label>
    </RadioGroup>
  );
}
