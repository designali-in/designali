import * as React from "react";

import type { DesignaliProps } from "../../types";

export const AiVisionRecognition = React.forwardRef<
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
      <path d="M9,11v3" />
      <path d="M11.5,3c-4.23,0-6.34,0-7.75,1.2-.2.17-.38.36-.55.55-1.2,1.4-1.2,3.52-1.2,7.75s0,6.34,1.2,7.75c.17.2.36.38.55.55,1.4,1.2,3.52,1.2,7.75,1.2s6.34,0,7.75-1.2c.2-.17.38-.36.55-.55,1.2-1.4,1.2-3.52,1.2-7.75" />
      <path d="M12,8v9" />
      <path d="M15,10v5" />
      <path d="M6,12v1" />
      <path d="M17.72,6.7c-.06-.25-.26-.44-.51-.51l-2.17-.56c-.09-.03-.15-.12-.12-.22.02-.06.06-.11.12-.12l2.17-.56c.25-.06.44-.26.51-.51l.56-2.17c.03-.09.12-.15.22-.12.06.02.11.06.12.12l.56,2.17c.06.25.26.44.51.51l2.17.56c.09.03.15.12.12.22-.02.06-.06.11-.12.12l-2.17.56c-.25.06-.44.26-.51.51l-.56,2.17c-.03.09-.12.15-.22.12-.06-.02-.11-.06-.12-.12l-.56-2.17Z" />
    </svg>
  );
});

export default AiVisionRecognition;
