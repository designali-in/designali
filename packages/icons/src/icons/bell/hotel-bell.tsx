import * as React from "react";

import type { DesignaliProps } from "../../types";

export const HotelBell = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
       <path  d="M3,20c-.55,0-1-.45-1-1v-1c0-1.1.9-2,2-2h16c1.1,0,2,.9,2,2v1c0,.55-.45,1-1,1H3Z"/>
    <path  d="M20,16c0-4.42-3.58-8-8-8s-8,3.58-8,8"/>
    <path  d="M12,4v4"/>
    <path  d="M10,4h4"/>
 
  
    <path  d="M19,4.29l-.5,1M21.5,6.79l-1,.5"/>
    <path  d="M5,4.29l.5,1M3.5,7.29l-1-.5"/>
  
</svg>
    );
  },
);

export default HotelBell;
