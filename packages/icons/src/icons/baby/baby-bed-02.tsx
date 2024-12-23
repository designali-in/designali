import * as React from "react";

import type { DesignaliProps } from "../../types";

export const BabyBed02 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path  d="M12,7v8M16,7v8M8,7v8"/>
  <path  d="M22,17c-2.67,1.87-6.17,3-10,3s-7.33-1.13-10-3"/>
  <path  d="M20,18V6c0-1.1.9-2,2-2M4,18V6c0-1.1-.9-2-2-2"/>
  <path  d="M4,7h16"/>
  <path  d="M4,15h16"/>
</svg>
    );
  },
);

export default BabyBed02;
