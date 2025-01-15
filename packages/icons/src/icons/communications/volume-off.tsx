import * as React from "react";

import type { DesignaliProps } from "../../types";

export const VolumeOff = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M16,9c.5.67.83,1.46.95,2.29" />
        <path d="M19.36,5.64c2.62,2.62,3.37,6.57,1.89,9.96" />
        <path d="M2,2l20,20" />
        <path d="M7,7l-.59.59c-.26.27-.62.41-1,.41h-2.42c-.55,0-1,.45-1,1v6c0,.55.45,1,1,1h2.42c.37,0,.73.15,1,.41l3.38,3.38c.28.28.72.28,1,0,.13-.13.21-.31.21-.5v-8.3" />
        <path d="M9.83,4.17c.27-.27.7-.27.97,0,.13.13.2.3.2.49v.69" />
      </svg>
    );
  },
);

export default VolumeOff;
