import * as React from "react";

import type { DesignaliProps } from "../../types";

export const FlagTriangleRight = React.forwardRef<
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
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      {...props}
      ref={forwardedRef}
    >
      <path d="M7 22V2l10 5-10 5" />
    </svg>
  );
});

export default FlagTriangleRight;
