import * as React from "react";

import type { DesignaliProps } from "../../types";

export const EaseCurveControlPoints = React.forwardRef<
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
      <path
        fill="none"
        d="M22,3.11c-5.56,0-7.8,4.49-10,8.89S7.56,20.89,2,20.89"
      />
      <circle cx="4.41" cy="4.41" r="2.41" />
      <line x1="6.81" y1="4.41" x2="8.61" y2="4.41" />
      <line x1="11.59" y1="4.41" x2="13.1" y2="4.41" />
      <circle cx="19.59" cy="19.59" r="2.41" />
      <line x1="17.19" y1="19.59" x2="15.39" y2="19.59" />
      <line x1="12.43" y1="19.59" x2="10.91" y2="19.59" />
    </svg>
  );
});

export default EaseCurveControlPoints;
