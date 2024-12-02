import * as React from "react";

import type { DesignaliProps } from "../../types";

export const AiBrain03 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M4,16.5c0,1.66,1.34,3,3,3,0,1.38,1.12,2.5,2.5,2.5s2.5-1.12,2.5-2.5c0,1.38,1.12,2.5,2.5,2.5s2.5-1.12,2.5-2.5c1.66,0,3-1.34,3-3,0-.57-.16-1.1-.43-1.55,1.39-.27,2.43-1.48,2.43-2.95s-1.05-2.68-2.43-2.95c.27-.45.43-.98.43-1.55,0-1.66-1.34-3-3-3,0-1.38-1.12-2.5-2.5-2.5s-2.5,1.12-2.5,2.5c0-1.38-1.12-2.5-2.5-2.5s-2.5,1.12-2.5,2.5c-1.66,0-3,1.34-3,3,0,.57.16,1.1.43,1.55-1.39.27-2.43,1.48-2.43,2.95s1.05,2.68,2.43,2.95c-.27.45-.43.98-.43,1.55Z" />
        <path d="M12.58,14.5l-1.46-4.52c-.09-.28-.37-.48-.69-.48s-.6.19-.69.48l-1.46,4.52M15.27,9.5v5M8.81,13h3.23" />
      </svg>
    );
  },
);

export default AiBrain03;
