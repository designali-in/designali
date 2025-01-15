import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Monocle01 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path  d="M19,19.14c-1.8,1.77-4.27,2.86-7,2.86-5.52,0-10-4.48-10-10S6.48,2,12,2c2.8,0,5.33,1.15,7.14,3"/>
  <path  d="M8,15c.91,1.21,2.36,2,4,2,.71,0,1.39-.15,2-.42"/>
  <path  d="M22,12c-.21-.4-.31-.59-.45-.77-.35-.44-.87-.79-1.5-1-.24-.08-.51-.13-1.06-.24"/>
  <circle  cx="16.35" cy="9.65" r="2.65"/>
  <line  x1="8.99" y1="8.81" x2="9" y2="8.81"/>
  <line  x1="22" y1="14.54" x2="22.01" y2="14.54"/>
  <line  x1="22" y1="17" x2="22.01" y2="17"/>
  <line  x1="22" y1="19.42" x2="22.01" y2="19.42"/>
</svg>
    );
  },
);

export default Monocle01;
