"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import randomColor from "randomcolor";

export default function Page() {
  const randomColorx = randomColor({
    hue: "random",
    luminosity: "random",
    count: 5,
  });

  const routeParam = randomColorx
    ?.map((color: string) => color.slice(1))
    .join("-");

  console.log(routeParam);

  const navigate = useRouter();
  useEffect(() => {
    setTimeout(() => {
      navigate.replace(`/products/colors/${routeParam}`);
    }, 3000);
  }, [navigate]);
  return (
    <div className="flex h-screen w-screen items-center justify-center space-x-4">
      <div className="h-14 w-14 animate-spin rounded-full border-2 border-gray-300 border-t-black" />
    </div>
  );
}
