import { Connect } from "@/components/common/connect";
import CallToActionSection from "@/components/lobby/agency/cta-section";
import { CTASection } from "@/components/lobby/agency/cta-section";
import { FAQ } from "@/components/lobby/agency/faq";
import ClientLogos from "@/components/common/client-logos";
import Hero from "@/components/lobby/agency/hero";
import Pricing from "@/components/lobby/agency/pricing";
import { Related, Services } from "@/components/lobby/agency/services";
import { Quote } from "@/components/lobby/home/quote";

export const metadata = {
  title: "Agency",
  description: "A design agency with a touch of magic.",
};

export default function HomePage() {
  return (
    <div className="">
      <main className="container relative max-w-[1100px] px-2 py-4 z-[2] lg:py-8">
        <div
          style={{
            background:
              "repeating-linear-gradient(to bottom, transparent, color-mix(in oklab, var(--color-fd-primary) 1%, transparent) 500px, transparent 1000px)",
          }}
        >
          <Hero />
        </div>
        <ClientLogos />
      </main>
      <Pricing />
      <CallToActionSection />
      <div className="container">
        <div className="relative rounded-t-3xl mt-6 overflow-hidden border-x border-t pb-16">
          <CTASection />
          <Quote />
          <Services />
          <Related />
          <FAQ />
          <Connect />
        </div>
      </div>
    </div>
  );
}
