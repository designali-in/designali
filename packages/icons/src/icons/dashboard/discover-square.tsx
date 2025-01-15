import * as React from "react";

import type { DesignaliProps } from "../../types";

export const DiscoverSquare = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M12.42,8.1l3.07-1.02c.93-.31,1.4-.47,1.65-.22s.09.71-.22,1.65l-1.02,3.07c-.53,1.59-.79,2.38-1.36,2.95s-1.36.83-2.95,1.36l-3.07,1.02c-.93.31-1.4.47-1.65.22s-.09-.71.22-1.65l1.02-3.07c.53-1.59.79-2.38,1.36-2.95.57-.57,1.36-.83,2.95-1.36Z" />
        <path d="M12,12h0" />
        <rect x="2" y="2" width="20" height="20" rx="4.57" ry="4.57" />
      </svg>
    );
  },
);

export default DiscoverSquare;
