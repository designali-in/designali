// Dependencies: npm install dicons

import Image from "next/image";
import { ChevronDown } from "dicons";
import AvatarImg from "public/ali.jpeg";

import { Button } from "@/components/ui/button";

export default function Button18() {
  return (
    <Button variant="ghost" className="h-auto p-0 hover:bg-transparent">
      <Image
        className="rounded-full object-cover"
        src={AvatarImg}
        alt="Profile image"
        width={40}
        height={40}
        aria-hidden="true"
      />
      <ChevronDown className="ml-2 size-5" />
    </Button>
  );
}
