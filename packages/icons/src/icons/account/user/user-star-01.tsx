import * as React from "react";

import type { DesignaliProps } from "../../../types";

export const UserStar01 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
          d="M13.11,15.33h-6.67c-2.45,0-4.44,1.99-4.44,4.44v2.22"
        />
        <circle cx="9.78" cy="6.44" r="4.44" />

        <path d="M18.25,15.29c.05-.09.16-.13.25-.09.04.02.07.05.09.09l.83,1.67c.11.22.32.38.57.41l1.85.27c.1.02.18.11.16.21,0,.04-.03.08-.06.11l-1.34,1.3c-.18.17-.26.43-.22.67l.32,1.84c.02.1-.05.2-.15.22-.04,0-.08,0-.12-.02l-1.65-.87c-.22-.12-.48-.12-.71,0l-1.65.87c-.09.05-.21.01-.26-.08-.02-.04-.03-.08-.02-.12l.32-1.84c.04-.25-.04-.5-.22-.67l-1.34-1.3c-.08-.07-.08-.19,0-.27.03-.03.07-.05.11-.06l1.85-.27c.25-.04.46-.19.57-.41l.83-1.67Z" />
      </svg>
    );
  },
);

export default UserStar01;
