import * as React from "react";

import type { DesignaliProps } from "../../types";

export const MedalThirdPlace = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M10.5,14c.33-.65.78-1,1.5-1s1.5.46,1.5,1.25c0,.69-.56,1.25-1.25,1.25.69,0,1.25.56,1.25,1.25,0,.79-.77,1.25-1.5,1.25s-1.17-.35-1.5-1" />
        <circle cx="12" cy="15.5" r="6.5" />
        <path d="M9,9.5l-3.5-7.5" />
        <path d="M15,9.5l3.5-7.5" />
        <path d="M15,2l-1,2.5" />
        <path d="M12.5,9l-3-7" />
      </svg>
    );
  },
);

export default MedalThirdPlace;
