import * as React from "react";

import type { DesignaliProps } from "../../../types";

export const UserRoundPen = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path fill="none" d="M2,20.5c0-4.42,3.58-8,8-8,.96,0,1.92.17,2.82.51" />
        <path d="M21.38,16.13c.83-.83.83-2.17,0-3s-2.17-.83-3,0h0l-4.01,4.01c-.24.24-.41.53-.51.85l-.84,2.87c-.08.27.07.54.34.62.09.03.19.03.28,0l2.87-.84c.32-.09.62-.27.85-.51l4.01-4.01Z" />
        <circle cx="10" cy="7.5" r="5" />
      </svg>
    );
  },
);

export default UserRoundPen;
