import * as React from "react";

import type { DesignaliProps } from "../../types";

export const EaseInControlPoint = React.forwardRef<
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
      <path fill="none" d="M20,2S13,19.59,2,19.59" />
      <circle cx="19.59" cy="19.59" r="2.41" />
      <line x1="17.19" y1="19.59" x2="15.39" y2="19.59" />
      <line x1="12.43" y1="19.59" x2="10.91" y2="19.59" />
    </svg>
  );
});

export default EaseInControlPoint;
