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
        d="M14,4.5c.38-.33.7-.5,1.07-.5.7,0,1.22.59,2.27,1.78l2.57,2.92c1.39,1.58,2.09,2.37,2.09,3.3s-.7,1.72-2.09,3.3l-2.57,2.92c-1.05,1.19-1.57,1.78-2.27,1.78-.37,0-.69-.17-1.07-.5"
      />
      <path
        fill="none"
        d="M7,5.44c.86-.96,1.35-1.44,1.99-1.44.71,0,1.24.59,2.29,1.78l2.6,2.92c1.41,1.58,2.11,2.37,2.11,3.3s-.7,1.72-2.11,3.3l-2.6,2.92c-1.06,1.19-1.59,1.78-2.29,1.78-.63,0-1.13-.48-1.99-1.44"
      />
      <line x1="6.98" y1="12" x2="2" y2="12" />
    </svg>
  );
});

export default KeyframeDoubleRemove;
