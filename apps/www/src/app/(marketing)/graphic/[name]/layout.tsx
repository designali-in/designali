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
    <div className="mx-auto my-20 max-w-7xl px-6 xl:px-0">
      <main className=" ">
        <header className="flex h-16 items-center gap-2">
          <div className="flex items-center gap-2 ">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="/">
                    <DIcons.Designali fill="#f50537" className="h-5 w-5" />
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="/graphic">Graphic</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
              </BreadcrumbList>
            </Breadcrumb>
            <div className="flex flex-col">
              <h1 className="  text-4xl  font-semibold lg:text-4xl">
                {anime.name}
              </h1>
            </div>
          </div>
        </header>
        {children}
      </main>
    </div>
  );
}
