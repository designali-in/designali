import * as React from "react";

import type { DesignaliProps } from "../../types";

export const JapaneseYen = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M12 9.5V21m0-11.5L6 3m6 6.5L18 3" />
        <path d="M6 15h12" />
        <path d="M6 11h12" />
      </svg>
    );
  },
);

export default JapaneseYen;
