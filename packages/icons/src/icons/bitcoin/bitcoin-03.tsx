import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Bitcoin03 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
       <path  d="M12.44,11.67v-5.33M14,6.33v-1.33M14,13v-1.33M12.44,9h3.12M15.56,9c.52,0,.94.45.94,1v.67c0,.55-.42,1-.94,1h-4.06M15.56,9c.52,0,.94-.45.94-1v-.67c0-.55-.42-1-.94-1h-4.06"/>
  <path  d="M3,14h2.39c.29,0,.58.07.85.19l2.04.99c.26.13.55.19.85.19h1.04c1.01,0,1.83.79,1.83,1.77,0,.04-.03.07-.07.08l-2.54.7c-.46.13-.94.08-1.37-.12l-2.18-1.06M12,16.5l4.59-1.41c.81-.25,1.69.05,2.2.75.37.51.22,1.24-.32,1.55l-7.52,4.34c-.48.28-1.04.34-1.57.19l-6.4-1.9"/>
  <path  d="M8.05,11.43c-.35-.82-.55-1.73-.55-2.68,0-3.73,3.02-6.75,6.75-6.75s6.75,3.02,6.75,6.75c0,1.32-.38,2.55-1.03,3.59"/>
</svg>
    );
  },
);

export default Bitcoin03;
