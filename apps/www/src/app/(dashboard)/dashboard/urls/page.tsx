"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/registry/default/ui/button";
import { Input } from "@/registry/default/ui/input";
import { Pagination } from "@/registry/default/ui/pagination";
import { Skeleton } from "@/registry/default/ui/skeleton";
import { CopyButton } from "@/src/comp/uis/copy-button";
import { Url } from "@prisma/client";
import { DIcons } from "dicons";
import { useSnackbar } from "notistack";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const take = 5;

export default function Profile() {
  const [url, setUrl] = useState("");
  const [urlList, setUrlList] = useState([] as Url[]);
  const [isLoading, setLoading] = useState(false);
  const [totalUrlCount, setTotalUrlCount] = useState(0);
  const [skip, setSkip] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addUrlInputError, setAddUrlInputError] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const { enqueueSnackbar } = useSnackbar();
  const [deletingUrl, setDeletingUrl] = useState(-1);
  const [addingUrl, setAddingUrl] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/urls?skip=${skip}&take=${take}`)
      .then((res) => res.json())
      .then((data: IPaginatedUrls) => {
        setUrlList(data.results);
        setTotalUrlCount(data.totalCount);
        setLoading(false);
      });
  }, [skip]);

  function addUrl(e: any) {
    setAddingUrl(true);
    e.preventDefault();
    const formData = {
      url: e.target.url.value,
    };

    fetch("/api/urls", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        const error = res.status !== 200;
        setAddingUrl(false);
        res
          .json()
          .then((data) => {
            if (error && data.details) {
              setAddUrlInputError(data.details.toString());
              return;
            }
            if (error) {
              setAddUrlInputError("Some error occurred");
              return;
            }
            setAddUrlInputError("");
            const url = data as Url;
            if (skip !== 0) {
              setSkip(0);
            } else {
              urlList.splice(1, 0, url);
              setUrlList(urlList);
            }
            setIsModalOpen(false);
            enqueueSnackbar("Successfully added!", { variant: "success" });
            setTotalUrlCount(totalUrlCount + 1);
          })
          .catch((e) => {
            enqueueSnackbar("Some error occurred while adding URL", {
              variant: "error",
            });
          });
      })
      .catch((e) => {
        setAddingUrl(false);
        setAddUrlInputError("Some error occurred");
      });
  }

  function deleteUrl(id: string, index: number) {
    setDeletingUrl(index);
    fetch("/api/urls", {
      method: "DELETE",
      body: JSON.stringify({ id: id }),
      headers: {
        "Content-Type": "applications/json",
      },
    })
      .then((res) => {
        setDeletingUrl(-1);
        if (res.status === 200) {
          urlList.splice(index, 1);
          setUrlList(urlList);

          // If the urlList is empty, then we need to go back one page if possible
          if (urlList.length === 0) {
            const newPage = Math.max(0, currentPage - 1);
            setCurrentPage(newPage);
            setSkip(newPage * take);
          }
          setTotalUrlCount(totalUrlCount - 1);
          enqueueSnackbar("Successfully deleted", { variant: "success" });
          return;
        }
        res
          .json()
          .then((data) => {
            if (data && data.details) {
              enqueueSnackbar(data.details.toString(), { variant: "error" });
            }
          })
          .catch((e) => {
            enqueueSnackbar("Some error occurred while deleting URL", {
              variant: "error",
            });
          });
      })
      .catch((e) => {
        setDeletingUrl(-1);
        enqueueSnackbar("Some error occurred", { variant: "error" });
      });
  }

  return (
    <div className="p-6">
      <div className="flex w-full flex-col gap-4">
        <div>
          <div className="grid gap-3 md:flex">
            <h1 className=" w-full text-2xl font-semibold">
              Total Urls: {totalUrlCount}
            </h1>
            <div className="w-full">
              <form className=" flex gap-2 " onSubmit={addUrl}>
                <div className="w-full ">
                  <Input
                    type="url"
                    id="url"
                    name="url"
                    placeholder="Your Url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className={`w-full text-black ${addUrlInputError ? "border-red-500" : ""}`}
                    required
                    autoFocus
                  />
                </div>
                <div className=" ">
                  <Button type="submit">
                    {addingUrl ? `Adding` : "Create Url"}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="relative rounded-md">
          <Table>
            <TableCaption>A list of your recent urls.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Short URL</TableHead>
                <TableHead>Original URL</TableHead>
                <TableHead>Created At</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {isLoading
                ? Array.from({ length: take }).map((_, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <Skeleton className="h-6 w-full" />
                      </TableCell>
                      <TableCell>
                        <Skeleton className="h-6 w-full" />
                      </TableCell>
                      <TableCell>
                        <Skeleton className="h-6 w-full" />
                      </TableCell>
                      <TableCell>
                        <Skeleton className="h-9 w-20" />
                      </TableCell>
                    </TableRow>
                  ))
                : urlList &&
                  urlList.length > 0 &&
                  urlList.slice(skip, skip + take).map((obj, index) => (
                    <TableRow key={index}>
                      <TableCell className="">
                        <div className="flex w-auto">
                          <CopyButton value={obj.shortUrl} />
                          <Link
                            className="hover:text-blue-500 hover:underline"
                            target="_blank"
                            href={obj.shortUrl}
                          >
                            {obj.shortUrl}
                          </Link>
                        </div>
                      </TableCell>
                      <TableCell className="">
                        <div className="w-60 overflow-hidden truncate whitespace-nowrap">
                          <CopyButton value={obj.originalUrl} />
                          <Link
                            className="hover:text-blue-500 hover:underline"
                            target="_blank"
                            href={obj.shortUrl}
                          >
                            {obj.originalUrl}
                          </Link>
                        </div>
                      </TableCell>
                      <TableCell>
                        {new Date(obj.createdAt.toString()).toDateString()}
                      </TableCell>
                      <TableCell className="text-right">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => deleteUrl(obj.id, index)}
                        >
                          {deletingUrl === index ? (
                            <DIcons.Loader />
                          ) : (
                            <DIcons.Trash2 />
                          )}
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
            </TableBody>
            <TableFooter>
              <TableRow></TableRow>
            </TableFooter>
          </Table>
        </div>
      </div>
    </div>
  );
}
