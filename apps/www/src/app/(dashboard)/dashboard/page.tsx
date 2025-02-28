import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Chatbot } from "@/src/components/common/chat";

export const metadata = {
  title: "Dashboard",
  description: "A design agency with a touch of magic.",
};

export default function Page() {
  return (
    <div className="mx-auto max-w-3xl mt-20 rounded-xl border">
       <Chatbot/>
    </div>
  );
}
