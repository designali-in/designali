import * as React from "react";

import type { DesignaliProps } from "../../types";

export const BadgeEuro = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M3.86,8.62c-.48-2.16.88-4.29,3.04-4.77.57-.13,1.17-.13,1.74,0,1.19-1.86,3.66-2.41,5.52-1.22.49.31.9.73,1.22,1.22,2.16-.48,4.3.87,4.78,3.03.13.58.13,1.18,0,1.75,1.86,1.19,2.41,3.66,1.22,5.52-.31.49-.73.9-1.22,1.22.48,2.16-.87,4.29-3.03,4.78-.57.13-1.17.13-1.74,0-1.19,1.86-3.66,2.41-5.52,1.23-.49-.31-.91-.73-1.23-1.23-2.16.48-4.29-.87-4.78-3.03-.13-.57-.13-1.17,0-1.74-1.87-1.18-2.42-3.65-1.24-5.52.32-.5.74-.92,1.24-1.24Z" />
        <path d="M7.01,12h5" />
        <path d="M15.01,9.4c-1.44-1.68-3.96-1.88-5.64-.44-1.68,1.44-1.88,3.96-.44,5.64,1.44,1.68,3.96,1.88,5.64.44.16-.13.3-.28.44-.44" />
      </svg>
    );
  },
);

export default BadgeEuro;
