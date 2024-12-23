import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Building06 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M12,2h-6c-2.48,0-3,.52-3,3v17h12V5c0-2.48-.52-3-3-3Z" />
        <path d="M18,8h-3v14h6v-11c0-2.48-.52-3-3-3Z" />

        <line x1="7.51" y1="9" x2="10.49" y2="9" />
        <line x1="7.51" y1="5.33" x2="10.49" y2="5.33" />
        <line x1="7.51" y1="12.67" x2="10.49" y2="12.67" />

        <path d="M6,22v-5h6v5" />
      </svg>
    );
  },
);

export default Building06;
