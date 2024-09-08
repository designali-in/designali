import type { ValidIcon } from "@/components/icons";
import type { ReactNode } from "react";
import { Icons } from "@/components/icons";
import { cn } from "@designali/ui";

export function TimelineContainer({ children }: { children: ReactNode }) {
  return (
    // first:md:order-2 does not work
    <div className="mx-auto flex max-w-md flex-col justify-center gap-3 md:order-2">
      {children}
    </div>
  );
}

export function TimelineEvent({
  label,
  message,
  icon,
  isLast = false,
}: Event & {
  isLast?: boolean;
}) {
  const Icon = Icons[icon.name];
  return (
    <div className="group relative -m-2 flex gap-4 border border-transparent p-2">
      <div className="relative">
        <div
          className={cn(
            "rounded-full border bg-background p-2",
            icon.borderColor,
          )}
        >
          <Icon className={cn("h-4 w-4", icon.textColor)} />
        </div>
        {!isLast ? (
          <div className="absolute inset-x-0 mx-auto h-full w-[2px] bg-muted" />
        ) : null}
      </div>
      <div className="mt-1 flex flex-1 flex-col gap-1">
        <div className="flex items-center justify-between gap-4">
          <p className="text-lg font-semibold">{label}</p>
        </div>
        <p className="text-xs text-muted-foreground">{message}</p>
      </div>
    </div>
  );
}

export function Timeline() {
  return (
    <div className="w-3xl">
      <TimelineContainer>
        {timeline.map((event, i) => (
          <TimelineEvent
            key={event.message}
            isLast={i === timeline.length - 1}
            {...event}
          />
        ))}
      </TimelineContainer>
    </div>
  );
}

interface Event {
  label: string;
  message: string;
  icon: {
    name: ValidIcon;
    textColor: string;
    borderColor: string;
  };
}

const timeline = [
  {
    label: "Choose Your Design",
    message:
      "Browse and select a design that fits your needs, then access your personalized dashboard.",
    icon: {
      name: "shapes",
      textColor: "text-orange-500",
      borderColor: "border-orange-500/40",
    },
  },
  {
    label: "Provide Your Brief",
    message: "Share your design preferences and requirements with us.",
    icon: {
      name: "send",
      textColor: "text-amber-500",
      borderColor: "border-amber-500/40",
    },
  },
  {
    label: "Receive Your Designs",
    message: "Get your initial designs within 48 hours.",
    icon: {
      name: "checkcheck",
      textColor: "text-blue-500",
      borderColor: "border-blue-500/40",
    },
  },
  {
    label: "Request Revisions",
    message:
      "We’re committed to perfection—request as many revisions as needed until you’re satisfied.",
    icon: {
      name: "repeat",
      textColor: "text-green-500",
      borderColor: "border-green-500/40",
    },
  },
  {
    label: "Get Final Files",
    message: "Once approved, we’ll deliver the final files to you.",
    icon: {
      name: "check",
      textColor: "text-green-500",
      borderColor: "border-green-500/40",
    },
  },
] satisfies Event[];
