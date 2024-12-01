
import * as React from "react";

import type { DesignaliProps } from "../../types";

export const AiSecurity03 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
         <path  d="M3.48,4.93c3.12.23,5.13-2.93,8.55-2.93,3.36-.07,5.01,2.98,8.46,2.98,1.85,9.41-2,15.32-8.43,17.02C6.09,20.58,1.62,14.61,3.48,4.93Z"/>
  <path  d="M11.27,13.24c-.06-.25-.26-.44-.51-.51l-2.17-.56c-.09-.03-.15-.12-.12-.22.02-.06.06-.11.12-.12l2.17-.56c.25-.06.44-.26.51-.51l.56-2.17c.03-.09.12-.15.22-.12.06.02.11.06.12.12l.56,2.17c.06.25.26.44.51.51l2.17.56c.09.03.15.12.12.22-.02.06-.06.11-.12.12l-2.17.56c-.25.06-.44.26-.51.51l-.56,2.17c-.03.09-.12.15-.22.12-.06-.02-.11-.06-.12-.12l-.56-2.17Z"/>
</svg>
    );
  },
);

export default AiSecurity03;
