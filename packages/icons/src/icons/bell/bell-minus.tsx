import * as React from "react";

import type { DesignaliProps } from "../../types";

export const BellMinus = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
  <path  d="M15,8h6"/>
  <path  d="M16.24,3.76c-2.34-2.34-6.14-2.34-8.49,0-1.13,1.13-1.76,2.65-1.76,4.24,0,4.5-1.41,5.96-2.74,7.33-.37.41-.34,1.04.06,1.41.18.17.42.26.67.26h16c.55,0,1-.45,1-1,0-.25-.09-.49-.26-.67-.92-.95-1.62-2.08-2.07-3.33"/>
</svg>
    );
  },
);

export default BellMinus;
