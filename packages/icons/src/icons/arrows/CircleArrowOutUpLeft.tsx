import * as React from "react";

import type { DesignaliProps } from "../../types";

export const CircleArrowOutUpLeft = React.forwardRef<
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
      <path d="M2 8V2h6" />
      <path d="m2 2 10 10" />
      <path d="M12 2A10 10 0 1 1 2 12" />
    </svg>
  );
});

export default CircleArrowOutUpLeft;
