import * as React from "react";

import type { DesignaliProps } from "../../types";

export const MessageCircleWarning = React.forwardRef<
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
      <path d="M8.22,19.93c4.64,2.4,10.34.55,12.72-4.12,2.38-4.67.55-10.4-4.09-12.8C12.2.61,6.5,2.46,4.12,7.13c-1.39,2.72-1.39,5.95,0,8.68l-2.1,6.23,6.19-2.11Z" />
      <g>
        <line x1="12" y1="8.37" x2="12" y2="12.02" />
        <circle cx="12" cy="15.48" r=".15" />
      </g>
    </svg>
  );
});

export default MessageCircleWarning;
