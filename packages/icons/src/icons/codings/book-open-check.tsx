import * as React from "react";

import type { DesignaliProps } from "../../types";

export const BookOpenCheck = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M12,21V7" />
        <path d="M16,12l2,2,4-4" />
        <path d="M22,6v-2c0-.55-.45-1-1-1h-5c-2.21,0-4,1.79-4,4,0-2.21-1.79-4-4-4H3c-.55,0-1,.45-1,1v13c0,.55.45,1,1,1h6c1.66,0,3,1.34,3,3,0-1.66,1.34-3,3-3h6c.55,0,1-.45,1-1v-1.3" />
      </svg>
    );
  },
);

export default BookOpenCheck;
