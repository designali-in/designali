import AdBanner from "@/src/components/common/AdBanner";
import Image from "next/image";
import ClientLogos from "@/src/components/common/client-logos";
import { Connect } from "@/src/components/common/connect";
import { InstagramFeed } from "@/src/components/common/insta";
import { NewsletterSignUpForm } from "@/src/components/forms/newsletter-signup-form";
import { DBentoGrid } from "@/src/components/lobby/home/bento-grid";
import Hero from "@/src/components/lobby/home/hero";
import { Quote } from "@/src/components/lobby/home/quote";
import { CardsDemo } from "@/src/components/lobby/home/component-demos";
import { Glow } from "@/src/components/ui/backgrounds/glow";
import BrowseAssetsLobby from "@/src/components/lobby/home/asset-grid-lobby";
import { GalleryHome } from "@/src/components/lobby/images/gallery";
import { Separator } from "@/src/components/ui/separator";
import BrowseInspirationLobby from "@/src/components/lobby/home/inspiration-grid-lobby"; 

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      <div className="absolute inset-0 max-md:hidden top-[400px] -z-10 h-[400px] w-full bg-transparent bg-[linear-gradient(to_right,#57534e_1px,transparent_1px),linear-gradient(to_bottom,#57534e_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] dark:bg-[linear-gradient(to_right,#a8a29e_1px,transparent_1px),linear-gradient(to_bottom,#a8a29e_1px,transparent_1px)]"></div>
      <Hero /> 
      <ClientLogos />
      <div className="relative border-grid rounded-t-3xl rounded-b-3xl border container-wrapper overflow-hidden my-10">
        <DBentoGrid />
        <Quote />
        <BrowseAssetsLobby />
        <BrowseInspirationLobby />
      </div>
      <div className="px-6 xl:px-0">
        <InstagramFeed />
      </div>
      <div className="relative">
        <div className="absolute inset-0 max-md:hidden top-[100px] -z-10 h-[400px] w-full bg-transparent bg-[linear-gradient(to_right,#57534e_1px,transparent_1px),linear-gradient(to_bottom,#57534e_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] dark:bg-[linear-gradient(to_right,#a8a29e_1px,transparent_1px),linear-gradient(to_bottom,#a8a29e_1px,transparent_1px)]"></div>

        <Glow variant="top" className="-z-20" />
        <div className="relative bg-background border-grid rounded-t-3xl border-t container-wrapper overflow-hidden mt-10">
          <CardsDemo />
          <Separator />
          <GalleryHome />
          <Separator />
          <div className="">
            <AdBanner
              dataAdFormat="auto"
              dataFullWidthResponsive={true}
              dataAdSlot="5723796123"
            />
          </div>
          <NewsletterSignUpForm />
          <Connect />
        </div>
      </div>
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
  );
}
