import * as React from "react";

import type { DesignaliProps } from "../../types";

export const X = React.forwardRef<SVGSVGElement, DesignaliProps>(
  ({ ...props }, forwardedRef) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        {...props}
        ref={forwardedRef}
      >
        <path
          fill="currentColor"
          strokeWidth={0}
          d="M13.85,10.47l7.26-8.43h-1.72l-6.3,7.32-5.03-7.32H2.25l7.61,11.07-7.61,8.84h1.72l6.65-7.73,5.31,7.73h5.8l-7.89-11.48h0ZM11.5,13.21l-.77-1.1L4.59,3.34h2.64l4.95,7.08.77,1.1,6.44,9.2h-2.64l-5.25-7.51h0Z"
        />
      </svg>
    );
  },
);

export default X;
