import { Gallery } from "@/src/components/lobby/images/gallery";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Avegra } from "@/src/lib/fonts/fonts";
import { cn } from "@/src/lib/utils";

type Props = {
  params: {
    myParams: (string | undefined)[];
  };
};

export function generateMetadata({ params: { myParams } }: Props) {
  const topic = myParams?.[0] ?? "curated";
  const page = myParams?.[1] ?? "1";

  return {
    title: `${topic} - Page ${page}`,
  };
}
export default function SearchResults({ params: { myParams } }: Props) {
  const topic = myParams?.[0] ?? "curated";
  const page = myParams?.[1] ?? "1";

  return (
    <div className="container-wrapper p-6 border mt-4 border-b-0 rounded-t-3xl">
      <h3
        className={cn(
          Avegra.className,
          "z-20  justify-center bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text py-3 text-center text-4xl text-transparent dark:bg-gradient-to-r dark:from-slate-100 dark:via-slate-200 dark:to-slate-100 dark:bg-clip-text md:text-7xl"
        )}
      >
        Free Stock <span className="text-ali">Photos</span>
      </h3>
      <p className="mx-auto max-w-xl text-xs text-center">
        Unlimited download free stock photos, royalty free images & videos
        shared by creators.
      </p>
      <div className="my-10 flex justify-center">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/graphic">Graphic</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Images Results</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <Gallery topic={topic} page={page} />
    </div>
  );
}
