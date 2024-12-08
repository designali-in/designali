import * as React from "react";

import type { DesignaliProps } from "../../types";

export const FishOff = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <line x1="18" y1="12.47" x2="18" y2="12.5" />
        <line x1="18" y1="12" x2="18" y2="12.47" />
        <path d="M16.01,17.93l-.23,1.4c-.16.97-1,1.67-1.98,1.67h-4.3c.97-1.1,1.5-2.52,1.49-3.98" />

        <path
          fill="none"
          d="M16.01,17.93l-.23,1.4c-.16.97-1,1.67-1.98,1.67h-4.3c.97-1.1,1.5-2.52,1.49-3.98"
        />
        <path d="M7,10.67c0-2.67-1.42-4.7-4.27-5.17-1,1.5-1,5,.23,6.5-1.24,1.5-1.24,5-.23,6.5,2.85-.47,4.27-2.5,4.27-5.17" />
        <path d="M17.53,17.53c-.8.32-1.66.48-2.52.47-3.56,0-7.56-2.53-8.5-6,.35-1.28,1.11-2.43,2.12-3.38" />
        <path
          fill="none"
          d="M12.07,6.53c.94-.34,1.93-.52,2.93-.53,3.56,0,6.06,2.54,7,6-.31,1.14-.79,2.18-1.41,3.06"
        />

        <path
          fill="none"
          d="M7,10.67c0-2.67-1.42-4.7-4.27-5.17-1,1.5-1,5,.23,6.5-1.24,1.5-1.24,5-.23,6.5,2.85-.47,4.27-2.5,4.27-5.17"
        />
        <path fill="none" d="M14.48,8.96c.34-1.04.85-2.02,1.52-2.89" />

        <path fill="none" d="M8.53,3h5.27c.98,0,1.82.7,1.98,1.67l.23,1.4" />
        <line x1="2" y1="2" x2="22" y2="22" />
      </svg>
    );
  },
);

export default FishOff;
