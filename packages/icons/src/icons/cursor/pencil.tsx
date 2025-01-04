import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Pencil = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
       
       <path  d="M21.17,6.81c1.1-1.1,1.1-2.89,0-3.99-1.1-1.1-2.89-1.1-3.99,0L3.84,16.17c-.23.23-.4.52-.5.83l-1.32,4.35c-.08.26.07.54.34.62.09.03.19.03.29,0l4.35-1.32c.31-.1.6-.27.83-.5l13.35-13.35Z"/>
  <path  d="M15,5l4,4"/>
</svg>
    );
  },
);

export default Pencil;
