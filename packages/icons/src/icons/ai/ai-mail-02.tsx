import * as React from "react";

import type { DesignaliProps } from "../../types";

export const AiMail02 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M2,5.5l6.91,3.92c2.55,1.44,3.63,1.44,6.17,0l6.91-3.92" />
        <path d="M21.98,12.98c.02-.99.02-1.97,0-2.95-.07-3.07-.1-4.6-1.23-5.73-1.13-1.14-2.71-1.17-5.85-1.25-1.94-.05-3.86-.05-5.8,0-3.15.08-4.72.12-5.85,1.25-1.13,1.14-1.16,2.67-1.23,5.73-.02.99-.02,1.97,0,2.95.07,3.07.1,4.6,1.23,5.73,1.13,1.14,2.71,1.18,5.85,1.25,1.31.03,2.6.04,3.9.03" />
        <path d="M17.72,19.7c-.06-.25-.26-.44-.51-.51l-2.17-.56c-.09-.03-.15-.12-.12-.22.02-.06.06-.11.12-.12l2.17-.56c.25-.06.44-.26.51-.51l.56-2.17c.03-.09.12-.15.22-.12.06.02.11.06.12.12l.56,2.17c.06.25.26.44.51.51l2.17.56c.09.03.15.12.12.22-.02.06-.06.11-.12.12l-2.17.56c-.25.06-.44.26-.51.51l-.56,2.17c-.03.09-.12.15-.22.12-.06-.02-.11-.06-.12-.12l-.56-2.17Z" />
      </svg>
    );
  },
);

export default AiMail02;
