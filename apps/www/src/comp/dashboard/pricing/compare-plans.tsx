import type { PlansRow } from "@/types";
import { CircleCheck, Info } from "lucide-react";

import { comparePlans, plansColumns } from "@/config/subscriptions";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function ComparePlans() {
  const renderCell = (value: string | boolean | null) => {
    if (value === null) return "—";
    if (typeof value === "boolean")
      return value ? <CircleCheck className="mx-auto size-[22px]" /> : "—";
    return value;
  };

  return (
    <div>
      <div className="my-10 overflow-x-scroll md:overflow-x-visible">
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              {plansColumns.map((col) => (
                <TableHead key={col} className="">
                  {col}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {comparePlans.map((row: PlansRow, index: number) => (
              <TableRow>
                <TableCell
                  data-tip={row.tooltip ? row.tooltip : ""}
                  className="font-medium"
                >
                  <div className="flex w-60 justify-between">
                    <span className=" ">{row.feature}</span>
                    {row.tooltip && (
                      <Popover>
                        <PopoverTrigger className=" ">
                          <Info className="h-4 w-4 " />
                        </PopoverTrigger>
                        <PopoverContent side="top" className=" ">
                          {row.tooltip}
                        </PopoverContent>
                      </Popover>
                    )}
                  </div>
                </TableCell>
                {plansColumns.map((col) => (
                  <TableCell key={col} className=" ">
                    <div className="flex justify-center ">
                      {renderCell(row[col])}
                    </div>
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
