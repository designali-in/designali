import { Suspense } from "react";
import AIConverter from "@/comp/tools/aiconverter";
import { IconsGen } from "@/comp/tools/icons-gen";
import WordCounter from "@/comp/tools/wordcount";
import PageTitle from "@/src/comp/mdx/page-title";
import { CustomLink } from "@/src/comp/tools/links/custom-link";
import { CustomLinkButton } from "@/src/comp/tools/links/custom-link-button";
import { LinkForm } from "@/src/comp/tools/links/link-form";
import { LinkList } from "@/src/comp/tools/links/link-list";
import { Loader } from "@designali/ui/loader";

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
      <div
        id="short-links"
        className="mx-auto flex max-w-xl flex-col items-center gap-4"
      >
        <p className="lg:text-md my-6 text-center text-xs font-light uppercase tracking-widest text-slate-600 dark:text-slate-400">
          AI Short Links & QR Code Generator
        </p>
        <LinkForm
          renderCustomLink={
            <Suspense fallback={<CustomLinkButton disabled />}>
              <CustomLink />
            </Suspense>
          }
        />
        <Suspense fallback={<Loader size="4xl" className="my-20" />}>
          <LinkList />
        </Suspense>
      </div>
      <AIConverter />
      <WordCounter />
    </main>
  );
}
