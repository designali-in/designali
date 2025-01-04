import * as React from "react";

import type { DesignaliProps } from "../../types";

export const ContactRound = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
       <path  d="M16,2v2"/>
  <path  d="M17.92,22c0-3.31-2.69-6-6-6s-6,2.69-6,6"/>
  <path  d="M8,2v2"/>
  <circle  cx="12" cy="12" r="4"/>
  <rect  x="3" y="4" width="18" height="18" rx="2" ry="2"/>
</svg>
    );
  },
);

export default ContactRound;
