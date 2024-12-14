import * as React from "react";

import type { DesignaliProps } from "../../types";

export const BubbleChatLock = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
          d="M14.39,2.18c-4.05-.81-8.31,1.11-10.29,4.96-1.39,2.71-1.39,5.93,0,8.64l-2.1,6.21,6.21-2.1c4.65,2.39,10.36.55,12.75-4.1.6-1.17.93-2.4,1.02-3.64l.02-.47"
        />

        <path d="M12.54,13.34h0M16.53,13.34h0M8.54,13.34h0" />
        <path d="M18.04,4.27v-1.67c0-.33.27-.6.6-.6h1.56c.33,0,.6.27.6.6v1.67" />

        <rect x="16.84" y="4.27" width="5.16" height="4.08" rx=".6" ry=".6" />
      </svg>
    );
  },
);

export default BubbleChatLock;
