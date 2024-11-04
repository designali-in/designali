import Projects from "@/comp/common/projects";
import Bento from "@/comp/marketing/home/bento";
import CallToActionSection from "@/comp/marketing/home/cta-section";
import Dash from "@/comp/marketing/home/dash";
import Hero from "@/comp/marketing/home/hero";
import { InstagramFeed } from "@/src/comp/common/insta";
import { DBentoGrid } from "@/src/comp/marketing/home/bento-grid";
import { Quote } from "@/src/comp/marketing/home/quote";

export default function HomePage() {
  // You can await this here if you don't want to show Suspense fallback below

  return (
    <main className="">
      <Hero />
      <Bento />
      <Dash />
      <CallToActionSection />
      <Quote />
      <DBentoGrid />
      <div className="px-6 xl:px-0">
        <InstagramFeed />
      </div>
      <Projects />
    </main>
  );
}
