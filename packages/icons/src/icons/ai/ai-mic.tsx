import * as React from "react";

import type { DesignaliProps } from "../../types";

export const AiMic = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M15.02,6.78c-.06-.25-.26-.44-.51-.51l-2.17-.56c-.09-.03-.15-.12-.12-.22.02-.06.06-.11.12-.12l2.17-.56c.25-.06.44-.26.51-.51l.56-2.17c.03-.09.12-.15.22-.12.06.02.11.06.12.12l.56,2.17c.06.25.26.44.51.51l2.17.56c.09.03.15.12.12.22-.02.06-.06.11-.12.12l-2.17.56c-.25.06-.44.26-.51.51l-.56,2.17c-.03.09-.12.15-.22.12-.06-.02-.11-.06-.12-.12l-.56-2.17Z" />
        <path
          fill="none"
          d="M12,2c-1.66,0-3,1.34-3,3v7c0,1.66,1.34,3,3,3,1.52,0,2.78-1.13,2.97-2.6"
        />
        <path fill="none" d="M19,10v2c0,3.87-3.13,7-7,7s-7-3.13-7-7v-2" />
        <line x1="12" y1="19" x2="12" y2="22" />
      </svg>
    );
  },
);

export default AiMic;
