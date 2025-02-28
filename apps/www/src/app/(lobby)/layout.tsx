import { Footer } from "@/src/components/layout/footer"; 
import NowPlaying from "@/src/components/layout/footer/now-playing";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div data-wrapper="" className="border-grid flex flex-1 flex-col"> 
        <main className="flex flex-1 flex-col">{children}</main>
        <Footer/>
        <NowPlaying />
    </div>
  );
}
