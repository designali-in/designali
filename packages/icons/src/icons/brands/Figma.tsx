import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Figma = React.forwardRef<SVGSVGElement, DesignaliProps>(
  ({ ...props }, forwardedRef) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="17.82"
        height="24"
        viewBox="0 0 17.82 24"
        {...props}
        ref={forwardedRef}
      >
        <path
          strokeWidth={0}
          fill="#f24e1e"
          d="M2.24,5.33c0-1.84,1.49-3.33,3.33-3.33h3.33v6.67h-3.33c-1.84,0-3.33-1.49-3.33-3.33Z"
        />
        <path
          strokeWidth={0}
          fill="#a259ff"
          d="M2.24,12c0-1.84,1.49-3.33,3.33-3.33h3.33v6.67h-3.33c-1.84,0-3.33-1.49-3.33-3.33Z"
        />
        <path
          strokeWidth={0}
          fill="#1abcfe"
          d="M12.24,8.67h0c1.84,0,3.33,1.49,3.33,3.33h0c0,1.84-1.49,3.33-3.33,3.33h0c-1.84,0-3.33-1.49-3.33-3.33h0c0-1.84,1.49-3.33,3.33-3.33Z"
        />
        <path
          strokeWidth={0}
          fill="#0acf83"
          d="M2.24,18.67c0-1.84,1.49-3.33,3.33-3.33h3.33v3.33c0,1.84-1.49,3.33-3.33,3.33s-3.33-1.49-3.33-3.33Z"
        />
        <path
          strokeWidth={0}
          fill="#ff7262"
          d="M8.91,2h3.33c1.84,0,3.33,1.49,3.33,3.33s-1.49,3.33-3.33,3.33h-3.33V2Z"
        />
      </svg>
    );
  },
);

export default Figma;
