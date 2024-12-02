import * as React from "react";

import type { DesignaliProps } from "../../types";

export const AiComputer = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M18,4.8h-2c-.94,0-1.41,0-1.71.29-.29.29-.29.76-.29,1.71v2c0,.94,0,1.41.29,1.71.29.29.76.29,1.71.29h2c.94,0,1.41,0,1.71-.29.29-.29.29-.76.29-1.71v-2c0-.94,0-1.41-.29-1.71-.29-.29-.76-.29-1.71-.29Z" />
        <path d="M15.5,10.8v2M18.5,10.8v2M15.5,2.8v2M18.5,2.8v2M14,6.3h-2M14,9.3h-2M22,6.3h-2M22,9.3h-2" />
        <path
          fill="none"
          d="M22,13.34v1.46c0,1.1-.9,2-2,2H4c-1.1,0-2-.9-2-2V4.8c0-1.1.9-2,2-2h7.4"
        />
        <path d="M12,16.8v4" />
        <path d="M8,20.8h8" />
      </svg>
    );
  },
);

export default AiComputer;
