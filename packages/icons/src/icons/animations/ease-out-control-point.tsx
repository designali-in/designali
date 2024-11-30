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
      <line x1="22" y1="20.9" x2="2" y2="20.9" />
      <line x1="12" y1="20.9" x2="12" y2="16.95" />
      <rect
        x="8.97"
        y="3.85"
        width="5.8"
        height="5.8"
        rx="1.08"
        ry="1.08"
        transform="translate(25.04 3.13) rotate(135)"
      />
    </svg>
  );
});

export default EaseOutControlPoint;
