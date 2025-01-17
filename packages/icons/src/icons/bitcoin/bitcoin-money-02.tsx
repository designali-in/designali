import * as React from "react";

import type { DesignaliProps } from "../../types";

export const BitcoinMoney02 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
     <path  d="M10.44,14.67v-5.33M12,9.33v-1.33M12,16v-1.33M10.44,12h3.12M13.56,12c.52,0,.94.45.94,1v.67c0,.55-.42,1-.94,1h-4.06M13.56,12c.52,0,.94-.45.94-1v-.67c0-.55-.42-1-.94-1h-4.06"/>
  <path  d="M12,19.5c-1.33.62-3.08,1-5,1-1.07,0-2.08-.12-3-.33-1.5-.34-2-1.25-2-2.79V6.61c0-.98,1.04-1.66,2-1.44.92.21,1.93.33,3,.33,1.92,0,3.67-.38,5-1,1.33-.62,3.08-1,5-1,1.07,0,2.08.12,3,.33,1.58.36,2,1.29,2,2.79v10.77c0,.98-1.04,1.66-2,1.44-.92-.21-1.93-.33-3-.33-1.92,0-3.67.38-5,1Z"/>
  <line  x1="5.5" y1="12.47" x2="6.5" y2="12.61"/>
  <line  x1="17.82" y1="9.94" x2="18.82" y2="10.08"/>
</svg>
    );
  },
);

export default BitcoinMoney02;
