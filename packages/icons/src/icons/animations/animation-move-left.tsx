import * as React from "react";

import type { DesignaliProps } from "../../types";

export const AnimationMoveLeft = React.forwardRef<
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
      <path fill="none" d="M6,8l-4,4,4,4" />
      <path fill="none" d="M12.55,12H2" />
      <circle cx="19.59" cy="12" r="2.41" />
    </svg>
  );
});

export default AnimationMoveLeft;
