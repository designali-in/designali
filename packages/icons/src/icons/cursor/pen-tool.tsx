import * as React from "react";

import type { DesignaliProps } from "../../types";

export const PenTool = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M16,21.7c-.4.4-1.05.4-1.44,0l-1.62-1.62c-.4-.4-.4-1.05,0-1.44l5.7-5.7c.4-.4,1.05-.4,1.44,0l1.62,1.62c.4.4.4,1.05,0,1.44l-5.7,5.7Z" />
        <path d="M18.34,13.23l-1.4-7.02c-.08-.39-.38-.7-.76-.79L3.26,2.03c-.55-.13-1.1.2-1.23.75-.04.16-.04.32,0,.48l3.39,12.91c.09.39.4.68.79.76l7.02,1.4" />
        <path d="M2.31,2.31l7.44,7.44" />
        <circle cx="11.19" cy="11.19" r="2.04" />
      </svg>
    );
  },
);

export default PenTool;
