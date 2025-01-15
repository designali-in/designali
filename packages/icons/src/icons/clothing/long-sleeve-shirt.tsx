import * as React from "react";

import type { DesignaliProps } from "../../types";

export const LongSleeve = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
       
       <path  d="M6.15,7.5c.3.89.65,1.79.77,2.72.09.67.06,1.35-.02,2.71l-.31,5.85c0,.64.11.97.68,1.28,2.35,1.26,7.09,1.26,9.44,0,.57-.31.68-.65.68-1.28l-.31-5.85c-.07-1.36-.11-2.04-.02-2.71.13-.93.48-1.83.77-2.72"/>
  <path  d="M6.57,17.86c-.42.21-.84.48-1.33.43-.82-.09-1.02-.49-1.18-1.48l-.97-5.78c-.13-.77-.13-.78.08-1.54l.48-1.78c.33-1.21.49-1.81.88-2.27.39-.46.96-.72,2.11-1.24l2.29-1.04c.36-.16.36-.16.75-.16h4.64c.39,0,.39,0,.75.16l2.29,1.04c1.14.52,1.72.78,2.11,1.24.39.46.56,1.06.88,2.27l.48,1.78c.21.76.21.76.08,1.54l-.97,5.78c-.17,1-.36,1.4-1.19,1.48-.51.05-.88-.21-1.33-.43"/>
  <path  d="M9.3,3.45s.82,1.72,1.49,2.08c.35.18.78.17,1.21.17s.86.02,1.21-.17c.68-.36,1.49-2.08,1.49-2.08"/>
</svg>
    );
  },
);

export default LongSleeve;
