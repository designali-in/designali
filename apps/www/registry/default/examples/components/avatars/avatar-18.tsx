import Image from "next/image";
import AvatarImg03 from "@/public/avatars/avatar_1.jpg";
import AvatarImg02 from "@/public/avatars/avatar_2.jpg";
import AvatarImg01 from "@/public/avatars/avatar_3.jpg";
import AvatarImg04 from "@/public/avatars/avatar_4.jpg";

export default function AvatarDemo() {
  return (
    <div className="flex -space-x-[1.2rem]">
      <Image
        className="rounded-full ring-2 ring-background"
        src={AvatarImg01}
        width={64}
        height={64}
        alt="Avatar 01"
      />
      <Image
        className="rounded-full ring-2 ring-background"
        src={AvatarImg02}
        width={64}
        height={64}
        alt="Avatar 02"
      />
      <Image
        className="rounded-full ring-2 ring-background"
        src={AvatarImg03}
        width={64}
        height={64}
        alt="Avatar 03"
      />
      <Image
        className="rounded-full ring-2 ring-background"
        src={AvatarImg04}
        width={64}
        height={64}
        alt="Avatar 04"
      />
    </div>
  );
}
