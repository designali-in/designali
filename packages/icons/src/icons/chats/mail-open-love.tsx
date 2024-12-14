import * as React from "react";

import type { DesignaliProps } from "../../types";

export const MailOpenLove = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
          d="M22,12.5v-6.5c0-1.1-.9-2-2-2H4c-1.1,0-2,.9-2,2v12c0,1.1.9,2,2,2h9.43"
        />
        <path fill="none" d="M22,7l-8.97,5.7c-.63.39-1.43.39-2.06,0L2,7" />

        <path d="M21.21,18.95c.39-.38.79-.83.79-1.41,0-.78-.64-1.41-1.44-1.41-.46,0-.79.13-1.18.51-.39-.39-.72-.51-1.18-.51-.79,0-1.44.63-1.44,1.41,0,.59.39,1.04.79,1.41l1.83,1.8,1.83-1.8Z" />
      </svg>
    );
  },
);

export default MailOpenLove;
