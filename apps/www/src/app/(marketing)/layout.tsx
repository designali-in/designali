import Image from "next/image";
import { Footer } from "@/comp/marketing/layout/footer";
import NowPlaying from "@/comp/marketing/layout/footer/now-playing";
import { Header } from "@/comp/marketing/layout/header";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="">
      <main className="mx-auto flex-1 overflow-hidden">
        <Header />
        {children}
        <Footer />
        <NowPlaying />

        <Image
          width={1512}
          height={550}
          className="absolute left-1/2 top-0 -z-10 -translate-x-1/2"
          src="/images/gradient-background-top.png"
          alt=""
          role="presentation"
          priority
        />
      </main>
    </div>
  );
}
