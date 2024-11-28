import * as React from "react";

import { DesignaliProps } from "../types";

export const Slice = React.forwardRef<SVGSVGElement, DesignaliProps>(
  ({ color = "currentColor", ...props }, forwardedRef) => {
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
      >
        <path d="m8 14-6 6h9v-3" />
        <path d="M18.37 3.63 8 14l3 3L21.37 6.63a2.12 2.12 0 1 0-3-3Z" />
      </svg>
    );
  },
);

export default Slice;
