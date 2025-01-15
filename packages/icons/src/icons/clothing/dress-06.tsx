import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Dress06 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M20.38,3.46l-4.38-1.46c0,2.21-1.79,4-4,4s-4-1.79-4-4l-4.38,1.46c-.94.31-1.5,1.26-1.34,2.23l.58,3.47c.08.49.5.84.99.84h2.15v10c0,1.1.9,2,2,2h8c1.1,0,2-.9,2-2v-10h2.15c.49,0,.91-.35.99-.84l.58-3.47c.16-.97-.4-1.92-1.34-2.23Z" />
        <path d="M13.99,12.57c.42-.42.85-.91.85-1.56,0-.86-.7-1.56-1.56-1.56-.5,0-.85.14-1.28.57-.43-.43-.78-.57-1.28-.57-.86,0-1.56.7-1.56,1.56,0,.65.43,1.15.85,1.56l1.99,1.99,1.99-1.99Z" />
      </svg>
    );
  },
);

export default Dress06;
