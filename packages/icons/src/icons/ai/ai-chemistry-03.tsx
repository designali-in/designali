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
        <path d="M17.72,19.7c-.06-.25-.26-.44-.51-.51l-2.17-.56c-.09-.03-.15-.12-.12-.22.02-.06.06-.11.12-.12l2.17-.56c.25-.06.44-.26.51-.51l.56-2.17c.03-.09.12-.15.22-.12.06.02.11.06.12.12l.56,2.17c.06.25.26.44.51.51l2.17.56c.09.03.15.12.12.22-.02.06-.06.11-.12.12l-2.17.56c-.25.06-.44.26-.51.51l-.56,2.17c-.03.09-.12.15-.22.12-.06-.02-.11-.06-.12-.12l-.56-2.17Z" />
        <path d="M6.5,2.01v7.31" />
        <path d="M10.5,9.31V2" />
        <path d="M5,2.01h7" />
        <path
          fill="none"
          d="M12.99,20.2c-1.67,1.59-4.14,2.24-6.48,1.48-3.42-1.1-5.29-4.77-4.18-8.18.64-1.99,2.2-3.54,4.18-4.18"
        />
        <path fill="none" d="M10.5,9.31c2.72.88,4.46,3.38,4.5,6.09" />
        <path d="M2.32,13.49h12.37" />
      </svg>
    );
  },
);

export default AiChemistry03;
