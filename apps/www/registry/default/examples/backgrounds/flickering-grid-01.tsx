import FlickeringGrid from "@/components/ui/backgrounds/flickering-grid";

export default function FlickeringGrid01() {
  return (
    <div className="relative h-[500px] w-full overflow-hidden rounded-lg border bg-background">
      <FlickeringGrid
        className="absolute inset-0 -z-0 size-full"
        squareSize={2}
        gridGap={4}
        color="#f50537"
        maxOpacity={0.5}
        flickerChance={0.1}
        height={800}
        width={1500}
      />
    </div>
  );
}
