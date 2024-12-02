import * as React from "react";

import type { DesignaliProps } from "../../types";

export const ChatBot = React.forwardRef<SVGSVGElement, DesignaliProps>(
  ({ ...props }, forwardedRef) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
        ref={forwardedRef}
      >
        <path d="M8.5,18.5l-3.5,3.5v-12.25c0-.97.78-1.75,1.75-1.75h10.5c.97,0,1.75.78,1.75,1.75v7c0,.97-.78,1.75-1.75,1.75h-8.75Z" />

        <path d="M19,11.5h.5c.93,0,1.4,0,1.75.2.23.13.42.32.55.55.2.35.2.82.2,1.75s0,1.4-.2,1.75c-.13.23-.32.42-.55.55-.35.2-.82.2-1.75.2h-.5" />
        <path d="M5,11.5h-.5c-.93,0-1.4,0-1.75.2-.23.13-.42.32-.55.55-.2.35-.2.82-.2,1.75s0,1.4.2,1.75c.13.23.32.42.55.55.35.2.82.2,1.75.2h.5" />
        <path d="M13.5,3.5c0,.83-.67,1.5-1.5,1.5s-1.5-.67-1.5-1.5.67-1.5,1.5-1.5,1.5.67,1.5,1.5Z" />
        <path d="M12,5v3" />
        <path d="M9,11.21v1M15,11.21v1" />
        <path d="M10,14.79s.67.5,2,.5,2-.5,2-.5" />
      </svg>
    );
  },
);

export default ChatBot;
