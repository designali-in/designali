// Dependencies: pnpm install lucide-react

"use client";

import { useState } from "react";
import { CircleAlert } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const PROJECT_NAME = "Designali";

export default function DialogDemo() {
  const [inputValue, setInputValue] = useState("");

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Delete project</Button>
      </DialogTrigger>
      <DialogContent>
        <div className="flex flex-col items-center gap-2">
          <div
            className="flex size-9 shrink-0 items-center justify-center rounded-full border border-border"
            aria-hidden="true"
          >
            <CircleAlert className="opacity-80" size={16} strokeWidth={2} />
          </div>
          <DialogHeader>
            <DialogTitle className="sm:text-center">
              Final Design Approval
            </DialogTitle>
            <DialogDescription className="sm:text-center">
              This action will finalize your design. To confirm, please enter
              the project name{" "}
              <span className="text-foreground">Designali</span>.
            </DialogDescription>
          </DialogHeader>
        </div>

        <form className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="project-name">Project name</Label>
            <Input
              id="project-name"
              type="text"
              placeholder="Type Designali to confirm"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="outline" className="flex-1">
                Cancel
              </Button>
            </DialogClose>
            <Button
              type="button"
              className="flex-1"
              disabled={inputValue !== PROJECT_NAME}
            >
              Approve
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
