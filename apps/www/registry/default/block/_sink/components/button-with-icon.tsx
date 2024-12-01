import { Button } from "@/registry/default/ui/button";
import { MailOpen } from "lucide-react";

export function ButtonWithIcon() {
  return (
    <Button>
      <MailOpen /> Login with Email
    </Button>
  );
}
