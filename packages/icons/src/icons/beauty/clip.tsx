import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Clip = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
       
       <path  d="M4,22h3.14c.37,0,.52-.33.59-.68.15-.77.76-1.32,1.46-1.32s1.31.55,1.46,1.32c.07.35.22.68.59.68h1.49c.37,0,.52-.33.59-.68.15-.77.76-1.32,1.46-1.32s1.31.55,1.46,1.32c.07.35.22.68.59.68h3.14"/>
  
    <path  d="M8.77,20s.85-8.18,1.16-10.52c.27-2.02-3.5-4.76-1.17-6.39,2.09-1.46,4.39-1.46,6.48,0,2.33,1.63-1.44,4.37-1.17,6.39.31,2.34,1.16,10.52,1.16,10.52"/>
    <path  d="M4.07,22v-8.37c0-1.68,1.02-3.04,2.29-3.04h11.29c1.26,0,2.29,1.36,2.29,3.04v8.37"/>

</svg>
    );
  },
);

export default Clip;
