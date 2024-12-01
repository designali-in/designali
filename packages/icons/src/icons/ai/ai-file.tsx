import * as React from "react";

import type { DesignaliProps } from "../../types";

export const AiFile = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M17.72,19.7c-.06-.25-.26-.44-.51-.51l-2.17-.56c-.09-.03-.15-.12-.12-.22.02-.06.06-.11.12-.12l2.17-.56c.25-.06.44-.26.51-.51l.56-2.17c.03-.09.12-.15.22-.12.06.02.11.06.12.12l.56,2.17c.06.25.26.44.51.51l2.17.56c.09.03.15.12.12.22-.02.06-.06.11-.12.12l-2.17.56c-.25.06-.44.26-.51.51l-.56,2.17c-.03.09-.12.15-.22.12-.06-.02-.11-.06-.12-.12l-.56-2.17Z" />
        <path d="M18,11v-1c0-3.77,0-5.66-1.17-6.83-1.17-1.17-3.06-1.17-6.83-1.17h-.99l-7.01,6.99v5.02c0,3.77,0,5.65,1.17,6.82h0c1.17,1.17,3.05,1.17,6.82,1.17" />
        <path d="M2,9h1c2.83,0,4.24,0,5.12-.88s.88-2.29.88-5.12v-1" />
      </svg>
    );
  },
);

export default AiFile;
