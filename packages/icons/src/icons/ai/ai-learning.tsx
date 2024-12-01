import * as React from "react";

import type { DesignaliProps } from "../../types";

export const AiLearning = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path  d="M5.98,4.29c-1.69-.32-2.54-.48-3.26.13-.72.62-.72,1.62-.72,3.63v7.21c0,1.83,0,2.75.46,3.32.46.57,1.48.77,3.52,1.15,1.82.35,3.23.9,4.26,1.45,1.01.54,1.51.82,1.76.82s.75-.27,1.76-.82c1.03-.55,2.44-1.1,4.26-1.45,2.04-.39,3.06-.58,3.52-1.15.46-.57.46-1.49.46-3.32v-7.21c0-2.01,0-3.01-.72-3.63s-1.57-.46-3.26-.13"/>
  <line  x1="12" y1="16.06" x2="12" y2="21"/>
  <path  d="M13,5h-2c-.94,0-1.41,0-1.71.29-.29.29-.29.76-.29,1.71v2c0,.94,0,1.41.29,1.71s.76.29,1.71.29h2c.94,0,1.41,0,1.71-.29s.29-.76.29-1.71v-2c0-.94,0-1.41-.29-1.71-.29-.29-.76-.29-1.71-.29Z"/>
  <path  d="M10.5,11v2M13.5,11v2M10.5,3v2M13.5,3v2M9,6.5h-2M9,9.5h-2M17,6.5h-2M17,9.5h-2"/>
</svg>
    );
  },
);

export default AiLearning;
