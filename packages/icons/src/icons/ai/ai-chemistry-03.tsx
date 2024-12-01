import * as React from "react";

import type { DesignaliProps } from "../../types";

export const AiChemistry03 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M6.5,2h8" />
        <path d="M17.5,11.8c-.79-2.04-2.44-3.65-4.5-4.38V2h-5v5.43c-2.91,1.03-5,3.81-5,7.07,0,4.14,3.36,7.5,7.5,7.5,1.07,0,2.08-.22,3-.62" />
        <path d="M4,11h13" />
        <path d="M17.72,19.7c-.06-.25-.26-.44-.51-.51l-2.17-.56c-.09-.03-.15-.12-.12-.22.02-.06.06-.11.12-.12l2.17-.56c.25-.06.44-.26.51-.51l.56-2.17c.03-.09.12-.15.22-.12.06.02.11.06.12.12l.56,2.17c.06.25.26.44.51.51l2.17.56c.09.03.15.12.12.22-.02.06-.06.11-.12.12l-2.17.56c-.25.06-.44.26-.51.51l-.56,2.17c-.03.09-.12.15-.22.12-.06-.02-.11-.06-.12-.12l-.56-2.17Z" />
      </svg>
    );
  },
);

export default AiChemistry03;
