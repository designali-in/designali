import * as React from "react";

import type { DesignaliProps } from "../types";

export const Dog = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M4,11.25c-.29,1.12-.44,2.27-.44,3.43,0,4.33,3.72,6.68,8.3,6.68s8.3-2.36,8.3-6.68c0-1.16-.18-2.32-.51-3.43" />
        <path d="M8.23,8.4c-.4,1.09-1.12,2.1-2.43,2.59-2,.75-3.71-.31-3.79-1.04-.12-1.03,1.22-6.77,4.15-7.26,1.99-.33,3.79.88,3.79,2.32,1.31-.33,2.69-.32,3.99.04,0-1.44,1.91-2.69,3.91-2.36,2.93.49,4.27,6.23,4.15,7.26-.08.73-1.79,1.79-3.79,1.04-1.31-.49-1.92-1.5-2.32-2.59" />
        <path d="M11.08,16.44h1.56l-.78.78-.78-.78Z" />
        <path d="M7.71,14.1v.52" />
        <path d="M16.01,14.1v.52" />
      </svg>
    );
  },
);

export default Dog;
