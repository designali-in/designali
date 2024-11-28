import * as React from "react";

import { DesignaliProps } from "../types";

export const LetterText = React.forwardRef<SVGSVGElement, DesignaliProps>(
  ({ color = "currentColor", ...props }, forwardedRef) => {
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
        <path d="M15 12h6" />
        <path d="M15 6h6" />
        <path d="m3 13 3.553-7.724a.5.5 0 0 1 .894 0L11 13" />
        <path d="M3 18h18" />
        <path d="M4 11h6" />
      </svg>
    );
  },
);

export default LetterText;
