/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unnecessary-condition */
"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ChevronsUp, ChevronUp, Minus } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
      setMessageContent("");

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

  const formattedDate = (dateString: Date) => {
    const date = new Date(dateString);
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
  };

  return (
    <div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div className="space-y-4">
          <div className="space-y">
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {ticket ? <p>Ticket ID: #{ticket?.id}</p> : <Skeleton />}
            </p>
            <h2 className="text-2xl font-bold">
              {ticket ? <p>{ticket.title}</p> : <Skeleton />}
            </h2>
            <p className="text-slate-500 dark:text-slate-400">
              {projectName ? <p>{projectName}</p> : <Skeleton />}
            </p>
          </div>
          <div className="scrollbar-hide scrollbar-thin h-[20rem] max-h-[20rem] space-y-3 overflow-auto rounded-2xl border md:h-[35rem] md:max-h-[35rem]">
            {Array.isArray(messages) ? (
              messages.map((message: Message, index: number) => (
                <div
                  key={index}
                  className={`flex w-full flex-col space-y-2 rounded-t-lg p-4 text-left  focus:outline-none   ${message.sender === "ADMIN" ? "bg-slate-200" : "bg-slate-100"}`}
                >
                  <div className="flex items-center space-x-2">
                    <div className="space-y-1">
                      <p className="text-sm leading-none">
                        {message.sender !== "ADMIN" ? "You" : "ADMIN"}
                      </p>
                      <time className="text-xs font-medium text-slate-500">
                        {messages[index]?.createdAt &&
                          timePassedFromNow(messages[index]?.createdAt)}
                      </time>
                    </div>
                  </div>
                  <div>
                    <p className=" ">
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
          <div className="mt-4">
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

        <div className="space-y-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">Ticket Info</h1>
            <p className="text-slate-500 dark:text-slate-400">
              Your tickets informations.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2">
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
                      {" "}
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
                    </p>
                  ) : (
                    <Skeleton />
                  )}
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
                        <Badge className="text-xs" variant="default">
                          {ticket.status}
                        </Badge>
                      ) : (
                        <Badge className="text-xs" variant="secondary">
                          {ticket.status}
                        </Badge>
                      )}
                    </p>
                  ) : (
                    <Skeleton />
                  )}
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
                  ) : (
                    <Skeleton />
                  )}
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
                  {ticket ? (
                    <p>{formattedDate(ticket.createdAt)}</p>
                  ) : (
                    <Skeleton />
                  )}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketDetails;
