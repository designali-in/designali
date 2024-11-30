import * as React from "react";

import type { DesignaliProps } from "../../types";

export const KeyframeAlignCenter = React.forwardRef<
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
      <rect
        x="9.1"
        y="9.1"
        width="5.8"
        height="5.8"
        rx="1.08"
        ry="1.08"
        transform="translate(12 -4.97) rotate(45)"
      />
      <line x1="4.97" y1="12" x2="2" y2="12" />
      <line x1="22" y1="12" x2="19.03" y2="12" />
      <line x1="12" y1="19.03" x2="12" y2="22" />
      <line x1="12" y1="2" x2="12" y2="4.97" />
    </svg>
  );
});

export default KeyframeAlignCenter;
