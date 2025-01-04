import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Volume = React.forwardRef<SVGSVGElement, DesignaliProps>(
  ({  ...props }, forwardedRef) => {
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
       <path  d="M17.62,2.88c0-.49-.4-.88-.88-.88-.23,0-.46.09-.62.26l-4.23,4.23c-.33.33-.78.52-1.25.52h-3.02c-.69,0-1.25.56-1.25,1.25v7.5c0,.69.56,1.25,1.25,1.25h3.02c.47,0,.92.18,1.25.52l4.23,4.23c.34.34.9.34,1.25,0,.17-.17.26-.39.26-.62V2.88Z"/>
       </svg>
    );
  },
);

export default Volume;
