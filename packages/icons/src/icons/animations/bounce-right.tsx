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
          d="M15.23,9.05c-2.4,2.48-4.46,8.66-5.18,11.92-.15.66-.22.99-.37,1.01-.15.02-.31-.29-.62-.93-1.5-3.01-4.59-5.67-7.06-3.4"
        />
        <circle cx="19.59" cy="4.41" r="2.41" />
      </svg>
    );
  },
);

export default BounceRight;
