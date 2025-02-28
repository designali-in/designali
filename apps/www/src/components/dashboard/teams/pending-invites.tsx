"use client";

import { useState } from "react";
import { formatDistanceToNow } from "date-fns";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { Loader2, Mail, X } from "lucide-react";

interface PendingInvitesProps {
  invitations: {
    id: string;
    email: string;
    role: string;
    expires: Date;
    createdAt: Date;
  }[];
  teamId: string;
}

export function PendingInvites({ invitations, teamId }: PendingInvitesProps) {
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [resendingId, setResendingId] = useState<string | null>(null);

  const cancelInvitation = async (invitationId: string) => {
    setDeletingId(invitationId);
    try {
      const response = await fetch(
        `/api/teams/${teamId}/invitations/${invitationId}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) throw new Error("Failed to cancel invitation");

      toast.success("Invitation cancelled");
    } catch (error) {
      toast.error("Failed to cancel invitation");
    } finally {
      setDeletingId(null);
    }
  };

  const resendInvitation = async (invitationId: string) => {
    setResendingId(invitationId);
    try {
      const response = await fetch(
        `/api/teams/${teamId}/invitations/${invitationId}/resend`,
        {
          method: "POST",
        }
      );

      if (!response.ok) throw new Error("Failed to resend invitation");

      toast.success("Invitation resent");
    } catch (error) {
      toast.error("Failed to resend invitation");
    } finally {
      setResendingId(null);
    }
  };

  if (!invitations.length) {
    return (
      <div className="text-center py-4 text-sm text-muted-foreground">
        No pending invitations
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {invitations.map((invitation) => (
        <div
          key={invitation.id}
          className="flex items-center justify-between p-4 border rounded-lg"
        >
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center">
              <Mail className="h-4 w-4 text-secondary-foreground" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <p className="font-medium">{invitation.email}</p>
                <Badge variant="secondary">{invitation.role}</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Invited{" "}
                {formatDistanceToNow(new Date(invitation.createdAt), {
                  addSuffix: true,
                })}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => resendInvitation(invitation.id)}
              disabled={!!resendingId}
            >
              {resendingId === invitation.id ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                "Resend"
              )}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => cancelInvitation(invitation.id)}
              disabled={!!deletingId}
            >
              {deletingId === invitation.id ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <X className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
