import * as React from "react";

import type { DesignaliProps } from "../../types";

export const PencilOff = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
       
       <path  d="M10,10l-6.16,6.16c-.23.23-.4.52-.5.83l-1.32,4.36c-.08.26.07.54.33.62.09.03.19.03.29,0l4.36-1.32c.31-.1.6-.27.83-.5l6.17-6.17"/>
  <path  d="M12.83,7.17l4.36-4.35c1.1-1.1,2.89-1.1,3.99,0,1.1,1.1,1.1,2.89,0,3.99l-4.35,4.35"/>
  <path  d="M15,5l4,4"/>
  <path  d="M2,2l20,20"/>
</svg>
    );
  },
);

export default PencilOff;
