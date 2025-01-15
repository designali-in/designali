import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Warehouse = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M10.37,2.51l-5.79,2.44c-1.25.53-1.87.79-2.23,1.32-.35.53-.35,1.21-.35,2.56v13.17h3.16v-10.53c0-.99,0-1.49.31-1.8.31-.31.8-.31,1.8-.31h9.47c.99,0,1.49,0,1.8.31.31.31.31.8.31,1.8v10.53h3.16v-13.17c0-1.36,0-2.03-.35-2.56-.35-.53-.98-.79-2.23-1.32l-5.79-2.44c-.81-.34-1.21-.51-1.63-.51s-.83.17-1.63.51Z" />
        <path d="M11.25,5.83h1.5" />
        <rect x="9.13" y="15.32" width="6.57" height="6.57" rx="1.1" ry="1.1" />
      </svg>
    );
  },
);

export default Warehouse;
