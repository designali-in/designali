import * as React from "react";

import type { DesignaliProps } from "../../types";

export const CameraOff = React.forwardRef<SVGSVGElement, DesignaliProps>(
  ({  ...props }, forwardedRef) => {
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
      <line  x1="2" y1="2" x2="22" y2="22"/>
  <path  d="M7,7h-3c-1.1,0-2,.9-2,2v9c0,1.1.9,2,2,2h16"/>
  <path  d="M9.5,4h5l2.5,3h3c1.1,0,2,.9,2,2v7.5"/>
  <path  d="M14.12,15.12c-1.14,1.2-3.04,1.26-4.24.12-1.2-1.14-1.26-3.04-.12-4.24.04-.04.08-.08.12-.12"/>
</svg>
    );
  },
);

export default CameraOff;
