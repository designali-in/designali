import * as React from "react";

import type { DesignaliProps } from "../../types";

export const MousePointer = React.forwardRef<SVGSVGElement, DesignaliProps>(
  ({  ...props }, forwardedRef) => {
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
       
       <path  d="M13.28,13.28l7.55,7.55"/>
  <path  d="M2.81,2.05c-.3-.13-.64.01-.77.31-.06.15-.06.31,0,.45l7.65,18.82c.12.3.47.44.77.32.17-.07.3-.22.34-.39l1.85-7.16c.2-.85.86-1.52,1.7-1.74l7.2-1.86c.31-.08.5-.4.42-.72-.05-.18-.18-.33-.35-.4L2.81,2.05Z"/>
</svg>
    );
  },
);

export default MousePointer;
