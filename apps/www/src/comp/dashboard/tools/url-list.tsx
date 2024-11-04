"use client";

import type { FormType, ShortUrlFormData } from "@/types/urls";
import type { User } from "@prisma/client";
import { useState } from "react";
import Link from "next/link";
import { UrlForm } from "@/comp/forms/url-form"; 
import { Button } from "@designali/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@designali/ui/card";
import { Skeleton } from "@designali/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@designali/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@designali/ui/tooltip";
import { LineChart, PenLine, RefreshCwIcon } from "lucide-react";
import useSWR, { useSWRConfig } from "swr";

import site from "@/config/site";
import {
  cn,
  expirationTime,
  fetcher,
  removeUrlSuffix,
  timeAgo,
} from "@/lib/utils";
import { CopyButton } from "../../uis/copy-button";

export interface UrlListProps {
  user: Pick<User, "id" | "name">;
  action: string;
}

function TableColumnSekleton() {
  return (
    <div>
    <TableRow className="grid grid-cols-3 items-center sm:grid-cols-8">
      <TableCell className="col-span-1">
        <Skeleton className="h-5 w-20" />
      </TableCell>
      <TableCell className="col-span-1 sm:col-span-2">
        <Skeleton className="h-5 w-20" />
      </TableCell>
      <TableCell className="col-span-1 hidden justify-center sm:flex">
        <Skeleton className="h-5 w-16" />
      </TableCell>
      <TableCell className="col-span-1 hidden justify-center sm:flex">
        <Skeleton className="h-5 w-16" />
      </TableCell>
      <TableCell className="col-span-1 hidden justify-center sm:flex">
        <Skeleton className="h-5 w-16" />
      </TableCell>
      <TableCell className="col-span-1 hidden justify-center sm:flex">
        <Skeleton className="h-5 w-16" />
      </TableCell>
      <TableCell className="col-span-1 flex justify-center">
        <Skeleton className="h-5 w-16" />
      </TableCell>
    </TableRow>
    </div>
  );
}

