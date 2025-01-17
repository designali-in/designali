import * as React from "react";

import type { DesignaliProps } from "../../types";

export const BitcoinPiggyBank = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
       <path  d="M21.5,11.03c.32.77.5,1.61.5,2.47,0,2.06-1,3.92-2.61,5.28-.24.2-.39.5-.39.81v2.41h-2l-.79-1.13c-.12-.18-.34-.25-.55-.2-1.73.44-3.58.44-5.31,0-.21-.05-.43.02-.55.2l-.79,1.13h-2v-2.38c0-.33-.16-.64-.43-.82-1.07-.74-4.57-2.19-4.57-3.73v-1.56c0-.59.45-1.07,1-1.07.61,0,1.1-.24,1.3-.86.77-2.4,2.93-4.33,5.72-5.15"/>
  <path  d="M14.12,9.5V3.5M16,3.5v-1.5M16,11v-1.5M14.12,6.5h3.75M17.88,6.5c.62,0,1.12.5,1.12,1.12v.75c0,.62-.5,1.12-1.12,1.12h-4.88M17.88,6.5c.62,0,1.12-.5,1.12-1.12v-.75c0-.62-.5-1.12-1.12-1.12h-4.88"/>
  <circle  cx="8.7" cy="11.47" r=".25"/>
</svg>
    );
  },
);

export default BitcoinPiggyBank;
