import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Medal02 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M3,5.11c0-.55,0-.83.04-1.06.19-1.02.98-1.82,2-2.01.23-.04.5-.04,1.05-.04h11.82c.55,0,.82,0,1.05.04,1.01.19,1.81.99,2,2.01.04.23.04.51.04,1.06s0,.81-.03,1.06c-.14,1.1-.72,2.09-1.6,2.74-.2.15-.44.28-.91.54l-2.57,1.44c-1.9,1.06-2.85,1.59-3.89,1.59s-1.99-.53-3.89-1.59l-2.57-1.44c-.47-.26-.71-.39-.91-.54-.89-.65-1.47-1.65-1.6-2.74-.03-.25-.03-.52-.03-1.06Z" />
        <path d="M8,5v1M12,5v3M16,5v1" />
        <path d="M12.78,13.65l.79,1.6c.11.22.4.44.64.48l1.44.24c.92.15,1.13.83.47,1.49l-1.12,1.13c-.19.19-.29.56-.23.82l.32,1.39c.25,1.1-.33,1.53-1.3.95l-1.35-.8c-.24-.15-.64-.15-.89,0l-1.35.8c-.96.58-1.55.15-1.3-.95l.32-1.39c.06-.26-.05-.63-.23-.82l-1.12-1.13c-.66-.66-.45-1.33.47-1.49l1.44-.24c.24-.04.53-.25.63-.48l.79-1.6c.43-.87,1.13-.87,1.56,0Z" />
      </svg>
    );
  },
);

export default Medal02;
