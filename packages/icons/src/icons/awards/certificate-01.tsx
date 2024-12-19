import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Certificate01 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path  d="M11.5,22c-4.01,0-6.01,0-7.26-1.46-1.24-1.46-1.24-3.82-1.24-8.54s0-7.07,1.24-8.54c1.24-1.46,3.25-1.46,7.26-1.46s6.01,0,7.26,1.46c1,1.18,1.2,2.94,1.24,6.04"/>
  <path  d="M8,8h7M8,13h3"/>
  <path  d="M19.61,18.11c.84-.61,1.39-1.61,1.39-2.73,0-1.86-1.51-3.38-3.38-3.38h-.25c-1.86,0-3.38,1.51-3.38,3.38,0,1.12.55,2.12,1.39,2.73M19.61,18.11c-.56.41-1.24.64-1.98.64h-.25c-.74,0-1.43-.24-1.98-.64M19.61,18.11l.58,1.83c.22.7.33,1.05.3,1.27-.06.45-.43.79-.87.79-.21,0-.52-.16-1.15-.49-.27-.14-.4-.21-.54-.25-.28-.08-.58-.08-.86,0-.14.04-.27.11-.54.25-.63.33-.94.49-1.15.49-.44,0-.81-.34-.87-.79-.03-.22.08-.57.3-1.27l.58-1.83"/>
</svg>
    );
  },
);

export default Certificate01;
