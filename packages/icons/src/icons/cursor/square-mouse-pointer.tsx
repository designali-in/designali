import * as React from "react";

import type { DesignaliProps } from "../../types";

export const SquareMousePointer = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
       
       <path  d="M11.51,12.19c-.11-.27.02-.57.29-.68.12-.05.26-.05.39,0l9.47,3.68c.27.11.4.41.3.68-.06.15-.18.26-.33.31l-3.63,1.12c-.33.1-.59.36-.69.69l-1.12,3.62c-.09.28-.38.43-.66.35-.15-.05-.28-.16-.33-.31l-3.68-9.47Z"/>
  <path  d="M20.95,10.42v-6.32c0-1.16-.94-2.11-2.11-2.11H4.11c-1.16,0-2.11.94-2.11,2.11v14.74c0,1.16.94,2.11,2.11,2.11h6.32"/>
</svg>
    );
  },
);

export default SquareMousePointer;
