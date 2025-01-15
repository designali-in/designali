import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Airplay = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
       
       <path  d="M5,17h-1c-1.1,0-2-.9-2-2V5c0-1.1.9-2,2-2h16c1.1,0,2,.9,2,2v10c0,1.1-.9,2-2,2h-1"/>
  <path  d="M12,15l5,6H7l5-6Z"/>
</svg>
    );
  },
);

export default Airplay;
