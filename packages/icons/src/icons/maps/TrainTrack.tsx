import * as React from "react";

import type { DesignaliProps } from "../../types";

export const TrainTrack = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M2 17 17 2" />
        <path d="m2 14 8 8" />
        <path d="m5 11 8 8" />
        <path d="m8 8 8 8" />
        <path d="m11 5 8 8" />
        <path d="m14 2 8 8" />
        <path d="M7 22 22 7" />
      </svg>
    );
  },
);

export default TrainTrack;
