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
      <path d="M10,20h2M15,20h2M17,20c0,1.1.9,2,2,2s2-.9,2-2-.9-2-2-2-2,.9-2,2Z" />
      <path d="M12,4h2M7,4h2M7,4c0,1.1-.9,2-2,2s-2-.9-2-2,.9-2,2-2,2,.9,2,2Z" />
    </svg>
  );
});

export default EaseCurveControlPoints;
