import * as React from "react";

import type { DesignaliProps } from "../../types";

export const AiContentGenerator01 = React.forwardRef<
  SVGSVGElement,
  DesignaliProps
>(({ ...props }, forwardedRef) => {
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
      <path d="M11,21h-1c-3.77,0-5.66,0-6.83-1.17-1.17-1.17-1.17-3.06-1.17-6.83v-3c0-3.77,0-5.66,1.17-6.83,1.17-1.17,3.06-1.17,6.83-1.17h2c3.77,0,5.66,0,6.83,1.17,1.17,1.17,1.17,3.06,1.17,6.83v.5" />
      <line x1="6.77" y1="7" x2="14.77" y2="7" />
      <line x1="6.81" y1="11.5" x2="14.81" y2="11.5" />
      <line x1="6.77" y1="16" x2="11.23" y2="16" />
      <path d="M17.72,19.7c-.06-.25-.26-.44-.51-.51l-2.17-.56c-.09-.03-.15-.12-.12-.22.02-.06.06-.11.12-.12l2.17-.56c.25-.06.44-.26.51-.51l.56-2.17c.03-.09.12-.15.22-.12.06.02.11.06.12.12l.56,2.17c.06.25.26.44.51.51l2.17.56c.09.03.15.12.12.22-.02.06-.06.11-.12.12l-2.17.56c-.25.06-.44.26-.51.51l-.56,2.17c-.03.09-.12.15-.22.12-.06-.02-.11-.06-.12-.12l-.56-2.17Z" />
    </svg>
  );
});

export default AiContentGenerator01;
