"use client";

import React from "react";
import { usePathname } from "next/navigation";

import { Separator } from "@/components/ui/separator";

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

export default function Users({ children }: ProtectedLayoutProps) {
  const pathname = usePathname();
  return (
    <div className="">
      {children}
    </div>
  );
}
