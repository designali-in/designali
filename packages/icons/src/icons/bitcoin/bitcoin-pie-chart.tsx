import * as React from "react";

import type { DesignaliProps } from "../../types";

export const BitcoinPieChart = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
       <path  d="M12,2v3M19,12h3M19,19l-2-2"/>
  <path  d="M10.44,14.67v-5.33M12,9.33v-1.33M12,16v-1.33M10.44,12h3.12M13.56,12c.52,0,.94.45.94,1v.67c0,.55-.42,1-.94,1h-4.06M13.56,12c.52,0,.94-.45.94-1v-.67c0-.55-.42-1-.94-1h-4.06"/>
  <circle  cx="12" cy="12" r="7.01"/>
  <circle  cx="12" cy="12" r="10"/>
</svg>
    );
  },
);

export default BitcoinPieChart;
