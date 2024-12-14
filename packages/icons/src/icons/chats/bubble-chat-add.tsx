import * as React from "react";

import type { DesignaliProps } from "../../types";

export const BubbleChatAdd = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M14.96,5.49h7M18.46,1.99v7" />
        <path
          fill="none"
          d="M13.4,2.04c-3.73-.34-7.47,1.57-9.29,5.11-1.39,2.71-1.39,5.93,0,8.64l-2.1,6.21,6.21-2.1c4.65,2.39,10.36.55,12.75-4.1.6-1.17.93-2.4,1.02-3.64l.02-.47"
        />
        <path d="M12.54,13.34h0M16.53,13.34h0M8.54,13.34h0" />
      </svg>
    );
  },
);

export default BubbleChatAdd;
