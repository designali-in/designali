 
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
import { Button } from "@/src/components/ui/button";

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
    <div className="container-wrapper p-6 mt-4 border-t rounded-t-3xl">
      <main className=" ">
        <header className="mb-4 flex items-center justify-between space-y-4 md:mb-4 md:flex md:gap-2 md:space-y-0">
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
              {anime?.name}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant={"outline"} size={"sm"}>
              Like
            </Button>
          </div>
        </header>
        {children}
      </main>
    </div>
  );
}
