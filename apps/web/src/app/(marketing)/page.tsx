import Projects from "@/comp/common/projects";
import Bento from "@/comp/home/bento";
import CallToActionSection from "@/comp/home/cta-section";
import Dash from "@/comp/home/dash";
import Hero from "@/comp/home/hero";
import { InstagramFeed } from "@/src/comp/common/insta";
import { DBentoGrid } from "@/src/comp/home/bento-grid";
import { Quote } from "@/src/comp/home/quote";

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
