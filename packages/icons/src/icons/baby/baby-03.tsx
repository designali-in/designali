import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Baby03 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M8.98,12.04h.01" />
        <path d="M15.02,12.04h.01" />
        <path d="M9.99,16.07c.5.3,1.21.5,2.01.5s1.51-.2,2.01-.5" />
        <path d="M19.05,6.3c.91,1.14,1.53,2.49,1.81,3.93,1,.48,1.42,1.69.93,2.69-.2.41-.53.74-.93.93-1.05,4.9-5.87,8.01-10.76,6.96-3.49-.75-6.21-3.47-6.96-6.96-1-.48-1.42-1.69-.93-2.69.2-.41.53-.74.93-.93.86-4.21,4.56-7.24,8.86-7.25,2.01,0,3.53,1.11,3.53,2.52s-.91,2.52-2.01,2.52c-.81,0-1.51-.4-1.51-1.01" />
      </svg>
    );
  },
);

export default Baby03;
