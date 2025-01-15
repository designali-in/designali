import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Ranking = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M3.5,18c0-1.41,0-2.12.44-2.56.44-.44,1.15-.44,2.56-.44h.5c.94,0,1.41,0,1.71.29.29.29.29.76.29,1.71v5H3.5v-4Z" />
        <path d="M15,19c0-.94,0-1.41.29-1.71s.76-.29,1.71-.29h.5c1.41,0,2.12,0,2.56.44.44.44.44,1.15.44,2.56v2h-5.5v-3Z" />
        <path d="M2,22h20" />
        <path d="M9,16c0-1.41,0-2.12.44-2.56.44-.44,1.15-.44,2.56-.44s2.12,0,2.56.44c.44.44.44,1.15.44,2.56v6h-6v-6Z" />
        <path d="M12.69,2.58l.7,1.42c.1.2.35.39.57.42l1.28.21c.82.14,1.01.73.42,1.32l-.99,1c-.17.17-.26.5-.21.73l.28,1.24c.22.98-.29,1.36-1.15.85l-1.2-.71c-.22-.13-.57-.13-.79,0l-1.2.71c-.86.51-1.38.13-1.15-.85l.28-1.24c.05-.23-.04-.56-.21-.73l-.99-1c-.58-.59-.4-1.19.42-1.32l1.28-.21c.21-.04.47-.23.56-.42l.7-1.42c.38-.77,1.01-.77,1.39,0Z" />
      </svg>
    );
  },
);

export default Ranking;
