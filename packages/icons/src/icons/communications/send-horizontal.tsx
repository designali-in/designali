import * as React from "react";

import type { DesignaliProps } from "../../types";

export const SendHorizontal = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M2.75,2.58c-.26-.13-.57-.02-.7.24-.06.13-.07.28-.02.42l2.99,8.03c.18.47.18,1,0,1.47l-2.99,8.03c-.1.27.03.57.3.68.14.05.29.05.42-.02l18.94-8.95c.26-.12.37-.44.25-.7-.05-.11-.14-.2-.25-.25L2.75,2.58Z" />
        <path d="M5.16,12h16.84" />
      </svg>
    );
  },
);

export default SendHorizontal;
