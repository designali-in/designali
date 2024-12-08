import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Camel = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M12,14.22c-.69-.41-1-.9-1-1.22M12,14.22v6.28h-3.5l1.5-2-1-4.5c-3,0-4.77-3.5-4.77-5.5h-1.23c-.55,0-1-.45-1-1,0-1.1.9-2,2-2l1.7-.3.27-.4c.4-.6,1.21-.74,1.79-.31.53.4.66,1.14.29,1.69l-.35.52c-.17.67-.4,2.4.8,2.8.67.17,2.1,0,2.5-2,.5-1.5,1.5-4,3.5-4,1.62,0,1.93,2.28,3.83,3.95.9.79,1.67,1.83,1.67,3.03v10.02h-3l1-2-.5-3.77c-1.71.53-3.96.41-5.5-.51ZM19.3,8.5s2.7.5,2.7,4" />
      </svg>
    );
  },
);

export default Camel;
