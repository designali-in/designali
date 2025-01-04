import * as React from "react";

import type { DesignaliProps } from "../../types";

export const PhoneMissed = React.forwardRef<SVGSVGElement, DesignaliProps>(
  ({  ...props }, forwardedRef) => {
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
       <line  x1="21.94" y1="2.04" x2="15.94" y2="8.04"/>
  <line  x1="15.94" y1="2.04" x2="21.94" y2="8.04"/>
  <path  d="M21.94,16.96v3c0,1.1-.89,2-1.99,2.01-.06,0-.13,0-.19,0-3.08-.33-6.03-1.39-8.63-3.07-2.42-1.54-4.46-3.58-6-6-1.69-2.61-2.74-5.58-3.07-8.67-.1-1.1.71-2.07,1.81-2.17.06,0,.12,0,.18,0h3c1,0,1.86.73,2,1.72.13.96.36,1.9.7,2.81.27.73.1,1.55-.45,2.11l-1.27,1.27c1.42,2.5,3.5,4.58,6,6l1.27-1.27c.56-.55,1.38-.72,2.11-.45.91.34,1.85.57,2.81.7,1.01.14,1.75,1.01,1.72,2.03Z"/>
</svg>
    );
  },
);

export default PhoneMissed;
