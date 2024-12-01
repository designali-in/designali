import * as React from "react";

import type { DesignaliProps } from "../../types";

export const AiMail = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
         <path  d="M5,7l-1.22.81c-.87.58-1.31.87-1.55,1.32-.24.44-.23.97-.23,2.01,0,1.26.02,2.54.05,3.83.08,3.07.12,4.61,1.25,5.74,1.13,1.13,2.69,1.17,5.8,1.25,1.94.05,3.86.05,5.8,0,3.12-.08,4.67-.12,5.8-1.25,1.13-1.13,1.17-2.67,1.25-5.74.03-1.3.04-2.58.05-3.83,0-1.04,0-1.57-.23-2.01-.24-.44-.67-.74-1.55-1.32l-1.22-.81"/>
  <path  d="M2,10l6.91,4.15c1.5.9,2.26,1.35,3.09,1.35s1.58-.45,3.09-1.35l6.91-4.15"/>
  <path  d="M5,12v-6c0-1.89,0-2.83.59-3.41.59-.59,1.53-.59,3.41-.59h6c1.89,0,2.83,0,3.41.59.59.59.59,1.53.59,3.41v6"/>
  <path  d="M8,10l1.61-4.6c.08-.24.31-.4.58-.4s.49.16.58.4l1.61,4.6M15,5v5M8.88,8.33h2.62"/>
</svg>
    );
  },
);

export default AiMail;
