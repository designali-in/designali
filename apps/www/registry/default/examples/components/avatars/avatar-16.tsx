import Image from "next/image";
import AvatarImg03 from "@/public/avatars/avatar_24.jpg";
import AvatarImg01 from "@/public/avatars/avatar_25.jpg";
import AvatarImg04 from "@/public/avatars/avatar_26.jpg";
import AvatarImg02 from "@/public/avatars/avatar_27.jpg";

export default function AvatarDemo() {
  return (
    <div className="flex -space-x-3">
      <Image
        className="rounded-full ring-2 ring-background"
        src={AvatarImg01}
        width={40}
        height={40}
        alt="Avatar 01"
      />
      <Image
        className="rounded-full ring-2 ring-background"
        src={AvatarImg02}
        width={40}
        height={40}
        alt="Avatar 02"
      />
      <Image
        className="rounded-full ring-2 ring-background"
        src={AvatarImg03}
        width={40}
        height={40}
        alt="Avatar 03"
      />
      <Image
        className="rounded-full ring-2 ring-background"
        src={AvatarImg04}
        width={40}
        height={40}
        alt="Avatar 04"
      />
    </div>
  );
}
