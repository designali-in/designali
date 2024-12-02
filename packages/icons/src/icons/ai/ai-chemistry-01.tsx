import * as React from "react";

import type { DesignaliProps } from "../../types";

export const AiChemistry01 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M4.5,2h10" />
        <path d="M17.08,19.35c-.07-.29-.3-.51-.59-.59l-2.5-.65c-.11-.03-.17-.14-.14-.25.02-.07.07-.12.14-.14l2.5-.65c.29-.07.51-.3.59-.59l.65-2.5c.03-.11.14-.17.25-.14.07.02.12.07.14.14l.64,2.5c.07.29.3.51.59.59l2.5.64c.11.03.17.14.14.25-.02.07-.07.12-.14.14l-2.5.64c-.29.07-.51.3-.59.59l-.65,2.5c-.03.11-.14.17-.25.14-.07-.02-.12-.07-.14-.14l-.64-2.5Z" />
        <path d="M2,2h16.67" />
        <path d="M17,10.51V2" />
        <path fill="none" d="M3.67,2v17.78c0,1.23.99,2.22,2.22,2.22h7.95" />
        <path d="M3.67,7.83h13.33" />
      </svg>
    );
  },
);

export default AiChemistry01;
