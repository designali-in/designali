import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Building02 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M15,2h-6c-3.31,0-4,.69-4,4v16h14V6c0-3.31-.69-4-4-4Z" />
        <line x1="3.23" y1="22" x2="20.77" y2="22" />

        <line x1="9.71" y1="9.51" x2="14.29" y2="9.51" />
        <line x1="9.71" y1="5.84" x2="14.29" y2="5.84" />
        <line x1="9.71" y1="13.18" x2="14.29" y2="13.18" />

        <path d="M9,22v-5h6v5" />
      </svg>
    );
  },
);

export default Building02;
