import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { DIcons } from "dicons";
import {
  Activity,
  ArrowUpRight,
  ChevronsUp,
  ChevronUp,
  CircleUser,
  CreditCard,
  DollarSign,
  Menu,
  Minus,
  Package2,
  Search,
  Users,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Project {
  id: string;
  projectName: string;
  projectInfo?: string | null;
  techStack: string[];
  projectUrl?: string | null;
  githubUrl?: string | null;
  completedTickets?: number | null;
  tickets: Ticket[];
  createdAt: Date;
  updatedAt: Date;
  userId?: string | null;
}
interface Ticket {
  id: string;
  title?: string | null;
  messages?: string | null;
  status?: string | null;
  project: Project;
  category: string[];
  priority: string;
  projectId: string;
  createdAt: Date;
  updatedAt: Date;
}

const TicketList = ({
  tickets,
  lite,
  projectName,
}: {
  tickets: Ticket[];
  lite: boolean;
  projectName: string;
}) => {
  const formattedDate = (dateString: Date) => {
    const date = new Date(dateString);
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
  };

  const router = useRouter();

  const handleButtonClick = (ticketId: string) => {
    // Do something with the ticketId
    router.push(
      `/dashboard/agency/ticketDetails?ticketId=${ticketId}&projectName=${projectName}`,
    );
  };

  return (
    <div className=" ">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Actions</TableHead>
            <TableHead>Title</TableHead>
            {!lite && <TableHead className="">Status</TableHead>}
            <TableHead className="max-md:hidden">Categories</TableHead>
            <TableHead className="max-md:hidden">Priority</TableHead>
            {!lite && (
              <TableHead className="text-right max-md:hidden">Date</TableHead>
            )}
          </TableRow>
        </TableHeader>
        {tickets.length > 0 ? (
          tickets.map((ticket, index) => (
            <TableBody key={index}>
              <TableRow key={index}>
                <TableCell>
                  <Button
                    size="sm"
                    className="mr-2"
                    onClick={() => handleButtonClick(ticket.id)}
                  >
                    Chat
                  </Button>
                </TableCell>
                <TableCell>
                  <div className="overflow-hidden overflow-ellipsis font-medium">
                    {ticket.title.trim().substring(0, 30)}
                  </div>
                </TableCell>
                {!lite && (
                  <TableCell className="">
                    {" "}
                    {ticket.status === "Completed" ? (
                      <Badge className="text-xs" variant="default">
                        {ticket.status}
                      </Badge>
                    ) : (
                      <Badge className="text-xs" variant="secondary">
                        {ticket.status}
                      </Badge>
                    )}
                  </TableCell>
                )}
                <TableCell className="mt-1 flex flex-wrap items-center gap-1 max-md:hidden">
                  {ticket.category.slice(0, 3).map((category, index) => (
                    <Badge key={index} className="text-xs" variant="outline">
                      {category}
                    </Badge>
                  ))}
                </TableCell>
                <TableCell className="max-md:hidden">
                  {ticket.priority === "high" && (
                    <Badge variant="red">
                      <DIcons.ChevronsUp className="h-4 w-4" /> High
                    </Badge>
                  )}
                  {ticket.priority === "medium" && (
                    <Badge variant="blue">
                      <DIcons.ChevronUp className="h-4 w-4" /> Medium
                    </Badge>
                  )}
                  {ticket.priority === "low" && (
                    <Badge variant="green">
                      <Minus /> Low
                    </Badge>
                  )}
                </TableCell>
                {!lite && (
                  <TableCell className="text-right max-md:hidden">
                    {formattedDate(ticket.createdAt)}
                  </TableCell>
                )}
              </TableRow>
            </TableBody>
          ))
        ) : (
          <TableBody>
            <TableRow>
              <TableCell>
                <Skeleton />
              </TableCell>
              <TableCell>
                <div className="font-medium">
                  <Skeleton />
                </div>
              </TableCell>
              {!lite && (
                <TableCell className="">
                  <Skeleton />
                </TableCell>
              )}
              <TableCell className="max-md:hidden">
                <Skeleton />
              </TableCell>
              <TableCell className="max-md:hidden">
                <Skeleton />
              </TableCell>
              {!lite && (
                <TableCell className="text-right">
                  <Skeleton />
                </TableCell>
              )}
            </TableRow>
          </TableBody>
        )}
      </Table>
    </div>
  );
};

export default TicketList;
