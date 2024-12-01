import * as React from "react";

import type { DesignaliProps } from "../../types";

export const CloudServer = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M17.48,8s.01,0,.02,0c2.49,0,4.5,2.01,4.5,4.5s-2.01,4.5-4.5,4.5H7c-2.76,0-5-2.24-5-5,0-2.6,1.98-4.74,4.52-4.98M17.48,8c.01-.16.02-.33.02-.5,0-3.04-2.46-5.5-5.5-5.5-2.88,0-5.24,2.21-5.48,5.02M17.48,8c-.1,1.13-.55,2.17-1.23,3M6.52,7.02c.16-.02.32-.02.48-.02,1.13,0,2.16.37,3,1" />
        <path d="M14,20.75v-.25c0-.55-.45-1-1-1h-1M14,20.75v.25c0,.55-.45,1-1,1h-2c-.55,0-1-.45-1-1v-.25M14,20.75h5M10,20.75v-.25c0-.55.45-1,1-1h1M10,20.75h-5M12,19.5v-2.5" />
      </svg>
    );
  },
);

export default CloudServer;
