import { Connect } from "@/components/common/connect";
import { FAQ } from "@/components/home/faq";
import { Related, Services } from "@/components/services/services";
import PageTitle from "@/src/components/mdx/page-title";

export default function HomePage() {
  return (
    <div>
      <main className="mx-auto mt-28 max-w-3xl px-6 md:max-w-6xl">
        <PageTitle
          title="Design Solutions"
          description={`The right price for you,  whoever you are`}
        />
        <Services />
        <Related />
        <FAQ />
        <Connect />
      </main>
    </div>
  );
}
