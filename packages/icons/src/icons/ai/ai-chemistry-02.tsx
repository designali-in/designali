import * as React from "react";

import type { DesignaliProps } from "../../types";

export const AiChemistry02 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
       <path  d="M14,22H5.41c-1.33,0-2.41-1.08-2.41-2.41,0-.39.09-.77.27-1.12l5.23-9.98V2h5v6.5l2,3.82"/>
  <path  d="M7,2h8"/>
  <path  d="M7,11.5h8"/>
  <path  d="M17.72,19.7c-.06-.25-.26-.44-.51-.51l-2.17-.56c-.09-.03-.15-.12-.12-.22.02-.06.06-.11.12-.12l2.17-.56c.25-.06.44-.26.51-.51l.56-2.17c.03-.09.12-.15.22-.12.06.02.11.06.12.12l.56,2.17c.06.25.26.44.51.51l2.17.56c.09.03.15.12.12.22-.02.06-.06.11-.12.12l-2.17.56c-.25.06-.44.26-.51.51l-.56,2.17c-.03.09-.12.15-.22.12-.06-.02-.11-.06-.12-.12l-.56-2.17Z"/>
</svg>
    );
  },
);

export default AiChemistry02;
