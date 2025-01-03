import * as React from "react";

import type { DesignaliProps } from "../../types";

export const KettleBell = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
       <path  d="M17,9c1.21-2.86,1.82-3.85,1.33-4.93-.15-.33-.37-.63-.64-.89-1.67-1.58-9.72-1.58-11.39,0-.27.25-.48.56-.64.89-.49,1.08.12,2.07,1.33,4.93"/>
  <path  d="M12,8c-4.42,0-8,3.58-8,8,0,1.85.62,3.55,1.67,4.9.72.93,1.39,1.1,2.55,1.1h7.56c1.16,0,1.83-.17,2.55-1.1,1.05-1.35,1.67-3.05,1.67-4.9,0-4.42-3.58-8-8-8Z"/>
  <circle  cx="12" cy="15" r="2.6"/>
  <line  x1="16.28" y1="15" x2="14.6" y2="15"/>
  <line  x1="9.4" y1="15" x2="7.72" y2="15"/>
</svg>
    );
  },
);

export default KettleBell;
