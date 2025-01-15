import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Shirt01 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M5.74,12l-2.7-2.61c-.7-.67-1.04-1.01-1.04-1.43s.35-.75,1.04-1.43l2-1.94c.35-.34.52-.5.73-.63.21-.12.44-.2.9-.35l1.65-.53c.24-.08.36-.12.44-.07.08.05.11.18.16.45.27,1.41,1.55,2.47,3.08,2.47s2.81-1.07,3.08-2.47c.05-.27.08-.4.16-.45.08-.05.2,0,.44.07l1.65.53c.47.15.7.23.9.35.21.12.38.29.73.63l2,1.94c.7.67,1.04,1.01,1.04,1.43s-.35.75-1.04,1.43l-2.7,2.61" />
        <path d="M18.22,9.18v10.03c0,1.22-.8,2.25-1.89,2.43-1.32.22-2.84.37-4.51.36-1.53-.01-2.93-.15-4.16-.36-1.09-.18-1.88-1.22-1.88-2.43v-10.03" />
      </svg>
    );
  },
);

export default Shirt01;
