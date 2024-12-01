import * as React from "react";

import type { DesignaliProps } from "../../types";

export const AiCloud = React.forwardRef<SVGSVGElement, DesignaliProps>(
  ({  ...props }, forwardedRef) => {
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
        <path class="cls-1" d="M17.48,9s.01,0,.02,0c2.49,0,4.5,2.01,4.5,4.5,0,1.74-.99,3.25-2.44,4M17.48,9c.01-.16.02-.33.02-.5,0-3.04-2.46-5.5-5.5-5.5-2.88,0-5.24,2.21-5.48,5.02M17.48,9c-.1,1.13-.55,2.17-1.23,3M6.52,8.02c-2.54.24-4.52,2.38-4.52,4.98,0,1.98,1.15,3.69,2.82,4.5M6.52,8.02c.16-.02.32-.02.48-.02,1.13,0,2.16.37,3,1"/>
  <path class="cls-1" d="M11.27,19.74c-.06-.25-.26-.44-.51-.51l-2.17-.56c-.09-.03-.15-.12-.12-.22.02-.06.06-.11.12-.12l2.17-.56c.25-.06.44-.26.51-.51l.56-2.17c.03-.09.12-.15.22-.12.06.02.11.06.12.12l.56,2.17c.06.25.26.44.51.51l2.17.56c.09.03.15.12.12.22-.02.06-.06.11-.12.12l-2.17.56c-.25.06-.44.26-.51.51l-.56,2.17c-.03.09-.12.15-.22.12-.06-.02-.11-.06-.12-.12l-.56-2.17Z"/>
</svg>
    );
  },
);

export default AiCloud;
