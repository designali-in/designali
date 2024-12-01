import UserId from "@/comp/dashboard/app/user-id";
import { Chatbot } from "@/src/comp/common/chat";

import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export const metadata = {
  title: "Dashboard - Designali",
  description: "A design agency with a touch of magic.",
};

export default function Page() {
  return (
    <div className="w-full">
      <div className=" flex flex-col gap-4 p-4 pt-0">
        <div className=" grid gap-4  ">
          <UserId />
        </div>
        <div className="mx-auto mt-10 w-full max-w-4xl rounded-3xl border">
          <Chatbot />
        </div>

        <HoverCard>
          <HoverCardTrigger>
            <div className="absolute bottom-3 right-3 hidden md:block">
              <Button variant="outline" size="icon" icon="Info"></Button>
            </div>
          </HoverCardTrigger>
          <HoverCardContent align="end" className="w-60">
            <div className="flex justify-between space-x-4">
              <div className="space-y-1">
                <p className="text-sm">
                  The React Framework – created and maintained by @designali.
                </p>
                <div className="flex items-center pt-2">
                  <span className="text-xs text-muted-foreground">
                    Joined August 2024
                  </span>
                </div>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>
    </div>
  );
}
