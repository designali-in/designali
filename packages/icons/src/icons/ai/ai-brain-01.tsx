import * as React from "react";

import type { DesignaliProps } from "../../types";

export const AiBrain01 = React.forwardRef<SVGSVGElement, DesignaliProps>(
  ({ color = "currentColor", ...props }, forwardedRef) => {
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
        <path class="cls-1" d="M7,4.5c-1.66,0-3,1.34-3,3,0,.57.16,1.1.43,1.55-1.39.27-2.43,1.48-2.43,2.95s1.05,2.68,2.43,2.95M7,4.5c0-1.38,1.12-2.5,2.5-2.5s2.5,1.12,2.5,2.5v15c0,1.38-1.12,2.5-2.5,2.5s-2.5-1.12-2.5-2.5c-1.66,0-3-1.34-3-3,0-.57.16-1.1.43-1.55M7,4.5c0,.82.39,1.54,1,2M4.43,14.95c.36-.59.91-1.04,1.57-1.28"/>
  <path class="cls-1" d="M17,19.5c1.66,0,3-1.34,3-3,0-.57-.16-1.1-.43-1.55,1.39-.27,2.43-1.48,2.43-2.95s-1.05-2.68-2.43-2.95M17,19.5c0,1.38-1.12,2.5-2.5,2.5s-2.5-1.12-2.5-2.5V4.5c0-1.38,1.12-2.5,2.5-2.5s2.5,1.12,2.5,2.5c1.66,0,3,1.34,3,3,0,.57-.16,1.1-.43,1.55M17,19.5c0-.82-.39-1.54-1-2M19.57,9.05c-.36.59-.91,1.04-1.57,1.28"/>
</svg>
    );
  },
);

export default AiBrain01;
