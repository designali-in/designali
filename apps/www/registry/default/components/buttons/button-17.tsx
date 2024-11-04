import Image from "next/image";

import { Button } from "@/components/ui/button";

import AvatarImg from "/public/ali.jpeg";

export default function Button17() {
  return (
    <Button className="rounded-full p-0">
      <div className="flex aspect-square h-full p-1">
        <Image
          className="h-auto w-full rounded-full object-cover"
          src={AvatarImg}
          alt="Profile image"
          width={24}
          height={24}
          aria-hidden="true"
        />
      </div>
      <span className="mr-2">@georgelucas</span>
    </Button>
  );
}
