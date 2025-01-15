import * as React from "react";

import type { DesignaliProps } from "../../types";

export const SignalHigh = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
       <path  d="M2,20h.01"/>
  <path  d="M8.67,20v-5.33"/>
  <path  d="M15.33,20v-10.67"/>
  <path  d="M22,20V4"/>
</svg>
    );
  },
);

export default SignalHigh;
