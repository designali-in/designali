import { ThemeWrapper } from "@/comp/common/theme-wrapper";

import "public/registry/themes.css";

import { Suspense } from "react";

export default function BlocksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense>
      <main className=" ">
        <ThemeWrapper>{children}</ThemeWrapper>
      </main>
    </Suspense>
  );
}
