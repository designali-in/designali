import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function AvatarDemo() {
  return (
    <Avatar className="rounded-lg">
      <AvatarImage src="/avatars/avatar_2.jpg" alt="Ali Imam" />
      <AvatarFallback>AI</AvatarFallback>
    </Avatar>
  );
}
