import Image from "next/image";

import { Button } from "@/components/ui/button";

export default function ButtonDemo() {
  return (
    <Button className="rounded-full py-0 ps-0">
      <div className="flex aspect-square h-full p-1.5">
        <Image
          className="h-auto w-full rounded-full object-cover"
          src={"/ali.jpg"}
          alt="Profile image"
          width={24}
          height={24}
          aria-hidden="true"
        />
      </div>
      @aliimam
    </Button>
  );
}
