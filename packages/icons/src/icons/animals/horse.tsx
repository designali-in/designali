import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Horse = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M17.04,7.22c.28.85,1.07,1.28,1.96,1.28l1.5,1.5c.61,0,1.23-.45,1.5-1l-2.03-3.9s.28-2.65-1.66-3.1l-.8,1.5c-2,.5-3.31,1.94-3.83,3.5l-.67,2c-2.15,1.54-3.68,1.18-5.31.68-1.03-.32-2.22-.16-2.98.61-.45.45-.71,1.07-.71,1.71v10" />
        <path d="M4.71,10.29l-.95-.66c-.17-.08-.35-.13-.54-.13-.67,0-1.21.54-1.21,1.21v3.79" />
        <path d="M17.52,7.97l-.12.17c-.57.85-.68,1.92-.3,2.87.26.65.32,1.35.19,2.03-.19.93-1,2.43-1.79,2.96v6" />
        <path d="M12.41,22v-6" />
        <path d="M7.96,17.11s1.76.95,4.45-.17" />
        <path d="M8.5,16c-.5,1.5-1.42,2-1.42,2v4" />
      </svg>
    );
  },
);

export default Horse;
