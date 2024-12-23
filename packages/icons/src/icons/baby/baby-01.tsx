import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Baby01 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
       <path  d="M14,16c-.57.63-1.26,1-2,1s-1.43-.37-2-1"/>
    <path  d="M9,11.5c-.29-.32-.63-.5-1-.5s-.71.18-1,.5"/>
    <path  d="M17,11.5c-.29-.32-.63-.5-1-.5s-.71.18-1,.5"/>
    <path  d="M12,2c-1.66,0-3,1.34-3,3s1.34,3,3,3c.77,0,1.47-.29,2-.76"/>
 
  <circle  cx="12" cy="12" r="10"/>
</svg>
    );
  },
);

export default Baby01;
