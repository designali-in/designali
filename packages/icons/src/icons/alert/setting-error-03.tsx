import * as React from "react";

import type { DesignaliProps } from "../../types";

export const SettingError03 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
          d="M9.29,15.31c-.8-1.33-.85-3.05,0-4.48,1.24-2.05,3.9-2.71,5.96-1.47"
        />
        <path
          fill="none"
          d="M9.87,21.37c-.49-.31-.91-.73-1.23-1.23-2.16.48-4.29-.87-4.78-3.03-.13-.57-.13-1.17,0-1.74-1.87-1.18-2.42-3.65-1.24-5.52.32-.5.74-.92,1.24-1.24-.48-2.16.88-4.29,3.04-4.77.57-.13,1.17-.13,1.74,0,1.19-1.86,3.66-2.41,5.52-1.22.49.31.9.73,1.22,1.22,2.16-.48,4.3.87,4.78,3.03.13.58.13,1.18,0,1.75"
        />
        <circle cx="17.73" cy="17.73" r="4.27" />

        <circle cx="17.83" cy="19.62" r="0" />
        <line x1="17.83" y1="15.93" x2="17.83" y2="17.01" />
      </svg>
    );
  },
);

export default SettingError03;
