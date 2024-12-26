// Dependencies: pnpm install lucide-react

import { UserRound } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function AvatarDemo() {
  return (
    <Avatar>
      <AvatarFallback>
        <UserRound
          size={16}
          strokeWidth={2}
          className="opacity-60"
          aria-hidden="true"
        />
      </AvatarFallback>
    </Avatar>
  );
}
