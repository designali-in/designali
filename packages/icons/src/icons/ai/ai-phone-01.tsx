import * as React from "react";

import type { DesignaliProps } from "../../types";

export const AiPhone01 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M18,4h-2c-.94,0-1.41,0-1.71.29-.29.29-.29.76-.29,1.71v2c0,.94,0,1.41.29,1.71.29.29.76.29,1.71.29h2c.94,0,1.41,0,1.71-.29.29-.29.29-.76.29-1.71v-2c0-.94,0-1.41-.29-1.71-.29-.29-.76-.29-1.71-.29Z" />
        <path
          fill="none"
          d="M15.5,10v2M18.5,10v2M15.5,2v2M18.5,2v2M14,5.5h-2M14,8.5h-2M22,5.5h-2M22,8.5h-2"
        />
        <path
          fill="none"
          d="M19,15.02v4.98c0,1.1-.9,2-2,2H7c-1.1,0-2-.9-2-2V4c0-1.1.9-2,2-2h4.85"
        />
        <path d="M12,18h.01" />
      </svg>
    );
  },
);

export default AiPhone01;
