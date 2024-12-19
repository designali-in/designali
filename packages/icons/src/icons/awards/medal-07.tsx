import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Medal07 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
         <circle  cx="12" cy="16.5" r="5.5"/>
  <path  d="M11,11l-4.81-2.06c-.95-.41-1.42-.61-1.73-.98-.1-.11-.18-.24-.25-.37-.22-.43-.22-.94-.22-1.97,0-1.51,0-2.27.39-2.8.12-.16.26-.31.43-.43.53-.39,1.29-.39,2.8-.39h8.77c1.52,0,2.27,0,2.8.39.16.12.31.26.43.43.39.53.39,1.29.39,2.8,0,1.03,0,1.55-.22,1.97-.07.13-.15.26-.25.37-.31.37-.78.57-1.73.98l-4.81,2.06"/>
  <path  d="M12,11V2"/>
  <circle  cx="12" cy="16.5" r="1.5"/>
</svg>
    );
  },
);

export default Medal07;
