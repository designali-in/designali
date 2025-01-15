import * as React from "react";

import type { DesignaliProps } from "../../types";

export const EthernetPort = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M15,20l3-3h2c1.1,0,2-.9,2-2V6c0-1.1-.9-2-2-2H4c-1.1,0-2,.9-2,2v9c0,1.1.9,2,2,2h2l3,3h6Z" />
        <path d="M6,8v1" />
        <path d="M10,8v1" />
        <path d="M14,8v1" />
        <path d="M18,8v1" />
      </svg>
    );
  },
);

export default EthernetPort;
