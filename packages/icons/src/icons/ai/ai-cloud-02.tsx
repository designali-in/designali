import * as React from "react";

import type { DesignaliProps } from "../../types";

export const AiCloud02 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
          d="M17.48,8s.01,0,.02,0c2.49,0,4.5,2.01,4.5,4.5,0,1.96-1.25,3.63-3,4.24M17.48,8c.01-.16.02-.33.02-.5,0-3.04-2.46-5.5-5.5-5.5-2.88,0-5.24,2.21-5.48,5.02M17.48,8c-.1,1.13-.55,2.17-1.23,3M6.52,7.02c-2.54.24-4.52,2.38-4.52,4.98,0,2.05,1.23,3.81,3,4.58M6.52,7.02c.16-.02.32-.02.48-.02,1.13,0,2.16.37,3,1"
        />
        <path
          fill="none"
          d="M18.25,21.25l-2.25-2.25v-2M18.25,20.5c-.41,0-.75.34-.75.75s.34.75.75.75.75-.34.75-.75-.34-.75-.75-.75Z"
        />
        <path
          fill="none"
          d="M5.75,21.25l2.25-2.25v-2M5.75,20.5c.41,0,.75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75Z"
        />
        <path
          fill="none"
          d="M12,21.25v-4.25M12,20.5c-.41,0-.75.34-.75.75s.34.75.75.75.75-.34.75-.75-.34-.75-.75-.75Z"
        />
      </svg>
    );
  },
);

export default AiCloud02;
