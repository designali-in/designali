import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Home03 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M2.53,10.42c0-.62.27-1.21.75-1.61l7.37-6.31c.78-.66,1.93-.66,2.72,0l7.37,6.31c.47.4.75.99.75,1.61v9.47c0,1.16-.94,2.11-2.11,2.11H4.63c-1.16,0-2.11-.94-2.11-2.11v-9.47Z" />
        <path d="M9,22l-.25-3.51c-.13-1.89,1.36-3.49,3.25-3.49s3.39,1.6,3.25,3.49l-.25,3.51" />
      </svg>
    );
  },
);

export default Home03;
