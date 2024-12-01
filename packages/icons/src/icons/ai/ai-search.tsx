import * as React from "react";

import type { DesignaliProps } from "../../types";

export const AiSearch = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M17.5,17.5l4.5,4.5" />
        <path d="M20,11c0-4.97-4.03-9-9-9S2,6.03,2,11s4.03,9,9,9,9-4.03,9-9Z" />
        <path d="M6.5,14l1.84-5.53c.09-.28.36-.47.66-.47s.56.19.66.47l1.84,5.53M14.5,8v6M7.5,12h3" />
      </svg>
    );
  },
);

export default AiSearch;
