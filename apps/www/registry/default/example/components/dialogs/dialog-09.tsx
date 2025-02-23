// Dependencies: pnpm install lucide-react

import { DIcons } from "dicons";
import { Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

export default function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Newsletter</Button>
      </DialogTrigger>
      <DialogContent>
        <div className="mb-2 flex flex-col items-center gap-2">
          <div
            className="flex size-11 shrink-0 items-center justify-center rounded-full border border-border"
            aria-hidden="true"
          >
            <DIcons.Designali className="ml-1 h-5 w-5" />
          </div>
          <DialogHeader>
            <DialogTitle className="sm:text-center">
              Never miss an update
            </DialogTitle>
            <DialogDescription className="sm:text-center">
              Subscribe to receive news and special offers.
            </DialogDescription>
          </DialogHeader>
        </div>

        <form className="space-y-5">
          <div className="space-y-2">
            <div className="relative">
              <Input
                id="dialog-subscribe"
                className="peer ps-9"
                placeholder="contact@designali.in"
                type="email"
                aria-label="Email"
              />
              <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
                <Mail size={16} strokeWidth={2} aria-hidden="true" />
              </div>
            </div>
          </div>
          <Button type="button" className="w-full">
            Subscribe
          </Button>
        </form>

        <p className="text-center text-xs text-muted-foreground">
          By subscribing you agree to our{" "}
          <a className="underline hover:no-underline" href="#">
            Privacy Policy
          </a>
          .
        </p>
      </DialogContent>
    </Dialog>
  );
}
