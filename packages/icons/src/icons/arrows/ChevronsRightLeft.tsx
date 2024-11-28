import * as React from "react";

import type { DesignaliProps } from "../../types";

export const ChevronsRightLeft = React.forwardRef<
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
      <path d="m20 17-5-5 5-5" />
      <path d="m4 17 5-5-5-5" />
    </svg>
  );
});

export default ChevronsRightLeft;
