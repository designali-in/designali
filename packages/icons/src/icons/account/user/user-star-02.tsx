import * as React from "react";

import type { DesignaliProps } from "../../../types";

export const UserStar02 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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

        <path d="M18.86,8.12c.04-.08.13-.11.21-.07.03.02.06.04.07.07l.69,1.4c.09.19.27.32.48.35l1.55.23c.09.01.15.09.13.18,0,.03-.02.07-.05.09l-1.12,1.09c-.15.15-.22.36-.18.56l.26,1.54c.02.09-.04.17-.13.18-.03,0-.07,0-.1-.02l-1.38-.73c-.19-.1-.41-.1-.59,0l-1.38.73c-.08.04-.17.01-.21-.07-.02-.03-.02-.07-.02-.1l.26-1.54c.04-.21-.03-.42-.18-.56l-1.12-1.09c-.06-.06-.06-.16,0-.22.02-.03.06-.04.09-.05l1.55-.23c.21-.03.39-.16.48-.35l.69-1.4Z" />
      </svg>
    );
  },
);

export default UserStar02;
