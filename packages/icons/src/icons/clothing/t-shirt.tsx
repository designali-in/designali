import * as React from "react";

import type { DesignaliProps } from "../../types";

export const TShirt = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M5.72,14.02c-.87-.31-2.49-.58-3.23-1.32-1.01-1.01-.36-2.38.88-4.96.56-1.16,1.62-2.02,2.87-2.35.17-.05.32-.15.41-.3l1.28-2c.04-.06.08-.1.14-.14.58-.35,2.01-.95,3.91-.95s3.24.6,3.82.95c.06.03.1.08.14.14l1.32,1.98c.1.15.24.25.41.3,1.24.34,2.26,1.08,2.82,2.25,1.39,2.53,2.01,4.06,1,5.07-.73.74-2.38,1.03-3.25,1.34" />
        <path d="M6.5,5.5l4.23,3.29c.61.47.91.71,1.27.71s.66-.24,1.27-.71l4.23-3.29" />
        <path d="M18.22,10.56v8.95c0,1.09-.8,2.01-1.89,2.17-1.32.2-2.84.33-4.51.32-1.53,0-2.93-.14-4.16-.32-1.09-.16-1.88-1.08-1.88-2.17v-8.95" />
        <line x1="9.31" y1="2.42" x2="12" y2="9.5" />
        <line x1="14.69" y1="2.42" x2="12" y2="9.5" />
      </svg>
    );
  },
);

export default TShirt;
