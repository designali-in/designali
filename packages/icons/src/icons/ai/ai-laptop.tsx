import * as React from "react";

import type { DesignaliProps } from "../../types";

export const AiLaptop = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path  d="M3.99,15V6.97c0-1.89,0-2.84.58-3.43.33-.33.76-.47,1.41-.54h4.98"/>
  <path  d="M3.49,16.01l.52-1.02h15.87l.55,1.02c1.44,2.66,1.8,3.99,1.25,4.99-.55,1-2,1-4.89,1H7.14c-2.9,0-4.35,0-4.89-1-.55-1-.19-2.33,1.25-4.99Z"/>
  <path  d="M15.44,2v1.98M11.96,5.5h2.04M19.96,5.5h2.04M19.96,8.47h2.04M11.96,8.47h2.04M15.44,10.02v1.98M18.45,10.02v1.98M18.44,2v1.98M15,9.97h3.96c.55,0,1-.45,1-1v-3.99c0-.55-.45-1-1-1h-3.96c-.55,0-1,.45-1,1v3.99c0,.55.45,1,1,1Z"/>
</svg>
    );
  },
);

export default AiLaptop;
