import * as React from "react";

import type { DesignaliProps } from "../../types";

export const BitcoinShopping = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
      <path  d="M4.3,17.19l-1.14-6.93c-.17-1.05-.26-1.57.02-1.92.28-.34.78-.34,1.8-.34h14.05c1.01,0,1.52,0,1.8.34.28.34.19.87.02,1.92l-1.14,6.93c-.38,2.3-.57,3.45-1.34,4.13-.77.68-1.88.68-4.11.68h-4.51c-2.22,0-3.34,0-4.11-.68-.77-.68-.96-1.83-1.34-4.13Z"/>
  <path  d="M10.44,17.67v-5.33M12,12.33v-1.33M12,19v-1.33M10.44,15h3.12M13.56,15c.52,0,.94.45.94,1v.67c0,.55-.42,1-.94,1h-4.06M13.56,15c.52,0,.94-.45.94-1v-.67c0-.55-.42-1-.94-1h-4.06"/>
  <path  d="M6,8h0c0-3.31,2.69-6,6-6h0c3.31,0,6,2.69,6,6h0"/>
</svg>
    );
  },
);

export default BitcoinShopping;
