import * as React from "react";

import type { DesignaliProps } from "../../types";

export const PowerOff = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M18.36,6.57c2.19,2.19,3.1,5.34,2.41,8.36" />
        <path d="M6.16,6.09c-3.81,3.2-4.3,8.87-1.1,12.68,3.2,3.81,8.87,4.3,12.68,1.1.4-.34.77-.7,1.1-1.1" />
        <path d="M12,1.93v4" />
        <path d="M2,1.93l20,20" />
      </svg>
    );
  },
);

export default PowerOff;
