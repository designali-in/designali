import Billing from "@/components/common/pricing";
import { FAQ } from "@/components/home/faq";

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
