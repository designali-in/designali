import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Advertisiment = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M18.33,8.97v2.99M18.33,11.96v3.94M18.33,11.96h-2.02c-.24,0-.48.04-.7.13-1.69.66-1.69,3.1,0,3.76.22.09.46.13.7.13h2.02" />
        <rect x="2" y="2" width="20" height="20" rx="4.33" ry="4.33" />
        <path d="M5.08,15.42l3.65-7.29,3.65,7.29" />
        <path d="M6.3,12.98h4.86" />
      </svg>
    );
  },
);

export default Advertisiment;
