"use client";

import { useState } from "react";
import { Button } from "@designali/ui/button";
import { toast } from "@designali/ui/toaster";
import { Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";

import { Icons } from "../../icons";
import { subscribeAction } from "./subscribe-action";

function SubmitButton() {
  const { pending } = useFormStatus();

  if (pending) {
    return (
      <div className="absolute right-0 top-1">
        <Loader2 className="absolute right-2 top-2.5 mr-3 h-4 w-4 animate-spin text-base" />
      </div>
    );
  }

  return (
    <Button
      size="sm"
      variant="default"
      type="submit"
      className="absolute right-2 top-2 z-10"
    >
      Subscribe
    </Button>
  );
}

interface Props {
  group: string;
}

export function SubscribeInput({ group }: Props) {
  const [isSubmitted, setSubmitted] = useState(false);

  return (
    <div>
      <div className="mt-10 flex justify-center">
        {isSubmitted ? (
          <div className="flex justify-center gap-2">
            <Button>
              <p>Subscribed</p>
              <Icons.check className="h-4 w-4" />
            </Button>
          </div>
        ) : (
          <form
            action={async (formData) => {
              setSubmitted(true);
              await subscribeAction(formData, group);
              toast("♥️ Thank you for subscribe");
              setTimeout(() => {
                setSubmitted(false);
              }, 5000);
            }}
          >
            <fieldset className="relative">
              <input
                placeholder="Enter your email"
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                aria-label="Email address"
                required
                className="font-sm h-12 w-[360px] rounded-full border border-border bg-transparent px-6 py-1 placeholder-slate-400 outline-none dark:placeholder-slate-600"
              />
              <SubmitButton />
            </fieldset>
          </form>
        )}
      </div>
    </div>
  );
}
