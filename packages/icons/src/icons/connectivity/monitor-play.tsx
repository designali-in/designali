import * as React from "react";

import type { DesignaliProps } from "../../types";

export const MonitorPlay = React.forwardRef<SVGSVGElement, DesignaliProps>(
  ({  ...props }, forwardedRef) => {
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
       <path  d="M10,7.75c0-.41.34-.75.75-.75.14,0,.27.04.39.11l3.66,2.25c.35.22.46.68.25,1.03-.06.1-.15.18-.25.25l-3.66,2.25c-.35.22-.81.11-1.03-.25-.07-.12-.11-.25-.11-.39v-4.5Z"/>
  <path  d="M12,17v4"/>
  <path  d="M8,21h8"/>
  <rect  x="2" y="3" width="20" height="14" rx="2" ry="2"/>
</svg>
    );
  },
);

export default MonitorPlay;
