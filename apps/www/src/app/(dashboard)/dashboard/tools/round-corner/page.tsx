import { RoundedTool } from "@/src/comp/tools/rounded-tool";

export const metadata = {
  title: "Round Corner - Designali",
  description: "A design agency with a touch of magic.",
};

export default function HomePage() {
  return (
    <main className="p-6">
      <div className="">
        <h1 className="py-4 text-2xl font-semibold">Round Corner</h1>
        <RoundedTool />
      </div>
    </main>
  );
}
