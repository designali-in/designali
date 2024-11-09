import UserId from "@/comp/dashboard/app/user-id";
import { Chatbot } from "@/src/comp/common/chat";

import { Button } from "@/components/ui/button";

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
        <div className="absolute bottom-3 right-3 hidden md:block">
          <Button variant="outline" size="icon" icon="Plus"></Button>
        </div>
      </div>
    </div>
  );
}
