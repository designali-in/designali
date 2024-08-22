import type { ReactNode } from "react";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function MarketingLayout({ children }: RootLayoutProps) {
  return <main>{children}</main>;
}
