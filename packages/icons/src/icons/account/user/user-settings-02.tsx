import * as React from "react";

import type { DesignaliProps } from "../../../types";

export const UserSettings02 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
          d="M17.56,22v-2.22c0-2.45-1.99-4.44-4.44-4.44h-6.67c-2.45,0-4.44,1.99-4.44,4.44v2.22"
        />
        <circle cx="9.78" cy="6.44" r="4.44" />
        <path d="M19.02,9.14h-.1c-.25,0-.45.2-.45.45v.04c0,.16-.09.31-.23.39l-.1.06c-.14.08-.31.08-.45,0l-.03-.02c-.22-.13-.5-.05-.62.17l-.05.09c-.13.22-.05.5.17.62l.03.02c.14.08.23.23.23.39v.12c0,.16-.09.31-.23.4l-.03.02c-.22.13-.29.4-.17.62l.05.09c.13.22.4.29.62.17l.03-.02c.14-.08.31-.08.45,0l.1.06c.14.08.23.23.23.39v.04c0,.25.2.45.45.45h.1c.25,0,.45-.2.45-.45v-.04c0-.16.09-.31.23-.39l.1-.06c.14-.08.31-.08.45,0l.03.02c.22.13.5.05.62-.17l.05-.09c.13-.22.05-.5-.17-.62l-.03-.02c-.14-.08-.23-.23-.23-.4v-.11c0-.16.09-.31.23-.4l.03-.02c.22-.13.29-.4.17-.62l-.05-.09c-.13-.22-.4-.29-.62-.17l-.03.02c-.14.08-.31.08-.45,0l-.1-.06c-.14-.08-.23-.23-.23-.39v-.04c0-.25-.2-.45-.45-.45Z" />
      </svg>
    );
  },
);

export default UserSettings02;
