import * as React from "react";

import type { DesignaliProps } from "../../types";

export const AnimationMoveRight = React.forwardRef<
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
      <path fill="none" d="M17.98,16l4-4-4-4" />
      <path d="M11.43,12h10.55" />
      <circle cx="4.16" cy="12" r="2.16" />
    </svg>
  );
});

export default AnimationMoveRight;
