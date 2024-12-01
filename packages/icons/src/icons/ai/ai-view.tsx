import * as React from "react";

import type { DesignaliProps } from "../../types";

export const AiWiew = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M4.75,2.75l2.25,2.25v3M4.75,3.5c.41,0,.75-.34.75-.75s-.34-.75-.75-.75-.75.34-.75.75.34.75.75.75Z" />
        <path d="M19.25,2.75l-2.25,2.25v3M19.25,3.5c-.41,0-.75-.34-.75-.75s.34-.75.75-.75.75.34.75.75-.34.75-.75.75Z" />
        <path d="M12,2.75v4.25M12,3.5c.41,0,.75-.34.75-.75s-.34-.75-.75-.75-.75.34-.75.75.34.75.75.75Z" />
        <path d="M15,16c0-1.66-1.34-3-3-3s-3,1.34-3,3,1.34,3,3,3,3-1.34,3-3Z" />
        <path d="M12,10c6,0,10,6,10,6,0,0-4,6-10,6s-10-6-10-6c0,0,4-6,10-6Z" />
      </svg>
    );
  },
);

export default AiWiew;
