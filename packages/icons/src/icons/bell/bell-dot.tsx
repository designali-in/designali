import * as React from "react";

import type { DesignaliProps } from "../../types";

export const BellDot = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path  d="M10.27,21c.55.96,1.78,1.28,2.73.73.3-.18.56-.43.73-.73"/>
  <path  d="M13.92,2.31c-3.14-1.06-6.54.63-7.6,3.77-.21.62-.31,1.26-.31,1.92,0,4.5-1.41,5.96-2.74,7.33-.37.41-.34,1.04.07,1.41.18.17.42.26.67.26h16c.55,0,1-.45,1-1,0-.25-.09-.49-.26-.67-.21-.21-.4-.43-.58-.66"/>
  <circle  cx="18" cy="8" r="3"/>
</svg>
    );
  },
);

export default BellDot;
