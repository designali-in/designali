import Projects from "@/components/common/projects";
import Bento from "@/components/home/bento";
import CallToActionSection from "@/components/home/cta-section";
import Dash from "@/components/home/dash";
import Hero from "@/components/home/hero";
import { DBentoGrid } from "@/src/components/home/bento-grid";
import { Quote } from "@/src/components/home/quote";

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
      <Projects />
    </main>
  );
}
