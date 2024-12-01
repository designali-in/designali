import * as React from "react";

import type { DesignaliProps } from "../../types";

export const AiFolder02 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M7,6h9.75c2.11,0,3.16,0,3.92.51.33.22.61.5.83.83.51.76.51,1.81.51,3.92,0,3.51,0,5.27-.84,6.53-.18.27-.39.53-.62.76M3.46,18.54c-1.46-1.46-1.46-3.82-1.46-8.54v-3.06c0-1.82,0-2.72.38-3.41.27-.49.67-.89,1.16-1.16.68-.38,1.59-.38,3.41-.38,1.16,0,1.75,0,2.25.19,1.16.44,1.64,1.49,2.17,2.54l.63,1.27" />
        <path d="M10.45,12v1.98M6.96,15.5h2.05M14.99,15.5h2.05M14.99,18.47h2.05M6.96,18.47h2.05M10.45,20.02v1.98M13.48,20.02v1.98M13.46,12v1.98M10.01,19.97h3.97c.55,0,1-.45,1-1v-3.99c0-.55-.45-1-1-1h-3.97c-.55,0-1,.45-1,1v3.99c0,.55.45,1,1,1Z" />
      </svg>
    );
  },
);

export default AiFolder02;
