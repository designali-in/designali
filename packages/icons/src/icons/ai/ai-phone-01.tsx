import * as React from "react";

import type { DesignaliProps } from "../../types";

export const AiPhone01 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M17,15c0,3.3,0,4.95-.95,5.98-.95,1.03-2.48,1.03-5.55,1.03s-4.6,0-5.55-1.03c-.95-1.03-.95-2.68-.95-5.98v-6c0-3.3,0-4.95.95-5.98.85-.92,2.16-1.01,4.62-1.02" />
        <path d="M16,4h-2c-.94,0-1.41,0-1.71.29-.29.29-.29.76-.29,1.71v2c0,.94,0,1.41.29,1.71.29.29.76.29,1.71.29h2c.94,0,1.41,0,1.71-.29.29-.29.29-.76.29-1.71v-2c0-.94,0-1.41-.29-1.71-.29-.29-.76-.29-1.71-.29Z" />
        <path d="M13.5,10v2M16.5,10v2M13.5,2v2M16.5,2v2M12,5.5h-2M12,8.5h-2M20,5.5h-2M20,8.5h-2" />
        <circle cx="10.49" cy="19.06" r=".3" />
      </svg>
    );
  },
);

export default AiPhone01;
