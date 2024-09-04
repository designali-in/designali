import { Suspense } from "react";
import AIConverter from "@/components/tools/aiconverter";
import { IconsGen } from "@/components/tools/icons-gen";
import WordCounter from "@/components/tools/wordcount";
import PageTitle from "@/src/components/mdx/page-title";
import { CustomLink } from "@/src/components/tools/links/custom-link";
import { CustomLinkButton } from "@/src/components/tools/links/custom-link-button";
import { LinkForm } from "@/src/components/tools/links/link-form";
import { LinkList } from "@/src/components/tools/links/link-list";
import { Loader } from "@designali/ui/loader";

export const metadata = {
  title: "Tools - Designali",
  description:
    "This section includes end-to-end guides for developing Next.js 13 apps.",
};

export default function HomePage() {
  return (
    <main className="mx-auto mt-20 max-w-7xl px-6 md:mt-40 xl:px-0">
      <PageTitle
        title="Tools"
        description={`You can use any without any cost.`}
      />
      <IconsGen />
      <div className="mx-auto flex max-w-xl flex-col items-center gap-4">
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
