import * as React from "react";

import type { DesignaliProps } from "../../../types";

export const UserEdit01 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M21.48,17.47c.7-.7.7-1.83,0-2.53s-1.83-.7-2.53,0h0l-3.38,3.38c-.2.2-.35.45-.43.72l-.71,2.42c-.07.22.06.46.29.52.08.02.16.02.24,0l2.42-.71c.27-.08.52-.23.72-.43l3.38-3.38Z" />

        <path
          fill="none"
          d="M13.11,15.33h-6.67c-2.45,0-4.44,1.99-4.44,4.44v2.22"
        />
        <circle cx="9.78" cy="6.44" r="4.44" />
      </svg>
    );
  },
);

export default UserEdit01;
