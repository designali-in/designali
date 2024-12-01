import * as React from "react";

import type { DesignaliProps } from "../../types";

export const AiContentGenerator02 = React.forwardRef<
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
      <path d="M17.72,19.7c-.06-.25-.26-.44-.51-.51l-2.17-.56c-.09-.03-.15-.12-.12-.22.02-.06.06-.11.12-.12l2.17-.56c.25-.06.44-.26.51-.51l.56-2.17c.03-.09.12-.15.22-.12.06.02.11.06.12.12l.56,2.17c.06.25.26.44.51.51l2.17.56c.09.03.15.12.12.22-.02.06-.06.11-.12.12l-2.17.56c-.25.06-.44.26-.51.51l-.56,2.17c-.03.09-.12.15-.22.12-.06-.02-.11-.06-.12-.12l-.56-2.17Z" />

      <path d="M11,20c-3.75,0-5.62,0-6.94-.95-.42-.31-.8-.68-1.11-1.11-.95-1.31-.95-3.19-.95-6.94s0-5.62.95-6.94c.31-.42.68-.8,1.11-1.11,1.31-.95,3.19-.95,6.94-.95h.5c3.27,0,4.91,0,6.11.74.67.41,1.24.98,1.65,1.65.74,1.2.74,2.84.74,6.11" />
      <path d="M11,7h-4v1M11,7h4v1M11,7v8M11,15h-1M11,15h1" />
    </svg>
  );
});

export default AiContentGenerator02;
