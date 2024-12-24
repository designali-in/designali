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
      </main>
    </div>
  );
}
