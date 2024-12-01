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
        <path d="M7.5,14.5l1.84-5.53c.09-.28.36-.47.66-.47s.56.19.66.47l1.84,5.53M15.5,8.5v6M8.5,12.5h3" />
        <path d="M21,11.18v-2.9c0-1.64,0-2.46-.4-3-.4-.53-1.32-.79-3.15-1.31-1.25-.35-2.35-.78-3.23-1.17-1.2-.53-1.8-.8-2.22-.8s-1.02.27-2.22.8c-.88.39-1.98.82-3.23,1.17-1.83.52-2.74.78-3.15,1.31-.4.53-.4,1.35-.4,3v2.9c0,5.63,5.06,9,7.59,10.34.61.32.91.48,1.41.48s.8-.16,1.41-.48c2.53-1.34,7.59-4.71,7.59-10.34Z" />
      </svg>
    );
  },
);

export default AiSecurity02;
