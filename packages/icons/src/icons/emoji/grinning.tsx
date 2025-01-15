import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Grinning = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
         <path  d="M8,9c.42.32,1.19.71,1.29,1.34,0,.04,0,.07.01.11.02.43-.29.8-.91,1.55M16,9c-.42.32-1.19.71-1.29,1.34,0,.04,0,.07-.01.11-.02.43.29.8.91,1.55"/>
  <path  d="M8.02,16.09c2.2,2.2,5.77,2.2,7.97,0"/>
  <path  d="M22,11.05v1c-.03,5.52-4.53,9.98-10.05,9.95-5.52-.03-9.98-4.53-9.95-10.05.03-5.52,4.53-9.98,10.05-9.95.32,0,.63.02.95.05"/>
  <path  d="M17.3,5.52c0-1.47,1.63-2.99,2.17-3.46.1-.08.25-.08.35,0,.55.47,2.17,2,2.17,3.46,0,1.3-1.05,2.35-2.35,2.35s-2.35-1.05-2.35-2.35"/>
</svg>
    );
  },
);

export default Grinning;
