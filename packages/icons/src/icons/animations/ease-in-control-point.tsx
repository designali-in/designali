import * as React from "react";

import type { DesignaliProps } from "../../types";

export const EaseInControlPoint = React.forwardRef<
  SVGSVGElement,
  DesignaliProps
>(({ color = "currentColor", ...props }, forwardedRef) => {
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
      <path fill="none" d="M20,3S13,19,2,19" />
      <path d="M11,19h2M16,19h2M18,19c0,1.1.9,2,2,2s2-.9,2-2-.9-2-2-2-2,.9-2,2Z" />
    </svg>
  );
});

export default EaseInControlPoint;
