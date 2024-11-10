import WordCounter from "@/comp/tools/wordcount";

export const metadata = {
  title: "Word Counter - Designali",
  description: "A design agency with a touch of magic.",
};

export default function HomePage() {
  return (
    <main className="p-6">
      <div className="">
        <h1 className="py-4 text-2xl font-semibold">Word Counter</h1>
        <WordCounter />
      </div>
    </main>
  );
}
