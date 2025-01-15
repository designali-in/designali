import * as React from "react";

import type { DesignaliProps } from "../../types";

export const ArrowDownAZ = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path  d="M2,16.71l4.71,4.71,4.71-4.71"/>
  <path  d="M6.71,21.41V2.59"/>
  <path  d="M22,7.29h-5.88"/>
  <path  d="M16.12,9.65v-4.12c0-1.62,1.32-2.94,2.94-2.94s2.94,1.32,2.94,2.94v4.12"/>
  <path  d="M16.12,14.35h5.88l-5.88,7.06h5.88"/>
</svg>
    );
  },
);

export default ArrowDownAZ;
