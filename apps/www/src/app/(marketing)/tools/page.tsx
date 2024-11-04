import { Suspense } from "react";
import AIConverter from "@/comp/tools/aiconverter";
import { IconsGen } from "@/comp/tools/icons-gen";
import WordCounter from "@/comp/tools/wordcount";
import PageTitle from "@/src/comp/mdx/page-title"; 

export const metadata = {
  title: "Tools - Designali",
  description: "A design agency with a touch of magic.",
};

export default function HomePage() {
  return (
    <main className="mx-auto mt-20 max-w-7xl px-6 md:mt-40 xl:px-0">
      <PageTitle
        title="Tools"
        description={`You can use any without any cost.`}
      />

      <IconsGen />
      
      <AIConverter />
      <WordCounter />
    </main>
  );
}
