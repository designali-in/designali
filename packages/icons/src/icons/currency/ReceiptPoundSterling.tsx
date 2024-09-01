import * as React from "react";

import type { DesignaliProps } from "../types";

export const ReceiptPoundSterling = React.forwardRef<
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
      <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" />
      <path d="M8 13h5" />
      <path d="M10 17V9.5a2.5 2.5 0 0 1 5 0" />
      <path d="M8 17h7" />
    </svg>
  );
});

export default ReceiptPoundSterling;
