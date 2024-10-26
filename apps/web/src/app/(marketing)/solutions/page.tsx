import { Connect } from "@/comp/common/connect";
import { FAQ } from "@/comp/home/faq";
import PageTitle from "@/src/comp/mdx/page-title";
import { DesignProcess } from "@/src/comp/solutions/process";
import { Related, Services } from "@/src/comp/solutions/services";

export const metadata = {
  title: "Solutions - Designali",
  description: "A design agency with a touch of magic.",
};

export default function HomePage() {
  return (
    <div className="mt-28 px-6">
      <PageTitle
        title="Design Solutions"
        description={`The right price for you,  whoever you are`}
      />
      <DesignProcess />
      <main className="mx-auto md:max-w-7xl">
        <Services />
        <Related />
        <FAQ />
        <Connect />
      </main>
    </div>
  );
}
