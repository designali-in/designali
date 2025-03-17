  
import { Badge } from "@/components/ui/badge"; 
import { auth } from "@/src/lib/auth";
import { DIcons } from "dicons"; 

import { prisma } from "@/lib/db"; 
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"; 

export default async function AssetPage({
  params,
}: {
  params: { id: string };
}) {
  const session = await auth();
  const inspiration = await prisma.inspiration.findUnique({
    where: { id: params.id },
    include: {
      likes: true,
      tags: true,
       
    },
  });
   
if (!inspiration) {
  return <div>Inspiration not found</div>;
}

// Increment view count
await prisma.inspiration.update({
  where: { id: inspiration.id },
  data: { views: { increment: 1 } },
});

  return (
    <div className="container-wrapper mt-4 border-t rounded-t-3xl pb-0 p-6">
      <div className="flex items-center justify-between">
        <div className="mb-6 items-center gap-2 md:flex">
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
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold lg:text-4xl">
              {inspiration.title}
            </h1>
          </div>
        </div>
         
      </div>
      <Card>
        <CardHeader>
          <div className="flex flex-wrap items-center justify-between">
             
            <div className="flex items-center gap-4">
              <div className="flex gap-4 text-xs text-primary/70">
                <div className="flex gap-1">
                  <DIcons.Eye className="h-4 w-4" />
                  <p>{inspiration.views}</p>
                </div>
              </div>
               
              <div className="flex space-x-2">
                {session && session.user && inspiration.userId === session.user.id ? (
                  <>
                    <Button variant="outline" size="icon">
                      <a href={`/graphic/assets/${inspiration.id}/edit`}>
                        <DIcons.AiEditing className="h-4 w-4" />
                      </a>
                    </Button>
                    null
                  </>
                ) : null}
              </div>
            </div>
          </div>
        </CardHeader>
         
        <CardFooter className="grid items-center gap-3 md:flex md:justify-between">
          <div>
            {inspiration.description && (
              <p className="text-primary/70">{inspiration.description}</p>
            )}
          </div>
          <div className="grid items-center gap-3 md:flex md:justify-between">
            <div className="flex flex-wrap gap-2">
              {inspiration.tags.map((tag) => (
                <Badge
                  className="px-3 py-1 text-xs"
                  key={tag.id}
                  variant="secondary"
                >
                  {tag.name}
                </Badge>
              ))}
            </div>
            <p className="text-sm text-gray-500">
              Uploaded on {new Date(inspiration.createdAt).toLocaleDateString()}
            </p>
          </div>
        </CardFooter>
      </Card>
      <div>
        <h1 className="py-10 text-center font-semibold text-md md:text-xl">
          Similar Assets
        </h1>
         
      </div>
    </div>
  );
}
