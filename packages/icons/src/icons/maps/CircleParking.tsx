import * as React from "react";

import { DesignaliProps } from "../types";

export const CircleParking = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M2 12a10 10 0 1 1 10 10" />
        <path d="m2 22 10-10" />
        <path d="M8 22H2v-6" />
      </svg>
    );
  },
);

export default CircleParking;
