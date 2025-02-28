//@ts-nocheck
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";

interface JoinTeamFormProps {
  teamId: string;
  invitationToken: string;
  teamName: string;
}

export function JoinTeamForm({
  teamId,
  invitationToken,
  teamName,
}: JoinTeamFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const onSubmit = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(`/api/teams/${teamId}/join`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token: invitationToken,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        // Handle specific error cases
        switch (data.error) {
          case "Already a member of this team":
            toast.info("You are already a member of this team");
            router.push(`/dashboard/teams/${data.teamSlug}`);
            return;
          case "Invitation has expired":
            toast.error(
              "This invitation has expired. Please request a new one.",
            );
            router.push("/dashboard/teams");
            return;
          case "This invitation was sent to a different email address":
            toast.error(
              "Please use the email address that received the invitation.",
            );
            return;
          default:
            throw new Error(data.error || "Failed to join team");
        }
      }

      toast.success(data.message || `Successfully joined ${teamName}`);
      router.push(`/dashboard/teams/${data.teamSlug}`);
      router.refresh();
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Failed to join team",
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm text-muted-foreground">
        Click the button below to accept the invitation and join {teamName}.
      </p>
      <div className="flex gap-4">
        <Button loading={isLoading} onClick={onSubmit}>
          Accept & Join
        </Button>
        <Button
          variant="outline"
          onClick={() => router.push("/dashboard/teams")}
          disabled={isLoading}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
}
