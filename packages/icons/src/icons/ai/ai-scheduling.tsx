import * as React from "react";

import type { DesignaliProps } from "../../types";

export const AiScheduling = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M18,2v3M6,2v3" />
        <path d="M10.5,3.5h3c3.77,0,5.66,0,6.83,1.17,1.17,1.17,1.17,3.06,1.17,6.83v2.5c0,3.77,0,5.66-1.17,6.83-1.17,1.17-3.06,1.17-6.83,1.17h-3c-3.77,0-5.66,0-6.83-1.17-1.17-1.17-1.17-3.06-1.17-6.83v-2.5c0-3.77,0-5.66,1.17-6.83,1.17-1.17,3.06-1.17,6.83-1.17Z" />
        <path d="M3,8h18" />
        <path d="M11.27,16.28c-.06-.25-.26-.44-.51-.51l-2.17-.56c-.09-.03-.15-.12-.12-.22.02-.06.06-.11.12-.12l2.17-.56c.25-.06.44-.26.51-.51l.56-2.17c.03-.09.12-.15.22-.12.06.02.11.06.12.12l.56,2.17c.06.25.26.44.51.51l2.17.56c.09.03.15.12.12.22-.02.06-.06.11-.12.12l-2.17.56c-.25.06-.44.26-.51.51l-.56,2.17c-.03.09-.12.15-.22.12-.06-.02-.11-.06-.12-.12l-.56-2.17Z" />
      </svg>
    );
  },
);

export default AiScheduling;
