import * as React from "react";

import type { DesignaliProps } from "../../types";

export const PhoneOff = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M10.68,13.31c1.01,1.02,2.16,1.89,3.41,2.6l1.27-1.27c.56-.55,1.38-.72,2.11-.45.91.34,1.85.57,2.81.7.99.14,1.73,1,1.72,2v3c0,1.1-.89,2-1.99,2.01-.06,0-.13,0-.19,0-3.08-.33-6.03-1.39-8.63-3.07-1.2-.76-2.32-1.66-3.33-2.67M5.19,12.81c-1.68-2.6-2.74-5.55-3.07-8.63-.1-1.1.71-2.07,1.81-2.17.06,0,.12,0,.18,0h3c1,0,1.86.73,2,1.72.13.96.36,1.9.7,2.81.27.73.1,1.55-.45,2.11l-1.27,1.27" />
        <line x1="22" y1="2" x2="2" y2="22" />
      </svg>
    );
  },
);

export default PhoneOff;
