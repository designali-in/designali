import * as React from "react";

import type { DesignaliProps } from "../../../types";

export const UserStory = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <circle cx="12" cy="8.35" r="2.42" />
        <path
          fill="none"
          d="M7.96,16.96v-1.34c0-.89.72-1.61,1.61-1.61h4.84c.89,0,1.61.72,1.61,1.61v1.34"
        />

        <path fill="none" d="M12,2c5.52,0,10,4.48,10,10s-4.48,10-10,10" />
        <path fill="none" d="M4.7,5.16c1.14-1.22,2.58-2.15,4.2-2.67" />
        <path
          fill="none"
          d="M2.83,8.01c-.53,1.22-.83,2.57-.83,3.99,0,.42.03.82.07,1.23"
        />
        <path d="M4.79,18.93c-.74-.77-1.36-1.67-1.83-2.65" />
        <path d="M8.83,21.49c-.52-.17-1.03-.39-1.5-.65" />
      </svg>
    );
  },
);

export default UserStory;
