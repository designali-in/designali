import type { Session } from "next-auth";
import * as React from "react";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ProtectedElementProps {
  session?: Session | null;
  tooltipMessage: string;
  renderElement: (disabled: boolean) => React.ReactNode;
}

export const ProtectedElement: React.FC<ProtectedElementProps> = ({
  session,
  renderElement,
  tooltipMessage,
}) => {
  const isUserLoggedIn = Boolean(session);

  if (!isUserLoggedIn) {
    return (
      <Tooltip>
        <TooltipTrigger>
          <div className="cursor-not-allowed">{renderElement(true)}</div>
        </TooltipTrigger>
        <TooltipContent>
          <p>{tooltipMessage}</p>
        </TooltipContent>
      </Tooltip>
    );
  }

  return renderElement(false);
};
