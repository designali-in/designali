"use client";

import { useRef, useState } from "react";

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

export default function DialogDemo() {
  const [hasReadToBottom, setHasReadToBottom] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const content = contentRef.current;
    if (!content) return;

    const scrollPercentage =
      content.scrollTop / (content.scrollHeight - content.clientHeight);
    if (scrollPercentage >= 0.99 && !hasReadToBottom) {
      setHasReadToBottom(true);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Terms & Conditions</Button>
      </DialogTrigger>
      <DialogContent className="flex flex-col gap-0 p-0 sm:max-h-[min(640px,80vh)] sm:max-w-lg [&>button:last-child]:top-3.5">
        <DialogHeader className="contents space-y-0 text-left">
          <DialogTitle className="border-b border-border px-6 py-4 text-base">
            Terms & Conditions
          </DialogTitle>
          <div
            ref={contentRef}
            onScroll={handleScroll}
            className="overflow-y-auto"
          >
            <DialogDescription asChild>
              <div className="px-6 py-4">
                <div className="space-y-4 [&_strong]:font-semibold [&_strong]:text-foreground">
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <p>
                        <strong>Design Principles</strong>
                      </p>
                      <p>
                        Our platform adheres to core design principles of
                        clarity, simplicity, and consistency, ensuring an
                        intuitive and engaging user experience.
                      </p>
                    </div>

                    <div className="space-y-1">
                      <p>
                        <strong>Visual Identity</strong>
                      </p>
                      <p>
                        We maintain a cohesive visual identity through
                        thoughtful use of color, typography, and imagery,
                        creating a distinct and recognizable brand presence.
                      </p>
                    </div>

                    <div className="space-y-1">
                      <p>
                        <strong>Creative Freedom and Guidelines</strong>
                      </p>
                      <p>
                        While encouraging creative exploration, we provide clear
                        design guidelines to ensure consistency across projects
                        without stifling innovation.
                      </p>
                    </div>

                    <div className="space-y-1">
                      <p>
                        <strong>User-Centered Design</strong>
                      </p>
                      <p>
                        Every design decision is made with the user in mind,
                        prioritizing accessibility, usability, and an overall
                        delightful experience.
                      </p>
                    </div>

                    <div className="space-y-1">
                      <p>
                        <strong>Design Standards and Practices</strong>
                      </p>
                      <ul className="list-disc pl-6">
                        <li>
                          Maintain consistency in visual and interactive
                          elements
                        </li>
                        <li>Ensure accessibility for diverse audiences</li>
                        <li>
                          Adopt a mobile-first approach for responsive design
                        </li>
                        <li>
                          Follow industry best practices for intuitive
                          navigation
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-1">
                      <p>
                        <strong>Iterative Improvement</strong>
                      </p>
                      <p>
                        We believe in continuous refinement, using feedback and
                        data to evolve our designs and enhance user
                        satisfaction.
                      </p>
                    </div>

                    <div className="space-y-1">
                      <p>
                        <strong>Collaboration and Workflow</strong>
                      </p>
                      <p>
                        Effective collaboration between designers, developers,
                        and stakeholders is key to maintaining a seamless design
                        process and achieving creative excellence.
                      </p>
                    </div>

                    <div className="space-y-1">
                      <p>
                        <strong>Design Ethics</strong>
                      </p>
                      <p>
                        We are committed to ethical design, promoting
                        inclusivity, transparency, and respect for user privacy
                        and data protection.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </DialogDescription>
          </div>
        </DialogHeader>
        <DialogFooter className="border-t border-border px-6 py-4 sm:items-center">
          {!hasReadToBottom && (
            <span className="grow text-xs text-muted-foreground max-sm:text-center">
              Read all terms before accepting.
            </span>
          )}
          <DialogClose asChild>
            <Button type="button" variant="outline">
              Cancel
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button type="button" disabled={!hasReadToBottom}>
              I agree
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
