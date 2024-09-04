import { Connect } from "@/components/common/connect";
import { FAQ } from "@/components/home/faq";
import PageTitle from "@/src/components/mdx/page-title";
import { DesignProcess } from "@/src/components/solutions/process";
import { Related, Services } from "@/src/components/solutions/services";

export const metadata = {
  title: "Solutions - Designali",
  description:
    "This section includes end-to-end guides for developing Next.js 13 apps.",
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
