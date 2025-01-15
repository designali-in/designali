import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Blend = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
       
       <circle  cx="9" cy="9" r="7"/>
  <circle  cx="15" cy="15" r="7"/>
</svg>
    );
  },
);

export default Blend;
