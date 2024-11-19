import { UpdatesToolbar } from "@/src/comp/common/shate-toolbar";
import { LikeButtonIcon } from "@/src/comp/uis/like-button";
import { formatUrl } from "@/src/lib/utils";
import { DIcons } from "dicons";

import { prisma } from "@/lib/db";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface ProtectedLayoutProps {
  params: {
    name: string;
  };
  children: React.ReactNode;
}

export default async function Graphic({
  children,
  params,
}: ProtectedLayoutProps) {
  const { name: rawName } = params;
  const name = formatUrl(rawName, true);

  const anime = await prisma.graphic.findUnique({
    where: {
      name,
    },
    include: {
      rating: true,
    },
  });

  return (
    <div className="mx-auto my-24 max-w-7xl px-6 xl:px-0">
      <main className=" ">
        <header className="mb-4 flex items-center justify-between space-y-4 md:mb-0 md:flex md:gap-2 md:space-y-0">
          <div className="items-center  gap-2 md:flex ">
            <Breadcrumb className="mb-3 md:mb-0">
              <BreadcrumbList>
                <BreadcrumbItem className=" ">
                  <BreadcrumbLink href="/">
                    <DIcons.Designali fill="#f50537" className="h-5 w-5" />
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/graphic">Graphic</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
              </BreadcrumbList>
            </Breadcrumb>
            <div className="flex  items-center justify-between">
              <h1 className=" text-2xl font-semibold lg:text-4xl">
                {anime.name}
              </h1>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <LikeButtonIcon slug={name} />
            <UpdatesToolbar posts={""} />
          </div>
        </header>
        {children}
      </main>
    </div>
  );
}
