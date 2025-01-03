import * as React from "react";

import type { DesignaliProps } from "../../types";

export const BitcoinSquare = React.forwardRef<SVGSVGElement, DesignaliProps>(
  ({...props }, forwardedRef) => {
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
         <path  d="M12.1,16.33c2.95.52,3.67-3.6.73-4.12M12.1,16.33l-3.53-.62M12.1,16.33l-.21,1.18M12.83,12.21c2.95.52,3.67-3.6.73-4.12M12.83,12.21l-2.36-.42M13.55,8.08l-3.54-.62M13.55,8.08l.21-1.18M9.53,17.09l1.87-10.61"/>
  <rect  x="2" y="2" width="20" height="20" rx="4.33" ry="4.33"/>
</svg>
    );
  },
);

export default BitcoinSquare;
