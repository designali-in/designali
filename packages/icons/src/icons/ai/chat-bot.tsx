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
        <path d="M11,8h2c2.83,0,4.24,0,5.12.88s.88,2.29.88,5.12,0,4.24-.88,5.12-2.29.88-5.12.88h-1s-.5,2-4,2c0,0,1-1.01,1-2.02-1.55-.05-2.48-.22-3.12-.86-.88-.88-.88-2.29-.88-5.12s0-4.24.88-5.12c.88-.88,2.29-.88,5.12-.88Z" />
        <path d="M19,11.5h.5c.93,0,1.4,0,1.75.2.23.13.42.32.55.55.2.35.2.82.2,1.75s0,1.4-.2,1.75c-.13.23-.32.42-.55.55-.35.2-.82.2-1.75.2h-.5" />
        <path d="M5,11.5h-.5c-.93,0-1.4,0-1.75.2-.23.13-.42.32-.55.55-.2.35-.2.82-.2,1.75s0,1.4.2,1.75c.13.23.32.42.55.55.35.2.82.2,1.75.2h.5" />
        <path d="M13.5,3.5c0,.83-.67,1.5-1.5,1.5s-1.5-.67-1.5-1.5.67-1.5,1.5-1.5,1.5.67,1.5,1.5Z" />
        <path d="M12,5v3" />
        <path d="M9,12v1M15,12v1" />
        <path d="M10,16.5s.67.5,2,.5,2-.5,2-.5" />
      </svg>
    );
  },
);

export default ChatBot;
