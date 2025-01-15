import * as React from "react";

import type { DesignaliProps } from "../../types";

export const CowboyHat = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
       
       <path  d="M16.28,18c-.99,1.1-2.26,2-4.28,2s-3.29-.9-4.28-2M16.28,18c1.21-1.35,1.98-3.02,3.12-3.69M16.28,18c2.07,0,5.72.56,5.72-2.5,0-.79-.68-1.5-1.5-1.5-.28,0-.54.05-.78.15M19.72,14.15c-.11.04-.22.1-.32.16M19.72,14.15c-.1.05-.21.1-.32.16M19.4,14.31c-1.32.65-3.72,1.69-7.4,1.69s-6.07-1.04-7.4-1.69M7.72,18c-1.21-1.35-1.98-3.02-3.12-3.69M7.72,18c-2.07,0-5.72.56-5.72-2.5,0-.79.68-1.5,1.5-1.5.28,0,.54.05.78.15M4.28,14.15c.11.04.22.1.32.16M4.28,14.15c.1.05.21.1.32.16"/>
  <path  d="M6,12c0-1.51.44-5.37,2.58-7.6.26-.27.62-.4.99-.4.27,0,.52.14.67.38l.21.33c.35.55.93.89,1.55.89s1.21-.33,1.55-.89l.21-.33c.15-.24.4-.38.67-.38.37,0,.73.13.99.4,2.13,2.23,2.58,6.09,2.58,7.6"/>
  <path  d="M6.11,10.51c1.34.45,3.39.98,5.93.97,2.5,0,4.52-.52,5.85-.97"/>
</svg>
    );
  },
);

export default CowboyHat;
