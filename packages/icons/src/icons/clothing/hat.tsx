import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Hat = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
       
       <path  d="M4.5,14l-2.15,1.72c-.22.18-.35.44-.35.72,0,.34.19.66.5.8,2.29,1.07,5.7,1.75,9.5,1.75s7.21-.68,9.5-1.75c.31-.14.5-.46.5-.8,0-.28-.13-.55-.35-.72l-2.15-1.72"/>
  <path  d="M12,15c3.07,0,5.79-.39,7.5-1l-.41-3.66c-.28-2.54-.42-3.81-1.28-4.57-.85-.76-2.13-.76-4.69-.76h-2.26c-2.55,0-3.83,0-4.69.76-.85.76-1,2.03-1.28,4.57l-.41,3.66c1.71.61,4.43,1,7.5,1Z"/>
  <line  x1="10.76" y1="10" x2="13.24" y2="10"/>
</svg>
    );
  },
);

export default Hat;
