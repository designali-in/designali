import * as React from "react";

import type { DesignaliProps } from "../../../types";

export const UserArrowLeftRight = React.forwardRef<
  SVGSVGElement,
  DesignaliProps
>(({ ...props }, forwardedRef) => {
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
      <polyline points="20.25 13.52 22 11.77 20.25 10.03" />
      <line x1="22" y1="11.77" x2="17.81" y2="11.77" />

      <polyline points="3.75 10.25 2 12 3.75 13.75" />
      <line x1="6.19" y1="12" x2="2" y2="12" />

      <path
        fill="none"
        d="M19.78,22v-2.22c0-2.45-1.99-4.44-4.44-4.44h-6.67c-2.45,0-4.44,1.99-4.44,4.44v2.22"
      />
      <circle cx="12" cy="6.44" r="4.44" />
    </svg>
  );
});

export default UserArrowLeftRight;
