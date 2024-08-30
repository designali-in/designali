import Billing from "@/components/common/pricing";
import { FAQ } from "@/components/home/faq";

export const metadata = {
  title: "Pricing - Designali",
  description:
    "This section includes end-to-end guides for developing Next.js 13 apps.",
};

export default function HomePage() {
  return (
    <main className="mt-14">
      <Billing />
      <div className="px-6">
        <FAQ />
      </div>
    </main>
  );
}
