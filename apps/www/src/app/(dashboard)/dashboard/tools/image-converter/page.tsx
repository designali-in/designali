import AIConverter from "@/comp/tools/aiconverter";

export const metadata = {
  title: "Image Converter - Designali",
  description: "A design agency with a touch of magic.",
};

export default function HomePage() {
  return (
    <main className="p-6">
      <div className="">
        <h1 className="py-4 text-2xl font-semibold">Image Converter</h1>
        <AIConverter />
      </div>
    </main>
  );
}
