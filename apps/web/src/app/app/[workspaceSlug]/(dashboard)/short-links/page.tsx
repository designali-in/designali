import Link from "next/link";
import { Icons } from "@/comp/icons";
import { LinkCount } from "@/src/comp/dashboard/overview/link-count";
import PageTitle from "@/src/comp/mdx/page-title";
import { AllLinkList } from "@/src/comp/tools/links/link-list";
import Paginations from "@/src/comp/uis/pagination";
import { getAllLinks } from "@/src/server/actions/link";
import { Button } from "@designali/ui/button";

export default async function ShortLinks({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  const page = Number(searchParams.page) || 1;
  const links = await getAllLinks({
    page,
  });
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
      {links.totalPages > 0 && (
        <Paginations page={page} totalPages={links.totalPages} />
      )}
    </main>
  );
}
