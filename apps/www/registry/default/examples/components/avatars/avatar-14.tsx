import Image from "next/image";
import AvatarImg03 from "@/public/avatars/avatar_20.jpg";
import AvatarImg02 from "@/public/avatars/avatar_21.jpg";
import AvatarImg01 from "@/public/avatars/avatar_22.jpg";
import AvatarImg04 from "@/public/avatars/avatar_23.jpg";

export default function AvatarDemo() {
  return (
    <div className="flex -space-x-[0.6rem]">
      <Image
        className="rounded-full ring-2 ring-background"
        src={AvatarImg01}
        width={32}
        height={32}
        alt="Avatar 01"
      />
      <Image
        className="rounded-full ring-2 ring-background"
        src={AvatarImg02}
        width={32}
        height={32}
        alt="Avatar 02"
      />
      <Image
        className="rounded-full ring-2 ring-background"
        src={AvatarImg03}
        width={32}
        height={32}
        alt="Avatar 03"
      />
      <Image
        className="rounded-full ring-2 ring-background"
        src={AvatarImg04}
        width={32}
        height={32}
        alt="Avatar 04"
      />
    </div>
  );
}
