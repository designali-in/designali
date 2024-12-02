import * as React from "react";

import type { DesignaliProps } from "../../types";

export const AiMail02 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M17.09,19.36c-.07-.29-.3-.51-.58-.58l-2.5-.64c-.11-.03-.17-.14-.14-.25.02-.07.07-.12.14-.14l2.5-.64c.29-.07.51-.3.58-.58l.64-2.5c.03-.11.14-.17.25-.14.07.02.12.07.14.14l.64,2.5c.07.29.3.51.58.58l2.5.64c.11.03.17.14.14.25-.02.07-.07.12-.14.14l-2.5.64c-.29.07-.51.3-.58.58l-.64,2.5c-.03.11-.14.17-.25.14-.07-.02-.12-.07-.14-.14l-.64-2.5Z" />
        <path
          fill="none"
          d="M10.35,18h-6.35c-1.1,0-2-.9-2-2V4c0-1.1.9-2,2-2h16c1.1,0,2,.9,2,2v9.5"
        />
        <path fill="none" d="M22,5l-8.97,5.7c-.63.39-1.43.39-2.06,0L2,5" />
      </svg>
    );
  },
);

export default AiMail02;
