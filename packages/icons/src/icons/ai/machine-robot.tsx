
import * as React from "react";

import type { DesignaliProps } from "../../types";

export const MachineRobot = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path  d="M17,13v-5c0-2.76-2.24-5-5-5s-5,2.24-5,5v5c0,1.87,0,2.8.4,3.5.26.46.64.83,1.1,1.1.7.4,1.63.4,3.5.4s2.8,0,3.5-.4c.46-.26.83-.64,1.1-1.1.4-.7.4-1.63.4-3.5Z"/>
  <path  d="M18,21c0-1.1.9-2,2-2s2,.9,2,2"/>
  <path  d="M2,21c0-1.1.9-2,2-2s2,.9,2,2"/>
  <path  d="M13.99,7.5h0"/>
  <path  d="M10,7.5h0"/>
  <path  d="M20,19v-4c0-1.89,0-2.83-.59-3.41s-1.53-.59-3.41-.59h-8c-1.89,0-2.83,0-3.41.59-.59.59-.59,1.53-.59,3.41v4"/>
</svg>
    );
  },
);

export default MachineRobot;
