import type { AvatarProps } from "@radix-ui/react-avatar";
import type { User } from "next-auth";
import type { FC } from "react";
import { DIcons } from "dicons";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface UserAvatarProps extends AvatarProps {
  user: Pick<User, "image" | "name">;
}

const UserAvatar: FC<UserAvatarProps> = ({ user, ...props }) => {
  return (
    <Avatar {...props}>
      <AvatarImage src={user.image ?? ""} alt={user.name ?? "user avatar"} />
      <AvatarFallback>
        <span className="sr-only">{user.name}</span>
        <DIcons.User className="h-4 w-4" />
      </AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
