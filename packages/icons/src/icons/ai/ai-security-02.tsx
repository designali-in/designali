import * as React from "react";

import type { DesignaliProps } from "../../types";

export const AiSecurity02 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M20,13c0,5-3.5,7.5-7.66,8.95-.22.07-.45.07-.67-.01-4.17-1.44-7.67-3.94-7.67-8.94v-7c0-.55.45-1,1-1,2,0,4.5-1.2,6.24-2.72.44-.37,1.08-.37,1.52,0,1.75,1.53,4.24,2.72,6.24,2.72.55,0,1,.45,1,1v7Z" />

        <path d="M7.5,14.5l1.84-5.53c.09-.28.36-.47.66-.47s.56.19.66.47l1.84,5.53M15.5,8.5v6M8.17,12.5h3.67" />
      </svg>
    );
  },
);

export default AiSecurity02;
