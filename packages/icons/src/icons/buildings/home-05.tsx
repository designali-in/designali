import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Home05 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M12,17.33h0" />
      </svg>
    );
  },
);

export default Home05;
