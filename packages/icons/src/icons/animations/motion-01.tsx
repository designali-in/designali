import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Motion01 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
          d="M4.51,12c-.4-.06-.72-.16-1-.32-.46-.27-.84-.65-1.11-1.11-.41-.7-.41-1.65-.41-3.53s0-2.83.41-3.53c.27-.46.65-.84,1.11-1.11.7-.41,1.65-.41,3.53-.41s2.83,0,3.53.41c.46.27.84.65,1.11,1.11.16.28.26.6.32,1"
        />
        <path
          fill="none"
          d="M9.52,17c-.41-.06-.73-.16-1.01-.32-.46-.27-.84-.65-1.11-1.11-.41-.7-.41-1.64-.41-3.53s0-2.83.41-3.53c.27-.46.65-.84,1.11-1.11.7-.41,1.64-.41,3.53-.41s2.83,0,3.53.41c.46.27.84.65,1.11,1.11.16.28.26.6.32,1.01"
        />
        <rect
          x="12.61"
          y="12.58"
          width="9.39"
          height="9.39"
          rx="3.13"
          ry="3.13"
        />
      </svg>
    );
  },
);

export default Motion01;
