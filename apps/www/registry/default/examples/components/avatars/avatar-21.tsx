import Image from "next/image";
import AvatarImg03 from "@/public/avatars/avatar_13.jpg";
import AvatarImg02 from "@/public/avatars/avatar_14.jpg";
import AvatarImg01 from "@/public/avatars/avatar_15.jpg";
import AvatarImg04 from "@/public/avatars/avatar_16.jpg";

import { Button } from "@/components/ui/button";

export default function AvatarDemo() {
  return (
    <div className="flex items-center rounded-full bg-muted p-0.5">
      <div className="flex -space-x-3">
        <Image
          className="rounded-full ring-2 ring-muted"
          src={AvatarImg01}
          width={40}
          height={40}
          alt="Avatar 01"
        />
        <Image
          className="rounded-full ring-2 ring-muted"
          src={AvatarImg02}
          width={40}
          height={40}
          alt="Avatar 02"
        />
        <Image
          className="rounded-full ring-2 ring-muted"
          src={AvatarImg03}
          width={40}
          height={40}
          alt="Avatar 03"
        />
        <Image
          className="rounded-full ring-2 ring-muted"
          src={AvatarImg04}
          width={40}
          height={40}
          alt="Avatar 04"
        />
      </div>
      <Button
        variant="secondary"
        className="flex items-center justify-center rounded-full bg-transparent px-3 text-xs text-muted-foreground shadow-none hover:bg-transparent hover:text-foreground"
      >
        +3
      </Button>
    </div>
  );
}
