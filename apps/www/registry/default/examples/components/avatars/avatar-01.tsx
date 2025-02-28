import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage src="/avatars/avatar_1.jpg" alt="Ali Imam" />
      <AvatarFallback>AI</AvatarFallback>
    </Avatar>
  );
}
