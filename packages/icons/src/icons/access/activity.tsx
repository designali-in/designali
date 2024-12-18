import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Activity = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M22,12h-2.48c-.9,0-1.69.6-1.93,1.46l-2.35,8.36c-.04.13-.18.21-.31.17-.08-.02-.15-.09-.17-.17L9.24,2.18c-.04-.13-.18-.21-.31-.17-.08.02-.15.09-.17.17l-2.35,8.36c-.24.86-1.03,1.46-1.92,1.46h-2.49" />
      </svg>
    );
  },
);

export default Activity;
