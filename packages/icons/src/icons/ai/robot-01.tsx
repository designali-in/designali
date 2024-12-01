import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Robot01 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M12,4v-2" />
        <path d="M19,22c0-3.87-3.13-7-7-7s-7,3.13-7,7" />
        <path d="M5.5,6.67c0-.62,0-.93.07-1.18.18-.69.72-1.23,1.41-1.41.25-.07.56-.07,1.18-.07h7.67c.62,0,.93,0,1.18.07.69.18,1.23.72,1.41,1.41.07.25.07.56.07,1.18,0,1.24,0,1.86-.14,2.37-.37,1.38-1.45,2.46-2.83,2.83-.51.14-1.13.14-2.37.14h-2.33c-1.24,0-1.86,0-2.37-.14-1.38-.37-2.46-1.45-2.83-2.83-.14-.51-.14-1.13-.14-2.37Z" />
      </svg>
    );
  },
);

export default Robot01;
