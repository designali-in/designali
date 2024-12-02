import * as React from "react";

import type { DesignaliProps } from "../../types";

export const AiChat01 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M8.21,19.9c4.65,2.39,10.36.55,12.75-4.1,2.39-4.65.55-10.36-4.1-12.75C12.2.66,6.49,2.5,4.1,7.15c-1.39,2.71-1.39,5.93,0,8.64l-2.1,6.21,6.21-2.1Z" />
        <path d="M10.93,6.34v1.98M7.44,9.84h2.05M15.46,9.84h2.05M15.46,12.81h2.05M7.44,12.81h2.05M10.93,14.36v1.98M13.95,14.36v1.98M13.94,6.34v1.98M10.49,14.31h3.97c.55,0,1-.45,1-1v-3.99c0-.55-.45-1-1-1h-3.97c-.55,0-1,.45-1,1v3.99c0,.55.45,1,1,1Z" />
      </svg>
    );
  },
);

export default AiChat01;
