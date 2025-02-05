import { Connect } from "@/comp/common/connect";
import CallToActionSection from "@/comp/marketing/agency/cta-section";
import Hero from "@/comp/marketing/agency/hero";
import Bento from "@/comp/marketing/home/bento";
import { FAQ } from "@/comp/marketing/home/faq";
import Pricing from "@/src/comp/marketing/agency/pricing";
import { DesignProcess } from "@/src/comp/marketing/agency/process";
import { Related, Services } from "@/src/comp/marketing/agency/services";

export const metadata = {
  title: "Agency - Designali",
  description: "A design agency with a touch of magic.",
};

export default function HomePage() {
  return (
    <div className=" ">
      <Hero />
      <Bento />
      <Pricing />
      <CallToActionSection />

      <main className="mx-auto md:max-w-7xl">
        <Services />
        <Related />
      </main>
      <main className="mx-auto px-6 md:max-w-7xl xl:px-0">
        <FAQ />
      </main>
      <Connect />
    </div>
  );
}
