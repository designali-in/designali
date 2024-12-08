import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Worm = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M19,12.01l-1.5,3" />
        <path d="M19.63,18.82l2.37,1.19" />
        <path d="M6.47,8.24c.81-.46,1.83-.17,2.29.64.22.39.28.86.15,1.29l-.64,2.08c-1.11,3.56.87,7.36,4.43,8.47,1.93.6,4.03.31,5.73-.8l.42-.27c1.16-.75,1.49-2.31.74-3.47-.75-1.16-2.31-1.49-3.47-.74h0l-.42.27c-.82.52-1.91.28-2.43-.54-.27-.43-.35-.96-.2-1.45l.64-2.08c1.11-3.51-.82-7.25-4.33-8.36-1.82-.58-3.8-.35-5.44.63l-.7.4c-1.2.7-1.6,2.25-.9,3.45.7,1.2,2.25,1.6,3.45.89l.68-.41Z" />
      </svg>
    );
  },
);

export default Worm;
