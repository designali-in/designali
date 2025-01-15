import * as React from "react";

import type { DesignaliProps } from "../../types";

export const BlushBrush01 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
       
       <path  d="M8.07,11.03l-5.18,1.79c-2.45.91.85,5.13,1.95,6.22,1.09,1.09,5.5,4.54,6.42,2.1l1.74-5.21M3.23,16.49l2.7-1.38M7.64,20.5l1.25-2.44"/>
  <path  d="M12.63,8.25l1-1c.39-.39,1.08-.32,1.48.07l1.56,1.56c.39.39.39,1.03,0,1.42l-1,1c-.3.29-.49.67-.56,1.08l-.49,2.88c-.14.8-1.13,1.12-1.71.54l-4.54-4.79c-.58-.58-.47-1.5.33-1.64l2.89-.49c.41-.07.74-.34,1.04-.63Z"/>
  <path  d="M14.86,7.09l4.57-4.63c.61-.62,1.61-.63,2.22-.03h0c.48.47.48,1.24,0,1.72l-4.82,4.88"/>
</svg>
    );
  },
);

export default BlushBrush01;
