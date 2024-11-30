import * as React from "react";

import type { DesignaliProps } from "../../types";

export const KeyframeDoubleRemove = React.forwardRef<
  SVGSVGElement,
  DesignaliProps
>(({ ...props }, forwardedRef) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
      ref={forwardedRef}
    >
      <line x1="9.01" y1="12" x2="3.01" y2="12" />
      <path
        fill="none"
        d="M9.72,5.9c.21-.27.56-.27.77,0l4.5,5.62c.21.27.21.7,0,.96l-4.5,5.62c-.21.27-.56.27-.77,0"
      />
      <path
        fill="none"
        d="M15.57,5.9c.21-.27.56-.27.77,0l4.5,5.62c.21.27.21.7,0,.96l-4.5,5.62c-.21.27-.56.27-.77,0"
      />
    </svg>
  );
});

export default KeyframeDoubleRemove;
