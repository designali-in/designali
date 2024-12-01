import * as React from "react";

import type { DesignaliProps } from "../../types";

export const AiVoiceGenerator = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M22,11v-2c0-2.83,0-4.24-.88-5.12s-2.29-.88-5.12-.88h-8c-2.83,0-4.24,0-5.12.88s-.88,2.29-.88,5.12,0,4.24.88,5.12c.88.88,2.29.88,5.12.88h3" />
        <path d="M6,8v2" />
        <path d="M15,7v4" />
        <path d="M12,8.5v1" />
        <path d="M18,8.5v1" />
        <path d="M9,7v4" />
        <path d="M17.72,19.7c-.06-.25-.26-.44-.51-.51l-2.17-.56c-.09-.03-.15-.12-.12-.22.02-.06.06-.11.12-.12l2.17-.56c.25-.06.44-.26.51-.51l.56-2.17c.03-.09.12-.15.22-.12.06.02.11.06.12.12l.56,2.17c.06.25.26.44.51.51l2.17.56c.09.03.15.12.12.22-.02.06-.06.11-.12.12l-2.17.56c-.25.06-.44.26-.51.51l-.56,2.17c-.03.09-.12.15-.22.12-.06-.02-.11-.06-.12-.12l-.56-2.17Z" />
      </svg>
    );
  },
);

export default AiVoiceGenerator;
