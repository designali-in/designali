import * as React from "react";

import type { DesignaliProps } from "../../types";

export const AiFolder01 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path
          fill="none"
          d="M18.25,21.25l-2.25-2.25v-3M18.25,20.5c-.41,0-.75.34-.75.75s.34.75.75.75.75-.34.75-.75-.34-.75-.75-.75Z"
        />
        <path
          fill="none"
          d="M5.75,21.25l2.25-2.25v-3M5.75,20.5c.41,0,.75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75Z"
        />
        <path
          fill="none"
          d="M12,21.25v-5.25M12,20.5c-.41,0-.75.34-.75.75s.34.75.75.75.75-.34.75-.75-.34-.75-.75-.75Z"
        />
        <path
          fill="none"
          d="M20,17.25c1.1,0,2-.9,2-2V6.77c0-1.1-.9-2-2-2h-7.9c-.68,0-1.32-.33-1.69-.9l-.81-1.2c-.37-.56-1-.9-1.67-.9h-3.93c-1.1,0-2,.9-2,2v11.48c0,1.1.9,2,2,2"
        />
      </svg>
    );
  },
);

export default AiFolder01;
