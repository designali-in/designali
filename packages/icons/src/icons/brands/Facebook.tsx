import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Facebook = React.forwardRef<SVGSVGElement, DesignaliProps>(
  ({ ...props }, forwardedRef) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        {...props}
        ref={forwardedRef}
      >
        <path
          strokeWidth={0}
          id="Initiator"
          fill="#0866ff"
          d="M22,12c0-5.52-4.48-10-10-10S2,6.48,2,12c0,4.69,3.23,8.62,7.58,9.71v-6.65h-2.06v-3.06h2.06v-1.32c0-3.4,1.54-4.98,4.88-4.98.63,0,1.73.12,2.17.25v2.77c-.24-.02-.65-.04-1.16-.04-1.64,0-2.27.62-2.27,2.24v1.08h3.27l-.56,3.06h-2.71v6.87c4.95-.6,8.79-4.81,8.79-9.93Z"
        />
        <path
          strokeWidth={0}
          id="F"
          fill="#fff"
          d="M15.92,15.06l.56-3.06h-3.27v-1.08c0-1.61.63-2.24,2.27-2.24.51,0,.92.01,1.16.04v-2.77c-.45-.12-1.54-.25-2.17-.25-3.34,0-4.88,1.58-4.88,4.98v1.32h-2.06v3.06h2.06v6.65c.77.19,1.58.29,2.42.29.41,0,.81-.03,1.21-.07v-6.87h2.71Z"
        />
      </svg>
    );
  },
);

export default Facebook;
