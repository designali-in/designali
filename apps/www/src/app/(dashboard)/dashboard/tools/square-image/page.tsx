import { SquareTool } from "@/src/comp/tools/square-tool";

export const metadata = {
  title: "Square Image - Designali",
  description: "A design agency with a touch of magic.",
};

export default function HomePage() {
  return (
    <main className="p-6">
      <div className="">
        <h1 className="py-4 text-2xl font-semibold">Square Image</h1>
        <SquareTool />
      </div>
    </main>
  );
}
