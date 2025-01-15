import * as React from "react";

import type { DesignaliProps } from "../../types";

export const BrainCircuit = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M12.75,5.01c0-1.66-1.33-3-2.99-3.01-1.66,0-3,1.33-3.01,2.99,0,.05,0,.1,0,.14-2.14.55-3.43,2.73-2.88,4.87.08.31.2.62.35.9-1.71,1.39-1.98,3.91-.58,5.63.32.39.7.71,1.14.96-.28,2.19,1.26,4.2,3.45,4.48,2.19.28,4.2-1.26,4.48-3.45.02-.17.03-.34.03-.51V5.01Z" />
        <path d="M9.75,13.01c1.72-.6,2.9-2.18,3-4" />
        <path d="M6.75,5.13c.02.48.16.96.4,1.38" />
        <path d="M4.23,10.9c.18-.15.38-.28.58-.4" />
        <path d="M6.75,18.01c-.69,0-1.37-.18-1.97-.52" />
        <path d="M12.75,13.01h4" />
        <path d="M12.75,18.01h6c1.1,0,2,.9,2,2v1" />
        <path d="M12.75,8.01h8" />
        <path d="M16.75,8.01v-3c0-1.1.9-2,2-2" />
        <circle cx="16.75" cy="13.01" r=".5" />
        <circle cx="18.75" cy="3.01" r=".5" />
        <circle cx="20.75" cy="21.01" r=".5" />
        <circle cx="20.75" cy="8.01" r=".5" />
      </svg>
    );
  },
);

export default BrainCircuit;
