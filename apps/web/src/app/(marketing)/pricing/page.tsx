import Billing from "@/comp/common/pricing";
import { FAQ } from "@/comp/home/faq";

export const metadata = {
  title: "Pricing - Designali",
  description: "A design agency with a touch of magic.",
};

export default function HomePage() {
  return (
    <main className="mt-14">
      <Billing />
      <div className="mx-auto max-w-4xl px-6">
        <FAQ />
      </div>
    </main>
  );
}
