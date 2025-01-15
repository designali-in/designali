import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Hoodie = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
       
       <path  d="M17.64,12c-.1.75-.06,1.5.02,3.01l.34,4.51c0,.71-.12,1.08-.75,1.43-2.61,1.4-7.88,1.4-10.49,0-.64-.34-.75-.72-.75-1.43l.34-4.51c.08-1.51.12-2.27.02-3.01"/>
  <path  d="M7.4,6.9l3.88,1.85c.35.17.53.25.72.25s.36-.08.72-.25l3.88-1.85c.86-.41,1.29-.61,1.38-1.14.09-.52-.18-.83-.72-1.45-2.72-3.08-7.79-3.08-10.52,0-.55.62-.82.93-.72,1.45.09.52.52.73,1.38,1.14Z"/>
  <path  d="M6.38,6.5c-1.35.27-2.56,1.52-3.39,2.64-.54.72-.81,1.08-.94,1.74-.13.66,0,1.22.29,2.32l1.3,5.13c.23.91,1.36.77,2.36-.24M17.62,6.5c1.35.27,2.56,1.52,3.39,2.64.54.72.81,1.08.94,1.74.13.66,0,1.22-.29,2.32l-1.3,5.13c-.23.91-1.36.76-2.36.27"/>

    <line  x1="10" y1="5.7" x2="12" y2="9"/>
    <line  x1="14" y1="5.7" x2="12" y2="9"/>

  <path  d="M9.89,16.64c.03.24.05.73-.18,1.3s-.58.91-.77,1.06"/>
  <path  d="M14.07,16.64c-.03.24-.05.73.18,1.3s.58.91.77,1.06"/>
</svg>
    );
  },
);

export default Hoodie;
