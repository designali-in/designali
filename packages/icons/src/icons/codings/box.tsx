import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Box = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M21,8c0-.71-.38-1.37-1-1.73l-7-4c-.62-.36-1.38-.36-2,0l-7,4c-.62.36-1,1.02-1,1.73v8c0,.71.38,1.37,1,1.73l7,4c.62.36,1.38.36,2,0l7-4c.62-.36,1-1.02,1-1.73V8Z" />
        <path d="M3.3,7l8.7,5,8.7-5" />
        <path d="M12,22v-10" />
      </svg>
    );
  },
);

export default Box;
