import * as React from "react";

import type { DesignaliProps } from "../../types";

export const ArrowDown = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path  d="M12.03,2v20"/>
  <path  d="M22.03,12l-10,10L2.03,12"/>
</svg>
    );
  },
);

export default ArrowDown;
