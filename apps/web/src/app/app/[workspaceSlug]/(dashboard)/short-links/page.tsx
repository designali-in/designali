import Link from "next/link";
import { Icons } from "@/components/icons";
import { LinkCount } from "@/src/components/dashboard/overview/link-count";
import PageTitle from "@/src/components/mdx/page-title";
import { AllLinkList } from "@/src/components/tools/links/link-list";
import { Button } from "@designali/ui/button";

export default function HomePage() {
  return (
    <main className="mt-40 px-6">
      <PageTitle
        title={"Short Links"}
        description={"Your all links generated visible here"}
      />
      <div className="flex flex-wrap items-center justify-center pb-10">
        <p className="text-sm text-muted-foreground">Total Created Links</p>
        <Icons.link strokeWidth={1} className="mx-3 h-5 w-5" />
        <div className="text-4xl font-semibold text-ali">
          <LinkCount />
        </div>
        <Link className="" href={"/tools"}>
          <Button variant="ghost">Go to generate tool</Button>
        </Link>
      </div>
      <div className="mx-auto max-w-3xl">
        <AllLinkList />
      </div>
    </main>
  );
}
