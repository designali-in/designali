import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Displeased = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M9,15.68c2.09-1.38,4.5-.54,6,1.32" />
        <path d="M7,9.01s1.41-.13,2.2.5M9.2,9.51l-.26.83c-.1.33.17.66.54.66.4,0,.66-.36.45-.67-.18-.27-.43-.58-.73-.83ZM14,9.01s1.41-.13,2.2.5M16.2,9.51l-.26.83c-.1.33.17.66.54.66.4,0,.66-.36.45-.67-.18-.27-.43-.58-.73-.83Z" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    );
  },
);

export default Displeased;
