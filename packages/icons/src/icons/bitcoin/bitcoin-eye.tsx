import * as React from "react";

import type { DesignaliProps } from "../../types";

export const BitcoinEye = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
          <path  d="M4.75,2.75l2.25,2.25v2M19.25,2.75l-2.25,2.25v2M12,2.75v3.25M4.75,3.5c.41,0,.75-.34.75-.75s-.34-.75-.75-.75-.75.34-.75.75.34.75.75.75ZM19.25,3.5c-.41,0-.75-.34-.75-.75s.34-.75.75-.75.75.34.75.75-.34.75-.75.75ZM12,3.5c.41,0,.75-.34.75-.75s-.34-.75-.75-.75-.75.34-.75.75.34.75.75.75Z"/>
  <path  d="M10.44,18.17v-5.33M12,12.83v-1.33M12,19.5v-1.33M10.44,15.5h3.12M13.56,15.5c.52,0,.94.45.94,1v.67c0,.55-.42,1-.94,1h-4.06M13.56,15.5c.52,0,.94-.45.94-1v-.67c0-.55-.42-1-.94-1h-4.06"/>
  <path  d="M2.06,15.72c-.08-.21-.08-.44,0-.66,2.26-5.18,8.55-7.64,14.04-5.51,2.65,1.03,4.75,3.01,5.84,5.51.08.21.08.44,0,.66-2.26,5.18-8.55,7.64-14.04,5.51-2.65-1.03-4.75-3.01-5.84-5.51"/>
</svg>
    );
  },
);

export default BitcoinEye;
