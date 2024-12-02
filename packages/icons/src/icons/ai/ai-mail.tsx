import * as React from "react";

import type { DesignaliProps } from "../../types";

export const AiMail = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path
          fill="none"
          d="M19.48,5.87h.52c1.1,0,2,.9,2,2v12c0,1.1-.9,2-2,2H4c-1.1,0-2-.9-2-2V7.87c0-1.1.9-2,2-2h.45"
        />
        <path
          fill="none"
          d="M22,8.87l-8.97,5.7c-.63.39-1.43.39-2.06,0L2,8.87"
        />
        <path d="M11.16,7.29c-.07-.29-.3-.51-.58-.58l-2.5-.64c-.11-.03-.17-.14-.14-.25.02-.07.07-.12.14-.14l2.5-.64c.29-.07.51-.3.58-.58l.64-2.5c.03-.11.14-.17.25-.14.07.02.12.07.14.14l.64,2.5c.07.29.3.51.58.58l2.5.64c.11.03.17.14.14.25-.02.07-.07.12-.14.14l-2.5.64c-.29.07-.51.3-.58.58l-.64,2.5c-.03.11-.14.17-.25.14-.07-.02-.12-.07-.14-.14l-.64-2.5Z" />
      </svg>
    );
  },
);

export default AiMail;
