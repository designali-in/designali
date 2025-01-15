import * as React from "react";

import type { DesignaliProps } from "../../types";

export const LassoSelect = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M7,22c-1.26-.94-2-2.43-2-4" />
        <path d="M7,16.93c.96.43,1.96.74,2.99.91" />
        <path d="M3.34,14c-.86-1.16-1.33-2.56-1.34-4C2,5.58,6.48,2,12,2s10,3.58,10,8c-.02.68-.13,1.35-.33,2" />
        <path d="M5,18c1.1,0,2-.9,2-2s-.9-2-2-2-2,.9-2,2,.9,2,2,2Z" />
        <path d="M14.33,22h-.09c-.14-.05-.23-.17-.24-.32v-10c0-.18.15-.33.33-.34.08,0,.15.03.21.08l7.34,6c.14.11.17.32.06.46-.06.08-.16.13-.27.13h-4.49l-2.57,3.85c-.07.09-.17.14-.28.14Z" />
      </svg>
    );
  },
);

export default LassoSelect;
