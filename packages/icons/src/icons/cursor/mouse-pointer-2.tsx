import * as React from "react";

import type { DesignaliProps } from "../../types";

export const MousePointer2 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M2.05,2.81c-.13-.3,0-.64.3-.77.15-.06.32-.06.46,0l18.82,7.65c.3.12.45.47.32.77-.07.17-.22.3-.4.35l-7.2,1.86c-.83.21-1.48.86-1.69,1.69l-1.86,7.21c-.08.31-.4.5-.72.42-.18-.05-.33-.18-.4-.35L2.05,2.81Z" />
      </svg>
    );
  },
);

export default MousePointer2;
