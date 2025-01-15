import * as React from "react";

import type { DesignaliProps } from "../../types";

export const DiscoverCircle = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M12.4,8.3l2.92-.97c.89-.3,1.33-.44,1.56-.21s.09.68-.21,1.56l-.97,2.92c-.5,1.51-.76,2.27-1.3,2.81s-1.3.79-2.81,1.3l-2.92.97c-.89.3-1.33.44-1.56.21s-.09-.68.21-1.56l.97-2.92c.5-1.51.76-2.27,1.3-2.81.54-.54,1.3-.79,2.81-1.3Z" />
        <path d="M12,12h0" />
        <circle cx="12" cy="12" r="10.02" />
      </svg>
    );
  },
);

export default DiscoverCircle;
