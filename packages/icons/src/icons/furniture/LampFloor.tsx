import * as React from "react";

import { DesignaliProps } from "../../types";

export const LampFloor = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        {...props}
        ref={forwardedRef}
      >
        <path d="M9 2h6l3 7H6l3-7Z" />
        <path d="M12 9v13" />
        <path d="M9 22h6" />
      </svg>
    );
  },
);

export default LampFloor;
