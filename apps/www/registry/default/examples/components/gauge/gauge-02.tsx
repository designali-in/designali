import { Gauge } from "@/components/ui/gauge";

export default function Gauge01() {
  return (
    <main className="flex flex-wrap items-center gap-6">
      <Gauge className="size-24" primary={"info"} value={90} />
      <Gauge
        strokeWidth={5}
        primary={"danger"}
        className="size-24"
        value={33}
      />
      <Gauge className="size-24" primary={"success"} value={15} />
      <Gauge className="size-24" secondary={"#000000"} value={8} />
      <Gauge className="size-24" secondary={"info"} value={10} />
      <Gauge className="size-24" secondary={"success"} value={80} />
      <Gauge className="size-24" secondary={"danger"} value={0} />
    </main>
  );
}
