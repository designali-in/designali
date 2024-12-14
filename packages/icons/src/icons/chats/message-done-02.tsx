import * as React from "react";

import type { DesignaliProps } from "../../types";

export const MessageDone02 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path
          fill="none"
          d="M16.1,2.7c-4.5-1.84-9.74.04-12,4.45-1.39,2.71-1.39,5.93,0,8.64l-2.1,6.21,6.21-2.1c4.65,2.39,10.36.55,12.75-4.1,1.33-2.59,1.35-5.5.31-7.99"
        />
        <path d="M12.54,13.34h0M16.53,13.34h0M8.54,13.34h0" />
        <path fill="none" d="M22,2l-7.31,7.31-3.32-3.32" />
      </svg>
    );
  },
);

export default MessageDone02;
