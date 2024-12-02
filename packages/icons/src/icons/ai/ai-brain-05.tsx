import * as React from "react";

import type { DesignaliProps } from "../../types";

export const AiBrain05 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
          d="M7.5,4.5c-1.66,0-3,1.34-3,3,0,.57.16,1.1.43,1.55-1.39.27-2.43,1.48-2.43,2.95s1.05,2.68,2.43,2.95M7.5,4.5c0-1.38,1.12-2.5,2.5-2.5s2.5,1.12,2.5,2.5v1.5M7.5,4.5c0,.82.39,1.54,1,2M4.93,14.95c-.27.45-.43.98-.43,1.55,0,1.66,1.34,3,3,3,0,1.38,1.12,2.5,2.5,2.5s2.5-1.12,2.5-2.5v-1.5M4.93,14.95c.36-.59.91-1.04,1.57-1.28"
        />
        <path d="M17.5,9h-2c-.94,0-1.41,0-1.71.29-.29.29-.29.76-.29,1.71v2c0,.94,0,1.41.29,1.71s.76.29,1.71.29h2c.94,0,1.41,0,1.71-.29s.29-.76.29-1.71v-2c0-.94,0-1.41-.29-1.71-.29-.29-.76-.29-1.71-.29Z" />
        <path d="M15,15v2M18,15v2M15,7v2M18,7v2M13.5,10.5h-2M13.5,13.5h-2M21.5,10.5h-2M21.5,13.5h-2" />
      </svg>
    );
  },
);

export default AiBrain05;
