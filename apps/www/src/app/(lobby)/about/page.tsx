import Image from "next/image"; 
import { Avegra } from "@/src/lib/fonts/fonts";
import { cn } from "@/src/lib/utils";
import { Plus } from "lucide-react";
import { BackgroundBeams } from "@/src/components/ui/backgrounds/background-beams";
import ImageZoom from "@/src/components/common/image-zoom";
import About from "@/src/components/lobby/about/about"; 
import Logos from "@/src/components/common/logos";
import { Connect } from "@/src/components/common/connect";
import { Experience } from "@/src/components/lobby/about/experience";
import { Glow } from "@/src/components/ui/backgrounds/glow";
import { AboutStats } from "@/src/components/lobby/home/stats";

export default function HomePage() {
  return (
    <main className="overflow-hidden relative">
      <div className="absolute inset-0 top-80 -z-10 h-[400px] w-full bg-transparent bg-[linear-gradient(to_right,#57534e_1px,transparent_1px),linear-gradient(to_bottom,#57534e_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] dark:bg-[linear-gradient(to_right,#a8a29e_1px,transparent_1px),linear-gradient(to_bottom,#a8a29e_1px,transparent_1px)]"></div>
      <div className="mt-20">
        <p className="text-ali text-center tracking-widest">FOUNDER</p>
        <BackgroundBeams>
          <div className="relative mx-auto mb-20 mt-10 flex h-[336px] max-w-[250px] flex-col items-start border border-dotted p-4 md:h-[28rem] md:max-w-sm">
            <Plus
              strokeWidth={0.5}
              className="text-aired absolute -left-4 -top-4 h-8 w-8"
            />
            <Plus
              strokeWidth={0.5}
              className="text-aired absolute -bottom-4 -left-4 h-8 w-8"
            />
            <Plus
              strokeWidth={0.5}
              className="text-aired absolute -right-4 -top-4 h-8 w-8"
            />
            <Plus
              strokeWidth={0.5}
              className="text-aired absolute -bottom-4 -right-4 h-8 w-8"
            />
            <ImageZoom>
              <Image
                src="/ali.jpg"
                alt="Your Image"
                height={700}
                width={700}
                className="h-[300px] object-cover md:h-[404px]"
              />
              <div className="relative -mt-14 bg-gradient-to-b from-black/0 to-black text-white md:-mt-24">
                <h1
                  className={cn(
                    Avegra.className,
                    "z-20 items-center text-center text-[40px] md:text-[70px]"
                  )}
                >
                  Ali Imam
                </h1>{" "}
              </div>
            </ImageZoom>
          </div>
          
        </BackgroundBeams>
      </div>
      <Glow className="top-[600px] -z-20"/>
      <div className="relative border-grid border-x bg-background border-t rounded-t-3xl container-wrapper overflow-hidden">
        <About />
        <AboutStats />
        <Experience />
        <h1 className="my-6 mt-12 text-center text-xs font-semibold uppercase tracking-[.3em] text-slate-400">
          Worked with Brands Like
        </h1>
        <Logos />
        <Connect />
      </div>
    </main>
  );
}
