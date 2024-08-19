import * as React from "react";

import { DesignaliProps } from "../types";

export const Download = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M21,15v4c0,1.1-.9,2-2,2H5c-1.1,0-2-.9-2-2v-4" />
      </svg>
    );
  },
);

export default Download;
