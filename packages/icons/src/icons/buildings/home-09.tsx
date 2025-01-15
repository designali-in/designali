import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Home09 = React.forwardRef<SVGSVGElement, DesignaliProps>(
  ({ ...props }, forwardedRef) => {
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
        <path d="M7.09,4.76l-1,.78c-1.52,1.18-2.27,1.78-2.68,2.61-.41.83-.41,1.8-.41,3.73v2.09c0,3.79,0,5.68,1.17,6.86.94.95,2.35,1.13,4.83,1.17v-3.99c0-.93,0-1.4.15-1.77.2-.49.59-.88,1.08-1.08.37-.15.83-.15,1.77-.15s1.4,0,1.77.15c.49.2.88.59,1.08,1.08.15.37.15.83.15,1.77v3.99c2.48-.04,3.89-.22,4.83-1.17,1.17-1.18,1.17-3.07,1.17-6.86v-2.09c0-1.93,0-2.89-.41-3.73-.41-.83-1.17-1.43-2.68-2.61l-1-.78c-2.36-1.84-3.54-2.76-4.91-2.76s-2.55.92-4.91,2.76Z" />
      </svg>
    );
  },
);

export default Home09;
