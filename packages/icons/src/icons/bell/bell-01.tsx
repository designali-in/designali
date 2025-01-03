import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Bell01 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M10.27,21c.55.96,1.78,1.28,2.73.73.3-.18.56-.43.73-.73" />
        <path d="M3.26,15.33c-.37.41-.34,1.04.06,1.41.18.17.42.26.67.26h16c.55,0,1-.45,1-1,0-.25-.09-.49-.26-.67-1.33-1.37-2.74-2.83-2.74-7.33,0-3.31-2.69-6-6-6s-6,2.69-6,6c0,4.5-1.41,5.96-2.74,7.33" />
      </svg>
    );
  },
);

export default Bell01;
