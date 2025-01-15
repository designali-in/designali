import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Perfume = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
       
       <path  d="M2,16.03c0,1.96.76,3.75,2.01,5.08.69.74,1.31.88,2.32.88h6.34c1,0,1.62-.14,2.32-.88,1.25-1.33,2.01-3.12,2.01-5.08,0-3.01-1.79-5.6-4.37-6.78-.44-.2-.83-.26-1.32-.26h-3.64c-.48,0-.87.05-1.32.26-2.58,1.18-4.37,3.77-4.37,6.78Z"/>
  <path  d="M11,6v-1.5c0-1.05-.37-1.5-1.5-1.5s-1.5.45-1.5,1.5v1.5"/>
  <path  d="M12.21,9v-1.5c0-1.05-.65-1.5-2.6-1.5s-2.6.45-2.6,1.5v1.5"/>
  <path  d="M6,4h2M11,4h5"/>
  <circle  cx="19" cy="5" r="3"/>
</svg>
    );
  },
);

export default Perfume;
