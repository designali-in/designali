// Dependencies: pnpm install @remixicon/react

import { DIcons } from "dicons";

import { Button } from "@/components/ui/button";

export default function ButtonDemo() {
  return (
    <div className="flex flex-col gap-2">
      <Button variant="outline">
        <DIcons.Instagram
          className="me-3 text-[#DB4437] dark:text-white/60"
          size={16}
          aria-hidden="true"
        />
        Login with Google
      </Button>
      <Button variant="outline">
        <DIcons.X
          className="me-3 text-[#14171a] dark:text-white/60"
          size={16}
          aria-hidden="true"
        />
        Login with X
      </Button>
      <Button variant="outline">
        <DIcons.Facebook
          className="me-3 text-[#1877f2] dark:text-white/60"
          size={16}
          aria-hidden="true"
        />
        Login with Facebook
      </Button>
      <Button variant="outline">
        <DIcons.Threads
          className="me-3 text-[#333333] dark:text-white/60"
          size={16}
          aria-hidden="true"
        />
        Login with GitHub
      </Button>
    </div>
  );
}
