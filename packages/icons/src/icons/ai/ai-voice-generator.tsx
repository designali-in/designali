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
        <path d="M5.6,7.55v2.89" />
        <path d="M15.24,6.11v5.79" />
        <path d="M12.03,8.28v1.45" />
        <path d="M18.46,8.28v1.45" />
        <path d="M8.81,6.11v5.79" />
        <path d="M17.72,19.7c-.06-.25-.26-.44-.51-.51l-2.17-.56c-.09-.03-.15-.12-.12-.22.02-.06.06-.11.12-.12l2.17-.56c.25-.06.44-.26.51-.51l.56-2.17c.03-.09.12-.15.22-.12.06.02.11.06.12.12l.56,2.17c.06.25.26.44.51.51l2.17.56c.09.03.15.12.12.22-.02.06-.06.11-.12.12l-2.17.56c-.25.06-.44.26-.51.51l-.56,2.17c-.03.09-.12.15-.22.12-.06-.02-.11-.06-.12-.12l-.56-2.17Z" />
        <path
          fill="none"
          d="M14.75,22H4c-1.1,0-2-.9-2-2V4c0-1.1.9-2,2-2h16c1.1,0,2,.9,2,2v10.68"
        />
      </svg>
    );
  },
);

export default AiVoiceGenerator;
