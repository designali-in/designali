import { Gauge } from "@/components/ui/gauge";

export default function Gauge01() {
  return (
    <main className="flex flex-wrap items-center gap-6">
      <Gauge className="size-24" value={58} />
    </main>
  );
}
