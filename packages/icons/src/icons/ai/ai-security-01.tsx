import * as React from "react";

import type { DesignaliProps } from "../../types";

export const AiSecurity01 = React.forwardRef<SVGSVGElement, DesignaliProps>(
  ({ ...props }, forwardedRef) => {
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
        <path d="M20,13c0,5-3.5,7.5-7.66,8.95-.22.07-.45.07-.67-.01-4.17-1.44-7.67-3.94-7.67-8.94v-7c0-.55.45-1,1-1,2,0,4.5-1.2,6.24-2.72.44-.37,1.08-.37,1.52,0,1.75,1.53,4.24,2.72,6.24,2.72.55,0,1,.45,1,1v7Z" />
        <path d="M10.69,7.76v1.68M7.75,10.73h1.73M14.52,10.73h1.73M14.52,13.25h1.73M7.75,13.25h1.73M10.69,14.56v1.68M13.24,14.56v1.68M13.23,7.76v1.68M10.33,14.52h3.35c.47,0,.84-.38.84-.85v-3.39c0-.47-.38-.85-.84-.85h-3.35c-.47,0-.84.38-.84.85v3.39c0,.47.38.85.84.85Z" />
      </svg>
    );
  },
);

export default AiSecurity01;
