import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Pointer = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M22.05,14c0,4.42-3.58,8-8,8" />
        <path d="M18.05,11v-1c0-1.1-.9-2-2-2s-2,.9-2,2" />
        <path d="M14.05,10v-1c0-1.1-.9-2-2-2s-2,.9-2,2v1" />
        <path d="M10.05,9.5v-5.5c0-1.1-.9-2-2-2s-2,.9-2,2v10" />
        <path d="M18.05,11c0-1.1.9-2,2-2s2,.9,2,2v3c0,4.42-3.58,8-8,8h-2c-2.8,0-4.5-.86-5.99-2.34l-3.6-3.6c-.74-.82-.68-2.08.14-2.82.76-.69,1.92-.69,2.69,0l1.76,1.76" />
      </svg>
    );
  },
);

export default Pointer;
