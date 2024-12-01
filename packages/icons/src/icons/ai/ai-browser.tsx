import * as React from "react";

import type { DesignaliProps } from "../../types";

export const AiBrowser = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path  d="M20.96,13.16c0-.47,0-.97,0-1.5,0-4.47,0-6.7-1.39-8.09-1.39-1.39-3.62-1.39-8.09-1.39s-6.7,0-8.09,1.39c-1.39,1.39-1.39,3.62-1.39,8.09s0,6.7,1.39,8.09c1.39,1.39,3.62,1.39,8.09,1.39.53,0,1.03,0,1.5,0"/>
  <path  d="M2,9.17h18.96"/>
  <path  d="M6.49,5.68h0"/>
  <path  d="M10.48,5.68h0"/>
  <path  d="M17.73,19.51c-.06-.25-.26-.44-.51-.51l-2.17-.56c-.09-.03-.15-.12-.12-.22.02-.06.06-.11.12-.12l2.17-.56c.25-.06.44-.26.51-.51l.56-2.17c.03-.09.12-.15.22-.12.06.02.11.06.12.12l.56,2.17c.06.25.26.44.51.51l2.17.56c.09.03.15.12.12.22-.02.06-.06.11-.12.12l-2.17.56c-.25.06-.44.26-.51.51l-.56,2.17c-.03.09-.12.15-.22.12-.06-.02-.11-.06-.12-.12l-.56-2.17Z"/>
</svg>
    );
  },
);

export default AiBrowser;
