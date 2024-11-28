import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Vercel = React.forwardRef<SVGSVGElement, DesignaliProps>(
  ({ color = "currentColor", ...props }, forwardedRef) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
        ref={forwardedRef}
      >
        <path
          fill="currentColor"
          d="M2,20.6s.05-.01.06-.03c.03-.04.06-.09.08-.13,3.24-5.61,6.48-11.21,9.73-16.82.05-.08.1-.17.15-.25.07.04.09.11.12.16.35.6.7,1.21,1.05,1.81,2.91,5.03,5.82,10.06,8.73,15.1.04.06.1.12.09.2H2.16c-.05,0-.1,0-.16,0,0,0,0-.02,0-.03Z"
        />
      </svg>
    );
  },
);

export default Vercel;
