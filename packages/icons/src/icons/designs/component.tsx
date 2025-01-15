import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Component = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M15.54,11.29c-.39.39-.39,1.02,0,1.41l2.38,2.38c.39.39,1.02.39,1.41,0l2.38-2.38c.39-.39.39-1.02,0-1.41l-2.38-2.38c-.39-.39-1.02-.39-1.41,0l-2.38,2.38Z" />
        <path d="M2.3,11.29c-.39.39-.39,1.02,0,1.41l2.38,2.38c.39.39,1.02.39,1.41,0l2.38-2.38c.39-.39.39-1.02,0-1.41l-2.38-2.38c-.39-.39-1.02-.39-1.41,0l-2.38,2.38Z" />
        <path d="M8.92,17.91c-.39.39-.39,1.02,0,1.41,0,0,0,0,0,0l2.38,2.38c.39.39,1.02.39,1.41,0l2.38-2.38c.39-.39.39-1.02,0-1.41,0,0,0,0,0,0l-2.38-2.38c-.39-.39-1.02-.39-1.41,0l-2.38,2.38Z" />
        <path d="M8.92,4.67c-.39.39-.39,1.02,0,1.41l2.38,2.38c.39.39,1.02.39,1.41,0l2.38-2.38c.39-.39.39-1.02,0-1.41l-2.38-2.38c-.39-.39-1.02-.39-1.41,0l-2.38,2.38Z" />
      </svg>
    );
  },
);

export default Component;
