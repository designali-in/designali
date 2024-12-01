import * as React from "react";

import type { DesignaliProps } from "../../types";

export const AiFolder01 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M18.25,21.25l-2.25-2.25v-3M18.25,20.5c-.41,0-.75.34-.75.75s.34.75.75.75.75-.34.75-.75-.34-.75-.75-.75Z" />
        <path d="M5.75,21.25l2.25-2.25v-3M5.75,20.5c.41,0,.75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75Z" />
        <path d="M12,21.25v-5.25M12,20.5c-.41,0-.75.34-.75.75s.34.75.75.75.75-.34.75-.75-.34-.75-.75-.75Z" />
      </svg>
    );
  },
);

export default AiFolder01;
