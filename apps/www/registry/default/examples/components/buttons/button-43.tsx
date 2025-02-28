// Dependencies: pnpm install @remixicon/react

import { DIcons } from "dicons";

import { Button } from "@/components/ui/button";

export default function ButtonDemo() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button
        className="flex-1"
        variant="outline"
        aria-label="Login with Google"
        size="icon"
      >
        <DIcons.Behance
          className="text-[#DB4437] dark:text-primary"
          size={16}
          aria-hidden="true"
        />
      </Button>
      <Button
        className="flex-1"
        variant="outline"
        aria-label="Login with Facebook"
        size="icon"
      >
        <DIcons.YouTube
          className="text-[#1877f2] dark:text-primary"
          size={16}
          aria-hidden="true"
        />
      </Button>
      <Button
        className="flex-1"
        variant="outline"
        aria-label="Login with X"
        size="icon"
      >
        <DIcons.X
          className="text-[#14171a] dark:text-primary"
          size={16}
          aria-hidden="true"
        />
      </Button>
      <Button
        className="flex-1"
        variant="outline"
        aria-label="Login with GitHub"
        size="icon"
      >
        <DIcons.Instagram
          className="text-black dark:text-primary"
          size={16}
          aria-hidden="true"
        />
      </Button>
    </div>
  );
}
