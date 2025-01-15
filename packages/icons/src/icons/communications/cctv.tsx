import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Cctv = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M17.06,11.51h3.63c.55,0,1,.45,1,1,0,.15-.04.31-.11.45l-2.03,4.07c-.25.49-.85.69-1.34.45-.15-.07-.27-.18-.37-.31l-2.12-2.97" />
        <path d="M17.42,8.56c.49.25.69.85.45,1.34l-3.11,6.21c-.25.49-.85.69-1.34.45,0,0,0,0,0,0L3.92,11.81c-1.44-.72-2.02-2.47-1.3-3.91l1.38-2.79c.72-1.44,2.48-2.02,3.92-1.3,0,0,0,0,0,0l9.5,4.75Z" />
        <path d="M2.31,18.51h3.76c.76,0,1.46-.42,1.8-1.1l1.44-2.9" />
        <path d="M2.31,20.51v-4" />
        <path d="M7.31,8.51h.01" />
      </svg>
    );
  },
);

export default Cctv;
