import * as React from "react";

import type { DesignaliProps } from "../../types";

export const AiInnovation01 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M14.32,18.95v2.2c0,.47-.38.85-.85.85h-2.95c-.47,0-.85-.38-.85-.85v-2.2" />

        <path d="M17.29,3.1h-1.1c-.52,0-.78,0-.94.16-.16.16-.16.42-.16.94v1.1c0,.52,0,.78.16.94s.42.16.94.16h1.1c.52,0,.78,0,.94-.16s.16-.42.16-.94v-1.1c0-.52,0-.78-.16-.94-.16-.16-.42-.16-.94-.16Z" />
        <path d="M15.91,6.41v1.1M17.57,6.41v1.1M15.91,2v1.1M17.57,2v1.1M15.09,3.93h-1.1M15.09,5.59h-1.1M19.5,3.93h-1.1M19.5,5.59h-1.1" />
        <path
          fill="none"
          d="M19.5,9.62c0,2.58-1.27,4.56-3.2,5.87-.45.3-.68.46-.79.63-.11.17-.15.4-.22.85l-.06.35c-.13.8-.2,1.2-.48,1.43-.28.24-.68.24-1.49.24h-2.61c-.81,0-1.21,0-1.49-.24-.28-.24-.35-.64-.48-1.43l-.06-.35c-.08-.45-.11-.68-.22-.85-.11-.17-.34-.33-.79-.63-1.91-1.31-3.1-3.29-3.1-5.87,0-4.21,3.36-7.62,7.5-7.62"
        />
      </svg>
    );
  },
);

export default AiInnovation01;
