import { SVGTool } from "@/src/comp/tools/svg-tool";

export const metadata = {
  title: "SVG to PNG - Designali",
  description: "A design agency with a touch of magic.",
};

export default function HomePage() {
  return (
    <main className="p-6">
      <div className="">
        <h1 className="py-4 text-2xl font-semibold">SVG to PNG</h1>
        <SVGTool />
      </div>
    </main>
  );
}
