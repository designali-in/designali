import * as React from "react";

import type { DesignaliProps } from "../../types";

export const AiImage = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M17.72,6.78c-.06-.25-.26-.44-.51-.51l-2.17-.56c-.09-.03-.15-.12-.12-.22.02-.06.06-.11.12-.12l2.17-.56c.25-.06.44-.26.51-.51l.56-2.17c.03-.09.12-.15.22-.12.06.02.11.06.12.12l.56,2.17c.06.25.26.44.51.51l2.17.56c.09.03.15.12.12.22-.02.06-.06.11-.12.12l-2.17.56c-.25.06-.44.26-.51.51l-.56,2.17c-.03.09-.12.15-.22.12-.06-.02-.11-.06-.12-.12l-.56-2.17Z" />
        <path d="M21,11c0,.47,0,.97,0,1.5,0,4.48,0,6.72-1.39,8.11-1.39,1.39-3.63,1.39-8.11,1.39s-6.72,0-8.11-1.39c-1.39-1.39-1.39-3.63-1.39-8.11s0-6.72,1.39-8.11c1.39-1.39,3.63-1.39,8.11-1.39.53,0,1.03,0,1.5,0" />
        <path d="M4.5,21.5c4.37-5.23,9.27-12.12,16.5-7.46" />
        <circle cx="7" cy="8" r="1.34" />
      </svg>
    );
  },
);

export default AiImage;
