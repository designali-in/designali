//@ts-nocheck
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

const ProjectList = ({
  projects,
  lite,
  projectName,
}: {
  projects: Project[];
  lite: boolean;
  projectName: string;
}) => {
  const formattedDate = (dateString: Date) => {
    const date = new Date(dateString);
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
  };

  return (
    <div className=" ">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead className="max-md:hidden">Link</TableHead>
            {!lite && <TableHead className="">Design Stack</TableHead>}
            <TableHead className="max-md:hidden">Description</TableHead>
            {!lite && (
              <TableHead className="text-right max-md:hidden">Date</TableHead>
            )}
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        {projects.length > 0 ? (
          projects.map((project, index) => (
            <TableBody key={index}>
              <TableRow key={index}>
                <TableCell>
                  <div className="overflow-hidden overflow-ellipsis font-medium">
                    {project.projectName}
                  </div>
                </TableCell>
                <TableCell className="mt-1 max-md:hidden">
                  <Link
                    className="hover:text-blue-500"
                    target="_blank"
                    href={project.projectUrl}
                  >
                    {project.projectUrl}
                  </Link>
                </TableCell>
                <TableCell className="mt-1 flex flex-wrap items-center gap-1 max-md:hidden">
                  {project.techStack.slice(0, 3).map((category, index) => (
                    <Badge key={index} className="text-xs" variant="outline">
                      {category}
                    </Badge>
                  ))}
                </TableCell>
                <TableCell className="max-md:hidden">
                  {project.projectInfo}
                </TableCell>

                {!lite && (
                  <TableCell className="text-right max-md:hidden">
                    {formattedDate(project.createdAt)}
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

export default ProjectList;
