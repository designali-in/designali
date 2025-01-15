import * as React from "react";

import type { DesignaliProps } from "../../types";

export const ToyTrain = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M2,4h11" />
        <path d="M3,4v12c0,.47,0,.7.05.89.14.52.54.92,1.06,1.06.19.05.42.05.89.05M12,18V4" />
        <path d="M9,18h6" />
        <path d="M12,10h4.86c1.36,0,1.69.27,1.96,1.61.1.49.02.86.52.9.84.07,1.43.63,1.75,1.37.45,1.06.91,1.95.91,3.12,0,.47,0,.71-.15.85-.15.15-.38.15-.85.15h-2" />
        <path d="M16,10v-3M16,7h-1M16,7h1" />
        <circle cx="7" cy="18" r="2" />
        <circle cx="17" cy="18" r="1.9" />
        <line x1="6" y1="8" x2="8" y2="8" />
        <line x1="14.41" y1="12.31" x2="15" y2="12.31" />
      </svg>
    );
  },
);

export default ToyTrain;
