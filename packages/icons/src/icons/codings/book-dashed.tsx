import * as React from "react";

import type { DesignaliProps } from "../../types";

export const BookDashed = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M12,17h1.5" />
        <path d="M12,22h1.5" />
        <path d="M12,2h1.5" />
        <path d="M17.5,22h1.5c.55,0,1-.45,1-1" />
        <path d="M17.5,2h1.5c.55,0,1,.45,1,1v1.5" />
        <path d="M20,14v3h-2.5" />
        <path d="M20,8.5v1.5" />
        <path d="M4,10v-1.5" />
        <path d="M4,19.5v-5.5" />
        <path d="M4,4.5c0-1.38,1.12-2.5,2.5-2.5h1.5" />
        <path d="M8,22h-1.5c-1.38,0-2.5-1.12-2.5-2.5s1.12-2.5,2.5-2.5h1.5" />
      </svg>
    );
  },
);

export default BookDashed;
