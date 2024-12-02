import * as React from "react";

import type { DesignaliProps } from "../../types";

export const AnimationMoveBottom = React.forwardRef<
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
      <path fill="none" d="M8,18l4,4,4-4" />
      <path fill="none" d="M12,11.45v10.55" />
      <circle cx="12" cy="4.41" r="2.41" />
    </svg>
  );
});

export default AnimationMoveBottom;
