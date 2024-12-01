import * as React from "react";

import type { DesignaliProps } from "../../types";

export const AiMagic = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M17.85,6.78c-.06-.25-.26-.44-.51-.51l-2.17-.56c-.09-.03-.15-.12-.12-.22.02-.06.06-.11.12-.12l2.17-.56c.25-.06.44-.26.51-.51l.56-2.17c.03-.09.12-.15.22-.12.06.02.11.06.12.12l.56,2.17c.06.25.26.44.51.51l2.17.56c.09.03.15.12.12.22-.02.06-.06.11-.12.12l-2.17.56c-.25.06-.44.26-.51.51l-.56,2.17c-.03.09-.12.15-.22.12-.06-.02-.11-.06-.12-.12l-.56-2.17Z" />
        <path d="M9.03,16.1c-.16-.62-.65-1.11-1.27-1.27l-5.43-1.4c-.23-.07-.37-.31-.3-.55.04-.15.16-.26.3-.3l5.43-1.4c.62-.16,1.11-.65,1.27-1.27l1.4-5.43c.07-.24.31-.37.55-.31.15.04.27.16.31.31l1.4,5.43c.16.62.65,1.11,1.27,1.27l5.43,1.4c.24.06.37.31.31.54-.04.15-.16.27-.31.31l-5.43,1.4c-.62.16-1.11.65-1.27,1.27l-1.4,5.43c-.07.24-.31.37-.55.31-.15-.04-.27-.16-.31-.31l-1.4-5.43Z" />
      </svg>
    );
  },
);

export default AiMagic;
