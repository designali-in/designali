// Dependencies: pnpm install lucide-react

"use client";

import { useState } from "react";
import Image from "next/image";
import UserImg01 from "@/public/avatars/avatar_1.jpg";
import UserImg02 from "@/public/avatars/avatar_2.jpg";
import UserImg03 from "@/public/avatars/avatar_3.jpg";
import UserImg04 from "@/public/avatars/avatar_4.jpg";
import UserImg05 from "@/public/avatars/avatar_5.jpg";
import UserImg06 from "@/public/avatars/avatar_6.jpg";
import { Bell } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const initialNotifications = [
  {
    id: 1,
    image: UserImg01,
    user: "Chris Tompson",
    action: "requested feedback on",
    target: "Homepage wireframe",
    timestamp: "15 minutes ago",
    unread: true,
  },
  {
    id: 2,
    image: UserImg02,
    user: "Emma Davis",
    action: "shared",
    target: "New design system library",
    timestamp: "45 minutes ago",
    unread: true,
  },
  {
    id: 3,
    image: UserImg03,
    user: "James Wilson",
    action: "assigned you to",
    target: "UI style guide update",
    timestamp: "4 hours ago",
    unread: false,
  },
  {
    id: 4,
    image: UserImg04,
    user: "Alex Morgan",
    action: "replied to your comment in",
    target: "Onboarding flow mockups",
    timestamp: "12 hours ago",
    unread: false,
  },
  {
    id: 5,
    image: UserImg05,
    user: "Sarah Chen",
    action: "commented on",
    target: "Dashboard UI revamp",
    timestamp: "2 days ago",
    unread: false,
  },
  {
    id: 6,
    image: UserImg06,
    user: "Miky Derya",
    action: "mentioned you in",
    target: "Brand identity concept",
    timestamp: "2 weeks ago",
    unread: false,
  },
];

function Dot({ className }: { className?: string }) {
  return (
    <svg
      width="6"
      height="6"
      fill="currentColor"
      viewBox="0 0 6 6"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="3" cy="3" r="3" />
    </svg>
  );
}

export default function PopoverDemo() {
  const [notifications, setNotifications] = useState(initialNotifications);
  const unreadCount = notifications.filter((n) => n.unread).length;

  const handleMarkAllAsRead = () => {
    setNotifications(
      notifications.map((notification) => ({
        ...notification,
        unread: false,
      })),
    );
  };

  const handleNotificationClick = (id: number) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id
          ? { ...notification, unread: false }
          : notification,
      ),
    );
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          size="icon"
          variant="outline"
          className="relative"
          aria-label="Open notifications"
        >
          <Bell size={16} strokeWidth={2} aria-hidden="true" />
          {unreadCount > 0 && (
            <Badge className="absolute -top-2 left-full min-w-4 -translate-x-1/2 px-1">
              {unreadCount > 99 ? "99+" : unreadCount}
            </Badge>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-1">
        <div className="flex items-baseline justify-between gap-4 px-3 py-2">
          <div className="text-sm font-semibold">Notifications</div>
          {unreadCount > 0 && (
            <button
              className="text-xs font-medium hover:underline"
              onClick={handleMarkAllAsRead}
            >
              Mark all as read
            </button>
          )}
        </div>
        <div
          role="separator"
          aria-orientation="horizontal"
          className="-mx-1 my-1 h-px bg-border"
        ></div>
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent"
          >
            <div className="relative flex items-start gap-3 pe-3">
              <Image
                className="size-9 rounded-md"
                src={notification.image}
                width={32}
                height={32}
                alt={notification.user}
              />
              <div className="flex-1 space-y-1">
                <button
                  className="text-left text-foreground/80 after:absolute after:inset-0"
                  onClick={() => handleNotificationClick(notification.id)}
                >
                  <span className="font-medium text-foreground hover:underline">
                    {notification.user}
                  </span>{" "}
                  {notification.action}{" "}
                  <span className="font-medium text-foreground hover:underline">
                    {notification.target}
                  </span>
                  .
                </button>
                <div className="text-xs text-muted-foreground">
                  {notification.timestamp}
                </div>
              </div>
              {notification.unread && (
                <div className="absolute end-0 self-center">
                  <Dot />
                </div>
              )}
            </div>
          </div>
        ))}
      </PopoverContent>
    </Popover>
  );
}
