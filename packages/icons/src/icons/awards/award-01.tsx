import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Award01 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M12,12v6" />
        <path d="M12,18c-1.67,0-3.13,1.01-3.88,2.5-.36.71.16,1.5.84,1.5h6.08c.68,0,1.2-.78.84-1.5-.75-1.49-2.21-2.5-3.88-2.5Z" />
        <path d="M5,5h-1.02c-.99,0-1.48,0-1.78.37-.3.37-.22.79-.04,1.62.34,1.59,1.08,2.98,2.09,4.01" />
        <path d="M19,5h1.02c.99,0,1.48,0,1.78.37.3.37.22.79.04,1.62-.34,1.59-1.08,2.98-2.09,4.01" />
        <path d="M12,12c3.87,0,7-3.12,7-6.96,0-.1,0-.2,0-.3-.04-1-.06-1.5-.74-2.12-.68-.62-1.43-.62-2.93-.62h-6.65c-1.5,0-2.25,0-2.93.62-.68.62-.7,1.12-.74,2.12,0,.1,0,.2,0,.3,0,3.84,3.13,6.96,7,6.96Z" />
      </svg>
    );
  },
);

export default Award01;
