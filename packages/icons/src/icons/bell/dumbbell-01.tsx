import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Dumbbell01 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M14.38,14.38l-4.77-4.77" />
        <path d="M18.61,21.42c-.78.78-2.03.78-2.81,0-.78-.78-.78-2.03,0-2.81l-1.75,1.76c-.78.78-2.03.78-2.81,0s-.78-2.03,0-2.81l6.32-6.32c.78-.78,2.03-.78,2.81,0s.78,2.03,0,2.81h0l-1.76,1.75c.78-.78,2.03-.78,2.81,0,.78.78.78,2.03,0,2.81l-2.81,2.81Z" />
        <path d="M21.43,21.43l-1.39-1.39" />
        <path d="M3.96,3.96l-1.39-1.39" />
        <path d="M6.44,12.76c-.78.78-2.03.78-2.81,0s-.78-2.03,0-2.81l1.76-1.75c-.78.78-2.03.78-2.81,0-.78-.78-.78-2.03,0-2.81l2.81-2.81c.78-.78,2.03-.78,2.81,0,.78.78.78,2.03,0,2.81h0l1.75-1.76c.78-.78,2.03-.78,2.81,0,.78.78.78,2.03,0,2.81h0l-6.32,6.32Z" />
      </svg>
    );
  },
);

export default Dumbbell01;
