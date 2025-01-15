import * as React from "react";

import type { DesignaliProps } from "../../types";

export const DraftingCompass = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M13.1,6.16l2.14,3.82" />
        <path d="M19.93,12c-4.3,4.38-11.33,4.44-15.71.14-.05-.05-.1-.1-.14-.14" />
        <path d="M22,22l-2.4-4.27" />
        <path d="M2,22L10.91,6.16" />
        <circle cx="12" cy="4.22" r="2.22" />
      </svg>
    );
  },
);

export default DraftingCompass;
