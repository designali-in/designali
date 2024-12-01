import * as React from "react";

import type { DesignaliProps } from "../../types";

export const AiProgramming = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
       <path  d="M11.5,6c-4.48,0-6.72,0-8.11,1.17-1.39,1.17-1.39,3.06-1.39,6.83s0,5.66,1.39,6.83c1.39,1.17,3.63,1.17,8.11,1.17s6.72,0,8.11-1.17c1.39-1.17,1.39-3.06,1.39-6.83,0-1.17,0-2.16-.04-3"/>
  <path  d="M15.5,12l1.23,1.06c.52.44.77.67.77.94s-.26.5-.77.94l-1.23,1.06"/>
  <path  d="M7.5,12l-1.23,1.06c-.52.44-.77.67-.77.94s.26.5.77.94l1.23,1.06"/>
  <path  d="M12.5,11l-2,6"/>
  <path  d="M17.72,6.78c-.06-.25-.26-.44-.51-.51l-2.17-.56c-.09-.03-.15-.12-.12-.22.02-.06.06-.11.12-.12l2.17-.56c.25-.06.44-.26.51-.51l.56-2.17c.03-.09.12-.15.22-.12.06.02.11.06.12.12l.56,2.17c.06.25.26.44.51.51l2.17.56c.09.03.15.12.12.22-.02.06-.06.11-.12.12l-2.17.56c-.25.06-.44.26-.51.51l-.56,2.17c-.03.09-.12.15-.22.12-.06-.02-.11-.06-.12-.12l-.56-2.17Z"/>
</svg>
    );
  },
);

export default AiProgramming;
