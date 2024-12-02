import * as React from "react";

import type { DesignaliProps } from "../../types";

export const AiChemistry02 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M17.72,19.7c-.06-.25-.26-.44-.51-.51l-2.17-.56c-.09-.03-.15-.12-.12-.22.02-.06.06-.11.12-.12l2.17-.56c.25-.06.44-.26.51-.51l.56-2.17c.03-.09.12-.15.22-.12.06.02.11.06.12.12l.56,2.17c.06.25.26.44.51.51l2.17.56c.09.03.15.12.12.22-.02.06-.06.11-.12.12l-2.17.56c-.25.06-.44.26-.51.51l-.56,2.17c-.03.09-.12.15-.22.12-.06-.02-.11-.06-.12-.12l-.56-2.17Z" />
        <path
          fill="none"
          d="M14.35,15.93l-2.75-5.5c-.14-.28-.21-.58-.21-.9V2"
        />
        <path
          fill="none"
          d="M7.39,2v7.53c0,.31-.07.62-.21.9l-5.07,10.13c-.25.49-.05,1.09.44,1.34.14.07.3.11.46.11h12.35"
        />
        <path d="M5.89,2h7" />
        <path d="M5.63,13.62h7.57" />
      </svg>
    );
  },
);

export default AiChemistry02;
