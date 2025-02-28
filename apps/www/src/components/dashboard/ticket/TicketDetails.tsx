//@ts-nocheck
"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/src/lib/utils";
import { DIcons } from "dicons";
import { ChevronsUp, ChevronUp, Minus } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

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
  messages?: Message | null;
  status?: string | null;
  project: Project;
  category: string[];
  priority: string;
  projectId: string;
  createdAt: Date;
  updatedAt: Date;
}

interface Message {
  id: string;
  content: string;
  sender: string;
  ticketId: string;
  createdAt: Date;
  updatedAt: Date;
}

const TicketDetails = () => {
  const searchParams = useSearchParams();
  const ticketId = searchParams.get("ticketId");
  const projectName = searchParams.get("projectName");
  const router = useRouter();
  const { toast } = useToast();
  if (!ticketId || !projectName) {
    router.push("/dashboard/agency");
  }
  const [ticket, setTicket] = useState<Ticket | null>(null);
  const [messages, setMessages] = useState<Message[] | null>(null);
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [messageContent, setMessageContent] = useState("");

  const [date, setDate] = React.useState<Date | undefined>(new Date());

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/ticket?ticketId=${ticketId}`);
        const data = await response.json();
        // Process the data here
        setTicket(data);
      } catch (error) {
        // Handle error
        console.error("Error fetching ticket:", error);
      }
    };

    fetchData();
  }, [ticketId]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/messages?ticketId=${ticketId}`);
        const data = await response.json();
        // Process the data here
        setMessages(data);
      } catch (error) {
        // Handle error
        console.error("Error fetching ticket:", error);
      }
    };

    fetchData();
  }, [ticket]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to the bottom when new messages are added
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  }, [messages]);

  const timePassedFromNow = (dateString: Date) => {
    const date = new Date(dateString);
    const now = new Date();

    const timeDifference = now.getTime() - date.getTime();
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);

    if (years > 0) {
      return `${years} year(s) ago`;
    } else if (months > 0) {
      return `${months} month(s) ago`;
    } else if (days > 0) {
      return `${days} day(s) ago`;
    } else if (hours > 0) {
      return `${hours} hour(s) ago`;
    } else if (minutes > 0) {
      return `${minutes} minute(s) ago`;
    } else {
      return `${seconds} second(s) ago`;
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      setLoadingSubmit(true);
      const formData = new FormData(event.currentTarget);
      const content = formData.get("content") as string;

      const response = await fetch("/api/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ticketId,
          content,
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to send message");
      }
      setMessageContent("dfvdf");

      const fetchData = async () => {
        try {
          const response = await fetch(`/api/messages?ticketId=${ticketId}`);
          const data = await response.json();
          // Process the data here
          setMessages(data);
        } catch (error) {
          // Handle error
          console.error("Error fetching ticket:", error);
        }
      };
      fetchData();
      toast({
        title: "Your message has been sent!",
        description: <div>We will be contact with you ASAP </div>,
      });
      setLoadingSubmit(false);
      event.currentTarget.reset();
    } catch (error) {
      // Handle error
      console.error("Error sending message:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/messages?ticketId=${ticketId}`);
        const data = await response.json();
        console.log(data); // Log response data
        setMessages(data);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };
    fetchData();
  }, [ticket]);

  const formattedDate = (dateString: Date) => {
    const date = new Date(dateString);
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
  };

  return (
    <div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div className="space-y-3 rounded-2xl border p-3">
          <div className="space-y-2 p-3">
            <div className="flex flex-wrap items-center justify-between text-xs text-primary/50">
              <p className="">
                {ticket ? <span>Design ID: #{ticket?.id}</span> : null}
              </p>
              {ticket ? <span>{formattedDate(ticket.createdAt)}</span> : null}
            </div>
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">
                {ticket ? <span>{ticket.title}</span> : null}
              </h2>
              <p className="text-slate-500 dark:text-slate-400">
                {projectName ? <span>{projectName}</span> : null}
              </p>
            </div>
          </div>
          <div
            className={`scrollbar-hide scrollbar-thin h-[20rem] max-h-[20rem] space-y-2 overflow-auto rounded-2xl border p-3 md:h-[35rem] md:max-h-[35rem]`}
          >
            {Array.isArray(messages) ? (
              messages.map((message: Message, index: number) => (
                <div
                  key={index}
                  className={`flex w-full space-y-2 rounded-lg p-4 text-left  focus:outline-none ${message.sender === "ADMIN" ? " bg-green-200  dark:bg-green-800" : "justify-end bg-secondary"}`}
                >
                  <div
                    className={`grid gap-2 ${message.sender === "ADMIN" ? "" : "text-right"}`}
                  >
                    <div
                      className={`flex gap-1 ${message.sender === "ADMIN" ? "" : "justify-end text-right"}`}
                    >
                      <div className="space-y-1">
                        <p className="text-sm leading-none">
                          {message.sender !== "ADMIN" ? "" : "Designali"}
                        </p>
                      </div>
                      <time className="text-xs text-primary/30">
                        {messages[index]?.createdAt &&
                          timePassedFromNow(messages[index]?.createdAt)}
                      </time>
                    </div>
                    <p className="max-w-[50rem] overflow-hidden font-medium">
                      <span className="">{message.content}</span>
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <Skeleton />
            )}

            {loadingSubmit && <Skeleton />}
            <div ref={messagesEndRef}></div>
          </div>
          <div className="">
            <form className="flex space-x-2" onSubmit={handleSubmit}>
              <Textarea
                className="max-h-[150px] flex-1"
                placeholder="Enter your messages..."
                name="content"
                value={messageContent}
                onChange={(event) => setMessageContent(event.target.value)}
              />
              <Button type="submit" disabled={loadingSubmit}>
                Send
              </Button>
            </form>
          </div>
        </div>

        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm text-slate-500 dark:text-slate-400">
                  Priority
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-bold">
                  {ticket ? (
                    <p>
                      {ticket.priority === "high" && (
                        <Badge variant="red">
                          <DIcons.ChevronsUp className="h-4 w-4" /> High
                        </Badge>
                      )}
                      {ticket.priority === "medium" && (
                        <Badge variant="blue">
                          <ChevronUp /> Medium
                        </Badge>
                      )}
                      {ticket.priority === "low" && (
                        <Badge variant="green">
                          <Minus /> Low
                        </Badge>
                      )}
                    </p>
                  ) : null}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-sm text-slate-500 dark:text-slate-400">
                  Status
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-bold">
                  {ticket ? (
                    <p>
                      {ticket.status === "Completed" ? (
                        <Badge className="text-xs" variant="blue">
                          {ticket.status}
                        </Badge>
                      ) : (
                        <Badge className="text-xs" variant="green">
                          {ticket.status}
                        </Badge>
                      )}
                    </p>
                  ) : null}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-sm text-slate-500 dark:text-slate-400">
                  Categories
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-bold">
                  {ticket ? (
                    <p>
                      {ticket.category.map((category, index) => (
                        <Badge key={index} className="" variant="outline">
                          {category}
                        </Badge>
                      ))}
                    </p>
                  ) : null}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-sm text-slate-500 dark:text-slate-400">
                  Creation Time
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-bold">
                  {ticket ? <p>{formattedDate(ticket.createdAt)}</p> : null}
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="">
            <Card>
              <CardContent className="mt-6">
                <div className="grid items-center justify-between gap-3 md:grid xl:flex">
                  <div className="flex h-full flex-col justify-center">
                    <div className="flex flex-col items-center">
                      <h3 className="  inline-flex items-baseline bg-gradient-to-r from-slate-800 via-slate-600 to-slate-800 bg-clip-text pb-1 font-bold text-transparent dark:bg-gradient-to-r dark:from-slate-400 dark:via-slate-200 dark:to-slate-400 dark:bg-clip-text">
                        <span className="text-xl md:text-2xl">
                          Any questions about Design?
                        </span>
                      </h3>
                    </div>
                    <p className="mb-4 text-slate-400">
                      Feel free to reach out to me!
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Link
                        href={"https://cal.com/aliimam/designali"}
                        target="_blank"
                      >
                        <Button>Book a call</Button>
                      </Link>
                      <Link
                        href="mailto:contact@designali.in"
                        target="_blank"
                        className={cn(
                          buttonVariants({
                            variant: "outline",
                            size: "icon",
                          }),
                        )}
                      >
                        <span className="flex items-center gap-1">
                          <DIcons.Mail strokeWidth={1} className="h-5 w-5" />
                        </span>
                      </Link>
                      <Link
                        href="https://wa.me/917678432186"
                        target="_blank"
                        className={cn(
                          buttonVariants({
                            variant: "outline",
                            size: "icon",
                          }),
                        )}
                      >
                        <span className="flex items-center gap-1">
                          <DIcons.WhatsApp
                            strokeWidth={1}
                            className="h-4 w-4"
                          />
                        </span>
                      </Link>
                    </div>
                  </div>
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketDetails;
