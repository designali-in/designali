import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Award02 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
       <path  d="M8,21c0-1.41,0-2.12.44-2.56.44-.44,1.15-.44,2.56-.44h2c1.41,0,2.12,0,2.56.44.44.44.44,1.15.44,2.56v1H8v-1Z"/>
  <path  d="M12,13v5"/>
  <path  d="M6,22h12"/>
  <path  d="M13.04,2.87l1.06,2.13c.14.3.53.58.85.64l1.91.32c1.22.21,1.51,1.1.63,1.98l-1.49,1.5c-.25.25-.39.74-.31,1.09l.43,1.86c.34,1.47-.44,2.04-1.73,1.27l-1.79-1.07c-.32-.19-.86-.19-1.19,0l-1.79,1.07c-1.28.77-2.06.19-1.73-1.27l.43-1.86c.08-.35-.06-.84-.31-1.09l-1.49-1.5c-.88-.88-.59-1.78.63-1.98l1.91-.32c.32-.05.7-.34.85-.64l1.06-2.13c.58-1.16,1.51-1.16,2.08,0Z"/>
</svg>
    );
  },
);

export default Award02;
