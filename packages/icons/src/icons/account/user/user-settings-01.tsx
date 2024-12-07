import * as React from "react";

import type { DesignaliProps } from "../../../types";

export const UserSettings01 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M18.44,16.14h-.13c-.32,0-.59.26-.59.59v.05c0,.21-.11.4-.29.51l-.13.07c-.18.1-.4.1-.59,0l-.04-.02c-.28-.16-.64-.07-.8.21l-.06.11c-.16.28-.07.64.21.8l.04.03c.18.1.29.3.29.5v.15c0,.21-.11.4-.29.51l-.04.03c-.28.16-.38.52-.21.8l.06.11c.16.28.52.38.8.21l.04-.02c.18-.1.4-.1.59,0l.13.07c.18.1.29.3.29.51v.05c0,.32.26.59.59.59h.13c.32,0,.59-.26.59-.59v-.05c0-.21.11-.4.29-.51l.13-.07c.18-.1.4-.1.59,0l.04.02c.28.16.64.07.8-.21l.06-.11c.16-.28.07-.64-.21-.8l-.04-.02c-.18-.11-.29-.3-.29-.51v-.15c0-.21.11-.4.29-.51l.04-.03c.28-.16.38-.52.21-.8l-.06-.11c-.16-.28-.52-.38-.8-.21l-.04.02c-.18.1-.4.1-.59,0l-.13-.07c-.18-.1-.29-.3-.29-.51v-.05c0-.32-.26-.59-.59-.59Z" />

        <path
          fill="none"
          d="M13.11,15.33h-6.67c-2.45,0-4.44,1.99-4.44,4.44v2.22"
        />
        <circle cx="9.78" cy="6.44" r="4.44" />
      </svg>
    );
  },
);

export default UserSettings01;
