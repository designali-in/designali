import * as React from "react";

import type { DesignaliProps } from "../../types";

export const AiCloud01 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path  d="M17.48,8s.01,0,.02,0c2.49,0,4.5,2.01,4.5,4.5,0,1.56-.79,2.94-2,3.74M17.48,8c.01-.16.02-.33.02-.5,0-3.04-2.46-5.5-5.5-5.5-2.88,0-5.24,2.21-5.48,5.02M17.48,8c-.06.71-.27,1.39-.58,2M6.52,7.02c-2.54.24-4.52,2.38-4.52,4.98,0,1.79.94,3.36,2.35,4.24M6.52,7.02c.16-.02.32-.02.48-.02,1.13,0,2.16.37,3,1"/>
  <path  d="M13,14h-2c-.94,0-1.41,0-1.71.29-.29.29-.29.76-.29,1.71v2c0,.94,0,1.41.29,1.71.29.29.76.29,1.71.29h2c.94,0,1.41,0,1.71-.29s.29-.76.29-1.71v-2c0-.94,0-1.41-.29-1.71s-.76-.29-1.71-.29Z"/>
  <path  d="M10.5,20v2M13.5,20v2M10.5,12v2M13.5,12v2M9,15.5h-2M9,18.5h-2M17,15.5h-2M17,18.5h-2"/>
</svg>
    );
  },
);

export default AiCloud01;
