import * as React from "react";

import type { DesignaliProps } from "../../types";

export const ArrowBigDownDash = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path  d="M16.29,7.71v4.29h5.71l-10,10L2,12h5.71v-4.29h8.57Z"/>
  <line  x1="7.71" y1="2" x2="16.29" y2="2"/>
</svg>
    );
  },
);

export default ArrowBigDownDash;
