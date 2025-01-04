import * as React from "react";

import type { DesignaliProps } from "../../types";

export const ScreenShareOff = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path  d="M13,3H4c-1.1,0-2,.9-2,2v10c0,1.1.9,2,2,2h16c1.1,0,2-.9,2-2v-3"/>
  <path  d="M8,21h8"/>
  <path  d="M12,17v4"/>
  <path  d="M22,3l-5,5"/>
  <path  d="M17,3l5,5"/>
</svg>
    );
  },
);

export default ScreenShareOff;
