import * as React from "react";

import type { DesignaliProps } from "../../types";

export const BookOpenText = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M12,7v14" />
        <path d="M16,12h2" />
        <path d="M16,8h2" />
        <path d="M3,18c-.55,0-1-.45-1-1V4c0-.55.45-1,1-1h5c2.21,0,4,1.79,4,4,0-2.21,1.79-4,4-4h5c.55,0,1,.45,1,1v13c0,.55-.45,1-1,1h-6c-1.66,0-3,1.34-3,3,0-1.66-1.34-3-3-3H3Z" />
        <path d="M6,12h2" />
        <path d="M6,8h2" />
      </svg>
    );
  },
);

export default BookOpenText;
