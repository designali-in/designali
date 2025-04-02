import { Gauge } from "@/components/ui/gauge";

export default function Gauge01() {
  return (
    <main className="flex flex-wrap items-center gap-6">
      <Gauge className="size-8" primary={"#ef4444"} value={59} />
      <Gauge className="size-12" primary={"#a855f7"} value={21} />
      <Gauge className="size-20" primary={"#22c55e"} value={88} />
    </main>
  );
}
