// Dependencies: pnpm install lucide-react

import { Bolt, ChevronDown, CopyPlus, Files, Layers2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function DropdownDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          Menu with icons
          <ChevronDown
            className="opacity-60"
            size={16}
            strokeWidth={2}
            aria-hidden="true"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <CopyPlus
            size={16}
            strokeWidth={2}
            className="opacity-60"
            aria-hidden="true"
          />
          Copy
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Bolt
            size={16}
            strokeWidth={2}
            className="opacity-60"
            aria-hidden="true"
          />
          Edit
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Layers2
            size={16}
            strokeWidth={2}
            className="opacity-60"
            aria-hidden="true"
          />
          Group
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Files
            size={16}
            strokeWidth={2}
            className="opacity-60"
            aria-hidden="true"
          />
          Clone
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
