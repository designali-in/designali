import * as React from "react";

import type { DesignaliProps } from "../../types";

export const BounceRight = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path
          fill="none"
          d="M15.25,9.76c-2.35,3.35-3.46,7.96-4.17,11.22-.15.66-.22,1-.37,1.02-.15.02-.31-.3-.62-.93-1.5-3.01-4.6-5.68-7.07-3.4"
        />
        <circle cx="18.59" cy="4.41" r="2.41" />
      </svg>
    );
  },
);

export default BounceRight;
