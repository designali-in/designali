import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Crying = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
      <path  d="M9,15c.84-.63,1.87-1,3-1s2.16.37,3,1"/>
  <path  d="M9.5,8.5h-1.29c-.45,0-.89.18-1.21.5M14.5,8.5h1.29c.45,0,.89.18,1.21.5"/>
  <line  x1="6.14" y1="13" x2="6.14" y2="22"/>
  <line  x1="17.84" y1="13" x2="17.84" y2="22"/>
  <path  d="M15.75,21.27c-1.16.47-2.42.73-3.75.73s-2.59-.26-3.75-.73"/>
  <path  d="M3.34,17.01c-.85-1.47-1.34-3.18-1.34-5.01C2,6.48,6.48,2,12,2s10,4.48,10,10c0,1.82-.49,3.53-1.34,5.01-.03.05-.06.1-.09.15"/>
</svg>
    );
  },
);

export default Crying;
