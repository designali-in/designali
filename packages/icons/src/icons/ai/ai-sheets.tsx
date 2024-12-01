import * as React from "react";

import type { DesignaliProps } from "../../types";

export const AiSheets = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M12,21h-2c-3.77,0-5.66,0-6.83-1.17-1.17-1.17-1.17-3.06-1.17-6.83v-2c0-3.77,0-5.66,1.17-6.83,1.17-1.17,3.06-1.17,6.83-1.17h4c3.77,0,5.66,0,6.83,1.17,1.17,1.17,1.17,3.06,1.17,6.83v1.5" />
        <path d="M2,9h20" />
        <path d="M2,15h10" />
        <path d="M8,3v18" />
      </svg>
    );
  },
);

export default AiSheets;
