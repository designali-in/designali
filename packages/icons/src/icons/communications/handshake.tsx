import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Handshake = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M11,16.94l2,2c.83.83,2.17.83,3,0,.83-.83.83-2.17,0-3" />
        <path d="M14,13.94l2.5,2.5c.83.83,2.17.83,3,0,.83-.83.83-2.17,0-3l-3.88-3.88c-1.17-1.17-3.07-1.17-4.24,0l-.88.88c-.83.83-2.17.83-3,0-.83-.83-.83-2.17,0-3l2.81-2.81c1.88-1.87,4.78-2.23,7.06-.87l.47.28c.43.26.93.35,1.42.25l1.74-.35" />
        <path d="M21,2.94l1,11h-2" />
        <path d="M3,2.94l-1,11,6.5,6.5c.83.83,2.17.83,3,0s.83-2.17,0-3" />
        <path d="M3,3.94h8" />
      </svg>
    );
  },
);

export default Handshake;