export default function UserUrlsList({ user, action }: UrlListProps) {
  const [isShowForm, setShowForm] = useState(false);
  const [formType, setFormType] = useState<FormType>("add");
  const [currentEditUrl, setCurrentEditUrl] = useState<ShortUrlFormData | null>(
    null,
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [isShowStats, setShowStats] = useState(false);
  const [selectedUrlId, setSelectedUrlId] = useState("");

  const { mutate } = useSWRConfig();
  const { data, error, isLoading } = useSWR<{
    total: number;
    list: ShortUrlFormData[];
  }>(`${action}?page=${currentPage}&size=${pageSize}`, fetcher, {
    revalidateOnFocus: false,
  });

  const handleRefresh = () => {
    mutate(`${action}?page=${currentPage}&size=${pageSize}`, undefined);
  };

  return (
    <>
    <div className="mx-auto max-w-7xl">
      <Card className="xl:col-span-2">
        <CardHeader className="flex flex-row items-center">
          {action.includes("/admin") ? (
            <CardDescription className="text-balance text-lg font-bold">
              <span>Total URLs:</span>{" "}
              <span className="font-bold">{data && `${data.total ?? 0}`}</span>
            </CardDescription>
          ) : (
            <div className="grid gap-2">
              <CardTitle>Short URLs</CardTitle>
              <CardDescription className="text-balance">
                Your Short URLs
              </CardDescription>
            </div>
          )}
          <div className="ml-auto flex items-center justify-end gap-3">
            <Button
              variant={"outline"}
              onClick={() => handleRefresh()}
              disabled={isLoading}
            >
              {isLoading ? (
                <RefreshCwIcon className="size-4 animate-spin" />
              ) : (
                <RefreshCwIcon className="size-4" />
              )}
            </Button>
            <Button
              className="w-[120px] shrink-0 gap-1"
              variant="default"
              onClick={() => {
                setCurrentEditUrl(null);
                setShowForm(false);
                setFormType("add");
                setShowForm(!isShowForm);
              }}
            >
              Add url
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {isShowForm && (
            <UrlForm
              user={{ id: user.id, name: user.name || "" }}
              isShowForm={isShowForm}
              setShowForm={setShowForm}
              type={formType}
              initData={currentEditUrl}
              action={action}
              onRefresh={handleRefresh}
            />
          )}
          <Table>
            <TableHeader className="bg-gray-100/50 dark:bg-primary-foreground">
              <TableRow className="grid grid-cols-3 items-center sm:grid-cols-8">
                <TableHead className="col-span-1 flex items-center font-bold">
                  Url
                </TableHead>
                <TableHead className="col-span-1 flex items-center font-bold sm:col-span-2">
                  Target
                </TableHead>
                <TableHead className="col-span-1 hidden items-center justify-center font-bold sm:flex">
                  User
                </TableHead>
                <TableHead className="col-span-1 hidden items-center justify-center font-bold sm:flex">
                  Status
                </TableHead>
                <TableHead className="col-span-1 hidden items-center justify-center font-bold sm:flex">
                  Expiration
                </TableHead>
                <TableHead className="col-span-1 hidden items-center justify-center font-bold sm:flex">
                  Update
                </TableHead>
                <TableHead className="col-span-1 flex items-center justify-center font-bold">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {isLoading ? (
                <>
                  <TableColumnSekleton />
                  <TableColumnSekleton />
                  <TableColumnSekleton />
                </>
              ) : data?.list?.length ? (
                data.list.map((short) => (
                  <>
                    <TableRow
                      key={short.id}
                      className="grid animate-fade-in grid-cols-3 items-center animate-in sm:grid-cols-8"
                    >
                      <TableCell className="col-span-1 flex items-center gap-1">
                        <Link
                          className="line-clamp-2 overflow-hidden overflow-ellipsis whitespace-normal text-slate-600 hover:text-blue-400 hover:underline dark:text-slate-400"
                          href={`/s/${short.url}`}
                          target="_blank"
                          prefetch={false}
                        >
                          {short.url}
                        </Link>
                        <CopyButton
                          value={`${site.url}/s/${short.url}`}
                          className={cn(
                            "size-[25px]",
                            "duration-250 transition-all group-hover:opacity-100",
                          )}
                        />
                      </TableCell>
                      
                      <TableCell className="col-span-1 hidden justify-center truncate sm:flex">
                        <TooltipProvider>
                          <Tooltip delayDuration={200}>
                            <TooltipTrigger className="truncate">
                              {short.userName ?? "Anonymous"}
                            </TooltipTrigger>
                            <TooltipContent>
                              {short.userName ?? "Anonymous"}
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </TableCell>
                      <TableCell className="col-span-1 hidden justify-center sm:flex">
                        Dot
                      </TableCell>
                      <TableCell className="col-span-1 hidden justify-center sm:flex">
                        {expirationTime(short.expiration, short.updatedAt)}
                      </TableCell>
                      <TableCell className="col-span-1 hidden justify-center sm:flex">
                        {timeAgo(short.updatedAt)}
                      </TableCell>
                      <TableCell className="col-span-1 flex items-center justify-center gap-2">
                        <Button
                          className="h-7 px-1 text-xs hover:bg-slate-100 dark:hover:text-primary-foreground"
                          size="sm"
                          variant={"outline"}
                          onClick={() => {
                            setCurrentEditUrl(short);
                            setShowForm(false);
                            setFormType("edit");
                            setShowForm(!isShowForm);
                          }}
                        >
                          <p>Edit</p>
                          <PenLine className="ml-1 size-3" />
                        </Button>
                        <Button
                          className="h-7 px-1 text-xs hover:bg-slate-100 dark:hover:text-primary-foreground"
                          size="sm"
                          variant={"outline"}
                          onClick={() => {
                            setSelectedUrlId(short.id);
                            if (isShowStats && selectedUrlId !== short.id) { /* empty */ } else {
                              setShowStats(!isShowStats);
                            }
                          }}
                        >
                          <LineChart className="ml-1 size-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                     
                  </>
                ))
              ) : (
                "Empty"
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      </div>
    </>
  )
}
