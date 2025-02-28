import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export default function AvatarDemo() {
  return (
    <div className="relative">
      <Avatar className="rounded-lg">
        <AvatarImage src="/avatars/avatar_8.jpg" alt="Ali Imam" />
        <AvatarFallback>AI</AvatarFallback>
      </Avatar>
      <Badge className="absolute -top-2 left-full min-w-4 -translate-x-3 border-background px-1">
        6
      </Badge>
    </div>
  );
}
