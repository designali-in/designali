import * as React from "react";

import type { DesignaliProps } from "../../types";

export const WeChat = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
          d="M22,11.65c.07-3.5-1.82-6.9-5.15-8.61C12.2.66,6.49,2.5,4.1,7.15c-1.39,2.71-1.39,5.93,0,8.64l-2.1,6.21,6.21-2.1c.72.37,1.46.64,2.21.81"
        />
        <path d="M21.08,19.27c1.05-2.04.24-4.55-1.8-5.6-2.04-1.05-4.55-.24-5.6,1.8-1.05,2.04-.24,4.55,1.8,5.6,1.19.61,2.61.61,3.8,0l2.73.92-.92-2.73Z" />
        <path d="M15.98,9.31h.02M9.11,9.31h.02" />
      </svg>
    );
  },
);

export default WeChat;
