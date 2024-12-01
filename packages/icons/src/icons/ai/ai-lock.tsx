import * as React from "react";

import type { DesignaliProps } from "../../types";

export const AiLock = React.forwardRef<SVGSVGElement, DesignaliProps>(
  ({  ...props }, forwardedRef) => {
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
         <path  d="M12.31,18l-1.46-4.52c-.09-.28-.37-.48-.69-.48s-.6.19-.69.48l-1.46,4.52M15,13v5M8.54,16.5h3.23"/>
  <path  d="M4.27,18.84c.22,1.67,1.61,2.98,3.29,3.06,1.42.07,2.86.1,4.44.1s3.02-.03,4.44-.1c1.68-.08,3.07-1.39,3.29-3.06.15-1.09.27-2.21.27-3.34s-.12-2.25-.27-3.34c-.22-1.67-1.61-2.98-3.29-3.06-1.42-.07-2.86-.1-4.44-.1s-3.02.03-4.44.1c-1.68.08-3.07,1.39-3.29,3.06-.15,1.09-.27,2.21-.27,3.34s.12,2.25.27,3.34Z"/>
  <path  d="M7.5,9v-2.5c0-2.49,2.01-4.5,4.5-4.5s4.5,2.01,4.5,4.5v2.5"/>
</svg>
    );
  },
);

export default AiLock;
