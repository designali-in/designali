import * as React from "react";

import type { DesignaliProps } from "../../types";

export const AiSecurity03 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M20,13c0,5-3.5,7.5-7.66,8.95-.22.07-.45.07-.67-.01-4.17-1.44-7.67-3.94-7.67-8.94v-7c0-.55.45-1,1-1,2,0,4.5-1.2,6.24-2.72.44-.37,1.08-.37,1.52,0,1.75,1.53,4.24,2.72,6.24,2.72.55,0,1,.45,1,1v7Z" />

        <path d="M11.27,13.24c-.06-.25-.26-.44-.51-.51l-2.17-.56c-.09-.03-.15-.12-.12-.22.02-.06.06-.11.12-.12l2.17-.56c.25-.06.44-.26.51-.51l.56-2.17c.03-.09.12-.15.22-.12.06.02.11.06.12.12l.56,2.17c.06.25.26.44.51.51l2.17.56c.09.03.15.12.12.22-.02.06-.06.11-.12.12l-2.17.56c-.25.06-.44.26-.51.51l-.56,2.17c-.03.09-.12.15-.22.12-.06-.02-.11-.06-.12-.12l-.56-2.17Z" />
      </svg>
    );
  },
);

export default AiSecurity03;
