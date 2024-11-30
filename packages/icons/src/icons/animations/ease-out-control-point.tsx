import * as React from "react";

import type { DesignaliProps } from "../../types";

export const EaseOutControlPoint = React.forwardRef<
  SVGSVGElement,
  DesignaliProps
>(({ ...props }, forwardedRef) => {
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
      <path fill="none" d="M4,22S11,4.41,22,4.41" />
      <circle cx="4.41" cy="4.41" r="2.41" />
      <line x1="6.81" y1="4.41" x2="8.61" y2="4.41" />
      <line x1="11.57" y1="4.41" x2="13.09" y2="4.41" />
    </svg>
  );
});

export default EaseOutControlPoint;
