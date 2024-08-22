import * as React from "react";

import { DesignaliProps } from "../../types";

export const MessageSquareOff = React.forwardRef<SVGSVGElement, DesignaliProps>(
  ({ color = "currentColor", ...props }, forwardedRef) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        {...props}
        ref={forwardedRef}
      >
        <path d="M21 15V5a2 2 0 0 0-2-2H9" />
        <path d="m2 2 20 20" />
        <path d="M3.6 3.6c-.4.3-.6.8-.6 1.4v16l4-4h10" />
      </svg>
    );
  },
);

export default MessageSquareOff;
