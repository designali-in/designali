import * as React from "react";

import type { DesignaliProps } from "../../types";

export const BitcoinMind = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
       <path  d="M10.44,12.67v-5.33M12,7.33v-1.33M12,14v-1.33M10.44,10h3.12M13.56,10c.52,0,.94.45.94,1v.67c0,.55-.42,1-.94,1h-4.06M13.56,10c.52,0,.94-.45.94-1v-.67c0-.55-.42-1-.94-1h-4.06"/>
  <path  d="M13.59,22v-4.78l2.21.23c1.33-.07,2.41-1.12,2.52-2.45v-6.64c.02-3.5-2.81-6.35-6.3-6.36-3.5-.02-6.35,2.81-6.36,6.3,0,3.26.76,3.56,1.17,5.3.27,1.05.28,2.16.03,3.22l-1.2,5.18"/>
</svg>
    );
  },
);

export default BitcoinMind;
