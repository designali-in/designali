"use client";

import type { TeamMember } from "@/types";
import { useState } from "react";
import { toast } from "sonner";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface TeamMembersProps {
  members: TeamMember[];
  teamId: string;
  currentUserId: string;
  userRole?: string;
}

export function TeamMembers({
  members,
  teamId,
  currentUserId,
  userRole,
}: TeamMembersProps) {
  const [isUpdating, setIsUpdating] = useState<string | null>(null);
  const canManageRoles = userRole === "OWNER" || userRole === "ADMIN";

  const updateMemberRole = async (memberId: string, newRole: string) => {
    setIsUpdating(memberId);
    try {
      const response = await fetch(`/api/teams/${teamId}/members/${memberId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ role: newRole }),
      });

      if (!response.ok) throw new Error("Failed to update role");

      toast.success("Member role updated");
    } catch (error) {
      toast.error("Failed to update member role");
    } finally {
      setIsUpdating(null);
    }
  };

  const removeMember = async (memberId: string) => {
    try {
      const response = await fetch(`/api/teams/${teamId}/members/${memberId}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Failed to remove member");

      toast.success("Member removed from team");
    } catch (error) {
      toast.error("Failed to remove member");
    }
  };

  return (
    <div className="divide-y">
      {members.map((member) => (
        <div key={member.id} className="flex items-center justify-between py-4">
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage src={member.user.image ?? undefined} />
              <AvatarFallback>
                {member.user.name[0].toUpperCase() ?? "U"}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">{member.user.name}</p>
              <p className="text-sm text-muted-foreground">
                {member.user.email}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {canManageRoles && member.userId !== currentUserId ? (
              <>
                <Select
                  defaultValue={member.role}
                  onValueChange={(value) => updateMemberRole(member.id, value)}
                  disabled={isUpdating === member.id}
                >
                  <SelectTrigger className="w-[110px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ADMIN">Admin</SelectItem>
                    <SelectItem value="MEMBER">Member</SelectItem>
                  </SelectContent>
                </Select>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => removeMember(member.id)}
                >
                  Remove
                </Button>
              </>
            ) : (
              <span className="text-sm text-muted-foreground">
                {member.role.charAt(0) + member.role.slice(1).toLowerCase()}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
