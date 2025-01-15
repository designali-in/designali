import * as React from "react";

import type { DesignaliProps } from "../../types";

export const TurtleNeck = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M6.96,13.06l-2.39,7.16c-.14.42-.21.63-.38.72-.36.2-1.86-.13-2.12-.51-.11-.16-.08-.38-.01-.81l1.56-10.43c.27-1.78.68-2.33,2.32-3.07l3.07-1.61v-1.51c0-.83.17-1,1.01-1h3.98c.83,0,1.01.17,1.01,1v1.51l3.07,1.61c1.64.74,2.05,1.29,2.32,3.07l1.56,10.43c.06.43.1.65-.01.81-.26.38-1.75.71-2.12.51-.17-.09-.24-.3-.38-.72l-2.39-7.16" />
        <path d="M6.5,10c.17,1,.38,2,.46,3,.19,2.31.04,4.68.04,7,0,1.65.35,2,2,2h6c1.65,0,2-.35,2-2,0-2.32-.15-4.68.04-7,.08-1.01.29-2.01.46-3" />
        <path d="M9,3.88c.47.27,1.5.79,2.92.81,1.51.02,2.62-.54,3.08-.81" />
      </svg>
    );
  },
);

export default TurtleNeck;
