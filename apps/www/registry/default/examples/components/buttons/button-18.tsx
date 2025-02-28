// Dependencies: pnpm install dicons

import Image from "next/image";
import { ChevronDown } from "dicons";

import { Button } from "@/components/ui/button";

export default function ButtonDemo() {
  return (
    <Button variant="ghost" className="h-auto p-0 hover:bg-transparent">
      <Image
        className="aspect-square rounded-full object-cover"
        src={"/ali.jpg"}
        alt="Profile image"
        width={40}
        height={40}
        aria-hidden="true"
      />
      <ChevronDown
        strokeWidth={1}
        className="h-4 w-4 opacity-60"
        aria-hidden="true"
      />
    </Button>
  );
}
