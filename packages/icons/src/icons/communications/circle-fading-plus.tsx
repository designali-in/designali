import * as React from "react";

import type { DesignaliProps } from "../../types";

export const CircleFadingPlus = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M12,2c5.52,0,10,4.48,10,10,0,2.5-.93,4.91-2.62,6.75" />
        <path d="M12,8v8" />
        <path d="M16,12H8" />
        <path d="M2.5,8.88c-.32.97-.49,1.98-.5,3" />
        <path d="M2.83,16c.56,1.29,1.39,2.45,2.43,3.4" />
        <path d="M4.64,5.24c.28-.3.58-.59.89-.86" />
        <path d="M8.64,21.42c2.49.89,5.24.75,7.63-.38" />
      </svg>
    );
  },
);

export default CircleFadingPlus;
