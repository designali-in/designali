import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Fingerprint = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M12.04,10c-1.1,0-2,.9-2,2,0,1.02-.1,2.51-.26,4" />
        <path d="M14.04,13.12c0,2.38,0,6.38-1,8.88" />
        <path d="M17.33,21.02c.12-.6.43-2.3.5-3.02" />
        <path d="M2.04,12C2.04,6.48,6.51,2,12.04,2c3.15,0,6.11,1.48,8,4" />
        <path d="M2.04,16h0" />
        <path d="M21.84,16c.2-2,.13-5.35,0-6" />
        <path d="M5.04,19.5c.5-1.5,1-4.5,1-7.5,0-.68.11-1.36.34-2" />
        <path d="M8.69,22c.21-.66.45-1.32.57-2" />
        <path d="M9.04,6.8c2.87-1.66,6.54-.67,8.2,2.2.53.91.8,1.95.8,3v2" />
      </svg>
    );
  },
);

export default Fingerprint;
