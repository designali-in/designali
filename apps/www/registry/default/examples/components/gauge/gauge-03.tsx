import { Gauge } from "@/components/ui/gauge";

export default function Gauge01() {
  return (
    <main className="flex items-center gap-6">
      <Gauge
        className="size-48"
        primary={"success"}
        gapPercent={2}
        strokeWidth={5}
        value={50}
      />
    </main>
  );
}
