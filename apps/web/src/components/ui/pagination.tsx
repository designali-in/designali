"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { formUrlQuery } from "@/lib/dutils";
import { cn } from "@designali/ui";
import { Button, buttonVariants } from "@designali/ui/button";

interface PaginationProps {
  page: number | string;
  totalPages: number;
  urlParamName?: string;
}

const Paginations = ({ page, totalPages, urlParamName }: PaginationProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const onClick = (btnType: string) => {
    const pageValue = btnType === "next" ? Number(page) + 1 : Number(page) - 1;

    const newUrl = formUrlQuery({
      params: searchParams.toString(),
      key: urlParamName || "page",
      value: pageValue.toString(),
    });

    router.push(newUrl, { scroll: false });
  };

  return (
    <div className="mx-auto mt-6 flex max-w-sm justify-center gap-3">
      <Button
        size="lg"
        variant="outline"
        onClick={() => onClick("prev")}
        disabled={Number(page) <= 1}
      >
        Previous
      </Button>
      <div className="flex items-center gap-3">
        <p
          className={cn(
            buttonVariants({
              variant: "ghost",
              size: "icon",
            }),
          )}
        >
          {Number(page) - 1}
        </p>
        <p
          className={cn(
            buttonVariants({
              variant: "outline",
              size: "icon",
            }),
          )}
        >
          {page}
        </p>
        <p
          className={cn(
            buttonVariants({
              variant: "ghost",
              size: "icon",
            }),
          )}
        >
          {Number(page) + 1}
        </p>
      </div>
      <Button
        size="lg"
        variant="outline"
        onClick={() => onClick("next")}
        disabled={Number(page) >= totalPages}
      >
        Next
      </Button>
    </div>
  );
};

export default Paginations;
