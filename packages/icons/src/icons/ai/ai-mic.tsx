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
        <path d="M17,11c0,2.76-2.24,5-5,5s-5-2.24-5-5v-4c0-2.76,2.24-5,5-5" />
        <path d="M20,11c0,4.42-3.58,8-8,8M12,19c-4.42,0-8-3.58-8-8M12,19v3" />
        <path d="M14.43,6.78c-.06-.25-.26-.44-.51-.51l-2.17-.56c-.09-.03-.15-.12-.12-.22.02-.06.06-.11.12-.12l2.17-.56c.25-.06.44-.26.51-.51l.56-2.17c.03-.09.12-.15.22-.12.06.02.11.06.12.12l.56,2.17c.06.25.26.44.51.51l2.17.56c.09.03.15.12.12.22-.02.06-.06.11-.12.12l-2.17.56c-.25.06-.44.26-.51.51l-.56,2.17c-.03.09-.12.15-.22.12-.06-.02-.11-.06-.12-.12l-.56-2.17Z" />
      </svg>
    );
  },
);

export default AiMic;
