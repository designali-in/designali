import * as React from "react";

import type { DesignaliProps } from "../../types";

export const AiAudio = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <line x1="12" y1="10.25" x2="12" y2="17.75" />
        <line x1="15.12" y1="12" x2="15.12" y2="16" />
        <line x1="18.25" y1="13.18" x2="18.25" y2="14.82" />
        <line x1="8.87" y1="12" x2="8.87" y2="16" />
        <line x1="5.72" y1="13.18" x2="5.72" y2="14.82" />
        <path
          fill="none"
          d="M22,10.72v9.86c0,.79-.64,1.43-1.43,1.43H3.43c-.79,0-1.43-.64-1.43-1.43V6.4c0-.79.64-1.43,1.43-1.43h7.67"
        />
      </svg>
    );
  },
);

export default AiAudio;
