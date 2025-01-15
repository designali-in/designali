import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Highlighter = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M8.32,10.95l-6.32,6.32v3.16h9.47l3.16-3.16" />
        <path d="M22,12l-4.84,4.84c-.82.8-2.13.8-2.95,0l-5.47-5.47c-.8-.82-.8-2.13,0-2.95l4.84-4.84" />
      </svg>
    );
  },
);

export default Highlighter;
