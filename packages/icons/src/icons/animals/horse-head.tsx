import * as React from "react";

import type { DesignaliProps } from "../../types";

export const HorseHead = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M14.22,22c-5-5.56-1.67-8.89-1.67-8.89,1.03,2.74,4.44,2.22,4.44,2.22l1.97,1.51c.44.28,1.01.17,1.33-.25l1.47-1.78c.33-.44.29-1.06-.08-1.46l-1.42-1.52c-.65-.7-1.09-1.6-1.24-2.57-.18-1.15-.92-2.26-1.61-2.92l-.99-1.01,1.11-3.33s-2.86.03-3.89,2.22c-6.67.56-11.67,5.04-11.67,17.78" />
      </svg>
    );
  },
);

export default HorseHead;
