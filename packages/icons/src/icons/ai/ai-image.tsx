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
        <path fill="none" d="M4.35,22c4.37-5.23,10.42-13.34,17.65-8.68" />
        <circle cx="7" cy="7.12" r="1.34" />
        <path
          fill="none"
          d="M22,9.25v10.75c0,1.1-.9,2-2,2H4c-1.1,0-2-.9-2-2V4c0-1.1.9-2,2-2h10.68"
        />
      </svg>
    );
  },
);

export default AiImage;
