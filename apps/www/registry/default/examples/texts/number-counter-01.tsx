import NumberCounter from "@/components/ui/texts/number-counter";

export default function NumberTickerDemo() {
  return (
    <p className="whitespace-pre-wrap text-8xl font-bold tracking-tighter ">
      <NumberCounter value={100} />
    </p>
  );
}
