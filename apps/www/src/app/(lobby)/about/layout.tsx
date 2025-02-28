import { Suspense } from "react";

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata = {
  title: "About",
  description: "A design agency with a touch of magic.",
};

export default function MarketingLayout({ children }: RootLayoutProps) {
  return (
    <main>
      <Suspense>{children}</Suspense>
    </main>
  );
}
