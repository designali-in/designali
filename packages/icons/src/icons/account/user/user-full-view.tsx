import * as React from "react";

import type { DesignaliProps } from "../../../types";

export const UserFullView = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M15,5c0,1.66-1.76,3.5-3,3.5s-3-1.84-3-3.5,1.34-3,3-3,3,1.34,3,3Z" />
        <path d="M9.95,7.28l-2,1.72c-1.52,1.34-2.51,3.6-1.62,5.71.19.45.63.75,1.11.75s1.3-.16,1.46.48l1.1,4.47c.23.93,1.05,1.59,1.99,1.59s1.77-.65,1.99-1.59l1.1-4.47c.16-.64.97-.48,1.46-.48s.92-.29,1.11-.75c.89-2.11-.1-4.37-1.62-5.71l-1.92-1.81" />
      </svg>
    );
  },
);

export default UserFullView;
