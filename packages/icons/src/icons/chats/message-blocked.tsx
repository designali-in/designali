import * as React from "react";

import type { DesignaliProps } from "../../types";

export const MessageBlocked = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M2,2l20,20" />
        <path
          fill="none"
          d="M6.98,2h12.79c1.23,0,2.22.99,2.22,2.22v11.11c0,.46-.14.89-.38,1.24"
        />
        <path fill="none" d="M12.91,17.56h-6.46l-4.44,4.44V6.5" />
      </svg>
    );
  },
);

export default MessageBlocked;
