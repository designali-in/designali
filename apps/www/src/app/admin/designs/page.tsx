/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unnecessary-condition */
"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowUpRight, ChevronsUp, ChevronUp, Minus } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Project {
  projectName: string;
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
  tickets: Ticket[];
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

const TicketsAdmin = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [filter, setFilter] = useState<string>(); // State to store the filter option

  const router = useRouter();

  const formattedDate = (dateString: Date) => {
    const date = new Date(dateString);
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
  };

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/api/admin/designs");
        const data = await response.json();
        setLoading(false);
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  const handleButtonClick = (ticketId: string, projectName: string) => {
    router.push(
      `/admin/designs/details?ticketId=${ticketId}&projectName=${projectName}`,
    );
  };

  const handleFilterChange = (value: string) => {
    setFilter(value);
  };

  const filteredProjects = Array.isArray(projects)
    ? filter
      ? projects.filter(
          (project) =>
            Array.isArray(project.tickets) &&
            project.tickets.some((ticket) => ticket.status === filter),
        )
      : projects
    : [];

  const sortedProjects = Array.isArray(filteredProjects)
    ? filteredProjects.map((project) => ({
        ...project,
        tickets: Array.isArray(project.tickets)
          ? project.tickets
              .filter((ticket) => (filter ? ticket.status === filter : true))
              .sort(
                (a: Ticket, b: Ticket) =>
                  new Date(b.createdAt).getTime() -
                  new Date(a.createdAt).getTime(),
              )
          : [],
      }))
    : [];

  return (
    <div className="p-6">
      <div className="flex w-11/12 gap-2">
        <Select value={filter} onValueChange={handleFilterChange}>
          <SelectTrigger className="w-5/12">
            <SelectValue placeholder="Select Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="inprogress">In Progress</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="archived">Archived</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Button onClick={() => setFilter("")}>Reset Filter</Button>
      </div>
      <p className="text-xs text-gray-500 md:hidden">
        Some details are hidden on mobile. For more details, please visit on
        your computer.
      </p>
      {loading ? (
        <div className="flex h-full items-center justify-center text-7xl">
          <Skeleton className="h-full w-full" />
        </div>
      ) : (
        <>
          {filteredProjects.length === 0 ? (
            <div className="h-96">
              {" "}
              <Skeleton className="h-full w-full" />
            </div>
          ) : (
            <Card className="mt-6 xl:col-span-2">
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Actions</TableHead>
                      <TableHead>Project Name</TableHead>
                      <TableHead>Title</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Categories</TableHead>
                      <TableHead>Priority</TableHead>
                      <TableHead>Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {sortedProjects.map((project) =>
                      project.tickets.map((ticket, index) => (
                        <TableRow key={index}>
                          <TableCell>
                            <Button
                              size="sm"
                              className="mr-2"
                              onClick={() =>
                                handleButtonClick(
                                  ticket.id,
                                  project.projectName,
                                )
                              }
                            >
                              <ArrowUpRight className="h-4 w-4" />
                            </Button>
                          </TableCell>
                          <TableCell>
                            <div className="overflow-hidden overflow-ellipsis font-medium">
                              {project.projectName?.trim().substring(0, 30)}
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="overflow-hidden overflow-ellipsis font-medium">
                              {ticket.title?.trim().substring(0, 30)}
                            </div>
                          </TableCell>
                          <TableCell>
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
                          <TableCell>
                            {ticket.category
                              .slice(0, 3)
                              .map((category, index) => (
                                <Badge
                                  key={index}
                                  className="text-xs"
                                  variant="outline"
                                >
                                  {category}
                                </Badge>
                              ))}
                          </TableCell>
                          <TableCell>
                            {ticket.priority === "high" && (
                              <Badge variant="secondary">
                                <ChevronsUp /> High
                              </Badge>
                            )}
                            {ticket.priority === "medium" && (
                              <Badge variant="outline">
                                <ChevronUp /> Medium
                              </Badge>
                            )}
                            {ticket.priority === "low" && (
                              <Badge variant="outline">
                                <Minus /> Low
                              </Badge>
                            )}
                          </TableCell>
                          <TableCell className="text-right">
                            {formattedDate(ticket.createdAt)}
                          </TableCell>
                        </TableRow>
                      )),
                    )}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          )}
        </>
      )}
    </div>
  );
};

export default TicketsAdmin;
