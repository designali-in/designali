import * as React from "react";

import type { DesignaliProps } from "../../types";

export const AiNetwork = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <rect x="5.5" y="5.5" width="13" height="13" rx="2" ry="2" />
        <path
          fill="none"
          d="M21.25,5.5c-.41,0-.75-.34-.75-.75s.34-.75.75-.75.75.34.75.75-.34.75-.75.75ZM21.25,5.5v3.75c0,.7,0,1.05-.09,1.33-.19.64-.69,1.14-1.33,1.33-.28.09-.63.09-1.33.09"
        />
        <path
          fill="none"
          d="M2.75,18.5c.41,0,.75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75ZM2.75,18.5v-3.75c0-.7,0-1.05.09-1.33.19-.64.69-1.14,1.33-1.33.28-.09.63-.09,1.33-.09"
        />
        <path
          fill="none"
          d="M5.5,2.75c0,.41-.34.75-.75.75s-.75-.34-.75-.75.34-.75.75-.75.75.34.75.75ZM5.5,2.75h3.75c.7,0,1.05,0,1.33.09.64.19,1.14.69,1.33,1.33.09.28.09.63.09,1.33"
        />
        <path
          fill="none"
          d="M18.5,21.25c0-.41.34-.75.75-.75s.75.34.75.75-.34.75-.75.75-.75-.34-.75-.75ZM18.5,21.25h-3.75c-.7,0-1.05,0-1.33-.09-.64-.19-1.14-.69-1.33-1.33-.09-.28-.09-.63-.09-1.33"
        />
        <path
          fill="none"
          d="M12.9,14.5l-1.46-4.52c-.09-.28-.37-.48-.69-.48s-.6.19-.69.48l-1.46,4.52M15.4,9.5v5M9.13,13h3.23"
        />
      </svg>
    );
  },
);

export default AiNetwork;
