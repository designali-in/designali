import { Connect } from "@/components/common/connect";
import { FAQ } from "@/components/home/faq";
import { Services } from "@/components/services/services";
import PageTitle from "@/src/components/mdx/page-title";

export default function HomePage() {
  return (
    <main className="mx-auto mt-28 max-w-3xl px-6 md:max-w-5xl">
      <PageTitle
        title="Design Solutions"
        description={`The right price for you,  whoever you are`}
      />
      <Services />
      <FAQ />
      <Connect />
    </main>
  );
}
