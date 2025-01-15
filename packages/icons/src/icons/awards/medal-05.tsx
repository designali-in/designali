import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Medal05 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M7.63,3.48c.31-.72.47-1.08.78-1.28.31-.2.71-.2,1.5-.2h4.18c.8,0,1.19,0,1.5.2.31.2.47.56.78,1.28l2.02,4.63c.5,1.14.75,1.71.52,2.2-.22.49-.82.69-2.02,1.08l-4.9,1.6-4.9-1.6c-1.2-.39-1.8-.59-2.02-1.08-.22-.49.03-1.06.52-2.2l2.02-4.63Z" />
        <path d="M12,13l-3.5-10.5M15.5,11.5l-3.5-9.5" />
        <path d="M12.78,13.65l.79,1.6c.11.22.4.44.64.48l1.44.24c.92.15,1.13.83.47,1.49l-1.12,1.13c-.19.19-.29.56-.23.82l.32,1.39c.25,1.1-.33,1.53-1.3.95l-1.35-.8c-.24-.15-.64-.15-.89,0l-1.35.8c-.96.58-1.55.15-1.3-.95l.32-1.39c.06-.26-.05-.63-.23-.82l-1.12-1.13c-.66-.66-.45-1.33.47-1.49l1.44-.24c.24-.04.53-.25.63-.48l.79-1.6c.43-.87,1.13-.87,1.56,0Z" />
      </svg>
    );
  },
);

export default Medal05;
