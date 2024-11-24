"use client";

import React, { use, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { DIcons } from "dicons";
import {
  Activity,
  ArrowUpRight,
  CircleUser,
  CreditCard,
  DollarSign,
  Menu,
  Package2,
  Search,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

import TicketList from "./TicketList";

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

const DashboardMain = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [loadingProjects, setLoadingProjects] = useState<boolean>(true);
  const [loadingTickets, setLoadingTickets] = useState<boolean>(true);
  const router = useRouter();
  const { toast } = useToast();

  const filteredTickets = tickets.filter(
    (ticket) => ticket.status === "active" || ticket.status === "inprogress",
  );

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/api/project");
        const data = await response.json();
        setLoadingProjects(false);
        setProjects(data);
        console.log("projects:", data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  useEffect(() => {
    if (projects.length === 0 && !loadingProjects) {
      // router.push("/dashboard/agency/tickets");
      toast({
        title: "You need to create project to get started!",
        description: <div>Lets create a project</div>,
      });
    }
  }, [projects, loadingProjects]);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        if (projects.length > 0) {
          const projectId = projects[0].id;
          const response = await fetch(`/api/ticket?projectId=${projectId}`);
          const data = await response.json();
          setTickets(data);
          setLoadingTickets(false);

          if (data.length === 0) {
            //router.push("/dashboard/agency/tickets");
            toast({
              title: "Create a ticket to get started!",
              description: <div>Lets create a ticket</div>,
            });
          }
        }
      } catch (error) {
        console.error("Error fetching tickets:", error);
      }
    };

    fetchTickets();
  }, [projects]);

  const noTickets = tickets.length === 0;
  const noProject = projects.length === 0;

  const cardsData = [
    {
      index: 1,
      value: loadingTickets
        ? null
        : noTickets
          ? "0"
          : tickets.filter((ticket) => ticket.status === "completed").length +
            tickets.filter((ticket) => ticket.status === "archived").length,
      subtitle: "Total completed tickets!",
    },
    {
      index: 2,
      value: loadingTickets
        ? null
        : noTickets
          ? "0"
          : tickets.filter((ticket) => ticket.status === "inprogress").length +
            tickets.filter((ticket) => ticket.status === "active").length,
      subtitle: "Total active tickets!",
    },
    {
      index: 3,
      value: loadingTickets
        ? null
        : noTickets
          ? "0"
          : tickets.length.toString(),
      subtitle: "Total tickets!",
    },
    {
      index: 4,
      value: loadingProjects
        ? null
        : noProject
          ? "No Project"
          : projects[0]?.projectName || "No Project",
      subtitle: "Great project name!",
    },
  ];

  return (
    <div className="my-3 w-full">
      <div className=" ">
        <Card className="xl:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <div className="grid gap-2">
              <CardTitle>Designs</CardTitle>
              <CardDescription>
                {noProject
                  ? ""
                  : "Active designs for your great project: " +
                    projects[0].projectName}
              </CardDescription>
            </div>
            <div className="flex gap-2">
              <Link href="/dashboard/agency/designs/createdesign">
                <Button size="sm" className=" mr-auto gap-1">
                  New Design Requests
                </Button>
              </Link>
              <Link href="/dashboard/agency/designs">
                <Button size="sm" variant="outline" className=" mr-auto gap-1">
                  View All Designs
                </Button>
              </Link>
            </div>
          </CardHeader>

          <CardContent>
            {loadingTickets ? (
              <TicketList
                lite={true}
                tickets={filteredTickets}
                projectName={noProject ? "" : projects[0].projectName}
              />
            ) : noTickets ? (
              <div>
                <div className="flex h-full w-full flex-1 items-center justify-center rounded-lg border border-dashed py-12 shadow-sm">
                  <div className="flex flex-col items-center gap-1 text-center">
                    <h3 className="text-2xl font-bold tracking-tight">
                      You have no tickets
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      You can start building as soon as you add a ticket.
                    </p>
                    <Link
                      href="/dashboard/agency/designs/createdesign"
                      className="mt-4"
                    >
                      <Button>Create Designs</Button>
                    </Link>
                  </div>
                </div>
              </div>
            ) : filteredTickets.length > 0 ? (
              <TicketList
                lite={true}
                tickets={filteredTickets}
                projectName={noProject ? "" : projects[0].projectName}
              />
            ) : (
              <div>
                <div className="flex h-full w-full flex-1 items-center justify-center rounded-lg border border-dashed py-12 shadow-sm">
                  <div className="flex flex-col items-center gap-1 text-center">
                    <h3 className="text-2xl font-bold tracking-tight">
                      You have no active designs
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      You can start track your tickets as soon as you add a
                      ticket.
                    </p>
                    <Link
                      href="/dashboard/agency/tickets/createdesign"
                      className="mt-4"
                    >
                      <Button>Create Design</Button>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardMain;
function asd() {
  throw new Error("Function not implemented.");
}
