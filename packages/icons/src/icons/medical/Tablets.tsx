import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Tablets = React.forwardRef<SVGSVGElement, DesignaliProps>(
  ({ color = "currentColor", ...props }, forwardedRef) => {
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
      >
        <circle cx="7" cy="7" r="5" />
        <circle cx="17" cy="17" r="5" />
        <path d="M12 17h10" />
        <path d="m3.46 10.54 7.08-7.08" />
      </svg>
    );
  },
);

export default Tablets;
