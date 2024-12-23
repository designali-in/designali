import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Building03 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M16,10l2.15.64c1.37.41,2.06.62,2.46,1.15.4.53.4,1.25.4,2.68v7.52" />
        <path d="M3,22V6.72c0-2.51,0-3.77.79-4.39.79-.62,1.96-.28,4.29.39l5,1.45c1.41.41,2.11.61,2.52,1.17.41.56.41,1.31.41,2.83v13.83" />
        <path d="M6.5,22v-5h6v5" />
        <line x1="3.23" y1="22" x2="21.3" y2="22" />
        <line x1="7.72" y1="11.35" x2="11.28" y2="11.35" />
        <line x1="7.72" y1="7.68" x2="11.28" y2="7.68" />
      </svg>
    );
  },
);

export default Building03;
