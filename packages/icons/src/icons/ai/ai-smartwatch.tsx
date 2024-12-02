import * as React from "react";

import type { DesignaliProps } from "../../types";

export const AiSmartWatch = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path
          fill="none"
          d="M20.25,6.75l-2.25,2.25h-2M19.5,6.75c0,.41.34.75.75.75s.75-.34.75-.75-.34-.75-.75-.75-.75.34-.75.75Z"
        />
        <path
          fill="none"
          d="M20.25,17.25l-2.25-2.25h-2M19.5,17.25c0-.41.34-.75.75-.75s.75.34.75.75-.34.75-.75.75-.75-.34-.75-.75Z"
        />
        <path
          fill="none"
          d="M20.25,12h-8.25M19.5,12c0,.41.34.75.75.75s.75-.34.75-.75-.34-.75-.75-.75-.75.34-.75.75Z"
        />
        <path d="M13,6l-.27-1.09c-.33-1.34-.5-2.01-.98-2.42-.05-.05-.11-.09-.16-.13-.52-.36-1.21-.36-2.59-.36s-2.07,0-2.59.36c-.06.04-.11.08-.16.13-.48.41-.64,1.08-.98,2.42l-.27,1.09" />
        <path d="M5,18l.27,1.09c.33,1.34.5,2.01.98,2.42.05.05.11.09.16.13.52.36,1.21.36,2.59.36s2.07,0,2.59-.36c.06-.04.11-.08.16-.13.48-.41.64-1.08.98-2.42l.27-1.09" />
        <path
          fill="none"
          d="M14.64,17.01c-.35.59-.99.99-1.73.99h-7.82c-1.1,0-2-.9-2-2v-8c0-1.1.9-2,2-2h7.82c.72,0,1.36.39,1.71.96"
        />
      </svg>
    );
  },
);

export default AiSmartWatch;
