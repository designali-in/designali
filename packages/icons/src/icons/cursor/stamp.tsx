import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Stamp = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M5,22h14" />
        <path d="M19.27,13.73c-.47-.47-1.11-.73-1.77-.73H6.5c-1.38,0-2.5,1.12-2.5,2.5v1.5c0,.55.45,1,1,1h14c.55,0,1-.45,1-1v-1.5c0-.66-.26-1.3-.73-1.77Z" />
        <path d="M14,13v-4.5c0-1.5,1-1.5,1-3.5,0-1.66-1.34-3-3-3s-3,1-3,3,1,2,1,3.5v4.5" />
      </svg>
    );
  },
);

export default Stamp;
