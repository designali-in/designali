import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Medal04 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path  d="M12.78,13.65l.79,1.6c.11.22.4.44.64.48l1.44.24c.92.15,1.13.83.47,1.49l-1.12,1.13c-.19.19-.29.56-.23.82l.32,1.39c.25,1.1-.33,1.53-1.3.95l-1.35-.8c-.24-.15-.64-.15-.89,0l-1.35.8c-.96.58-1.55.15-1.3-.95l.32-1.39c.06-.26-.05-.63-.23-.82l-1.12-1.13c-.66-.66-.45-1.33.47-1.49l1.44-.24c.24-.04.53-.25.63-.48l.79-1.6c.43-.87,1.13-.87,1.56,0Z"/>
  <path  d="M17.26,2.01H6.74c-.81,0-1.88-.16-2.44.68-.31.46-.31,1.14-.31,2.48,0,1.15,0,1.72.21,2.2.35.83,1.14,1.18,1.81,1.57l3.3,1.9c1.32.76,1.98,1.14,2.68,1.14s1.37-.38,2.68-1.14l3.3-1.9c.67-.39,1.46-.75,1.81-1.57.21-.48.21-1.06.21-2.2,0-1.35,0-2.02-.31-2.48-.55-.84-1.63-.68-2.44-.68Z"/>
  <path  d="M12,2v5"/>
</svg>
    );
  },
);

export default Medal04;
