import * as React from "react";

import type { DesignaliProps } from "../../types";

export const SettingError04 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
          d="M16.76-7.76v2M16.77-3.76h0M21.76-5.76c0,2.76-2.24,5-5,5s-5-2.24-5-5,2.24-5,5-5,5,2.24,5,5Z"
        />
        <circle cx="17.73" cy="17.73" r="4.27" />
        <line x1="17.83" y1="15.93" x2="17.83" y2="17.01" />
        <circle cx="17.83" cy="19.62" r="0" />
        <path
          fill="none"
          d="M9.29,15.31c-.8-1.33-.85-3.05,0-4.48,1.24-2.05,3.9-2.71,5.96-1.47"
        />
        <path
          fill="none"
          d="M21,10.17v-2.17c0-.71-.38-1.37-1-1.73l-7-4c-.62-.36-1.38-.36-2,0l-7,4c-.62.36-1,1.02-1,1.73v8c0,.71.38,1.37,1,1.73l7,4"
        />
      </svg>
    );
  },
);

export default SettingError04;
