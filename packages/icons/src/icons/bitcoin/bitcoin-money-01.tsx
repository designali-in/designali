import * as React from "react";

import type { DesignaliProps } from "../../types";

export const BitcoinMoney01 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
      <path  d="M6.87,4c.08.32.13.65.13,1,0,2.21-1.79,4-4,4-.35,0-.68-.04-1-.13"/>
  <path  d="M22,8.87c-.32.08-.65.13-1,.13-2.21,0-4-1.79-4-4,0-.35.04-.68.13-1"/>
  <path  d="M17.13,20c-.08-.32-.13-.65-.13-1,0-2.21,1.79-4,4-4,.35,0,.68.04,1,.13"/>
  <path  d="M2,15.13c.32-.08.65-.13,1-.13,2.21,0,4,1.79,4,4,0,.35-.04.68-.13,1"/>
  <path  d="M10.44,14.67v-5.33M12,9.33v-1.33M12,16v-1.33M10.44,12h3.12M13.56,12c.52,0,.94.45.94,1v.67c0,.55-.42,1-.94,1h-4.06M13.56,12c.52,0,.94-.45.94-1v-.67c0-.55-.42-1-.94-1h-4.06"/>
  <rect  x="2" y="4" width="20" height="16" rx="2.78" ry="2.78"/>
</svg>
    );
  },
);

export default BitcoinMoney01;
