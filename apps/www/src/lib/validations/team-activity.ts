import { prisma } from "@/lib/db";

export type TeamActivityType =
  | "team.created"
  | "team.updated"
  | "team.deleted"
  | "member.invited"
  | "member.joined"
  | "member.left"
  | "member.removed"
  | "member.role_updated"
  | "settings.updated";

export async function logTeamActivity(
  teamId: string,
  userId: string,
  type: TeamActivityType,
  metadata: Record<string, any>,
) {
  return prisma.teamActivity.create({
    data: {
      teamId,
      userId,
      event: type,
      metadata,
    },
  });
}

export function formatTeamActivity(
  event: string,
  metadata: Record<string, any>,
  actorName: string,
): string {
  switch (event) {
    case "team.created":
      return `created the team`;
    case "team.updated":
      return `updated the team ${
        metadata.name ? `name to "${metadata.name}"` : "settings"
      }`;
    case "team.deleted":
      return `deleted the team`;
    case "member.invited":
      return `invited ${
        metadata.invitedEmail
      } as ${metadata.role.toLowerCase()}`;
    case "member.joined":
      return `joined the team as ${metadata.role.toLowerCase()}`;
    case "member.left":
      return `left the team`;
    case "member.removed":
      return `removed ${metadata.memberName} from the team`;
    case "member.role_updated":
      return `updated ${
        metadata.memberName
      }'s role to ${metadata.newRole.toLowerCase()}`;
    case "settings.updated":
      return `updated team settings`;
    default:
      return event;
  }
}
