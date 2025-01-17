import * as React from "react";

import type { DesignaliProps } from "../../types";

export const BitcoinStore = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
      <path  d="M6.27,2h11.47c.66,0,1.76.1,2.13,1.15.22.63.13,1.33.38,1.95.25.65.65,1.28,1.04,1.85.38.56.82,1.17.71,1.84-.13.76-.74,1.47-1.54,1.85-1.64.77-4.06.31-4.45-2.49-.32.89-1.32,2.8-4.03,2.8s-3.63-1.91-3.96-2.8c-.39,2.8-2.81,3.27-4.45,2.49-.8-.38-1.41-1.09-1.54-1.85-.12-.67.32-1.28.71-1.84.39-.57.78-1.2,1.04-1.85.24-.62.15-1.32.38-1.95.37-1.05,1.47-1.15,2.13-1.15Z"/>
  <path  d="M16.96,20.66v-5.34M18.53,15.32v-1.34M18.53,22v-1.34M16.96,17.99h3.13M20.09,17.99c.52,0,.94.45.94,1v.67c0,.55-.42,1-.94,1h-4.06M20.09,17.99c.52,0,.94-.45.94-1v-.67c0-.55-.42-1-.94-1h-4.06"/>
  <path  d="M12.91,22h-6.33c-1.91,0-3.45-.9-3.45-2.02v-9.31"/>
</svg>
    );
  },
);

export default BitcoinStore;
