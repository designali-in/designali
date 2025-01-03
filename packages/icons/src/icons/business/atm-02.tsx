import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Atm02 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M18.93,13.95l-.67-3.65c-.29-1.58-.43-2.36-1.01-2.83-.57-.47-1.4-.47-3.04-.47h-4.43c-1.65,0-2.47,0-3.04.47-.57.47-.72,1.25-1.01,2.83l-.67,3.65c-.6,3.27-.9,4.91.02,5.98.93,1.07,2.63,1.07,6.05,1.07h1.72c3.42,0,5.13,0,6.05-1.07.93-1.07.62-2.71.02-5.98Z" />
        <path d="M21,11c.16-.08.29-.18.41-.3.59-.61.59-1.59.59-3.54s0-2.94-.59-3.54-1.53-.61-3.41-.61H6c-1.89,0-2.83,0-3.41.61-.59.61-.59,1.59-.59,3.54s0,2.94.59,3.54c.12.13.26.23.41.3" />
        <line x1="10.05" y1="7.04" x2="7.75" y2="20.93" />
        <line x1="14.91" y1="15.38" x2="14.91" y2="16.98" />
      </svg>
    );
  },
);

export default Atm02;
