
import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Hologram = React.forwardRef<SVGSVGElement, DesignaliProps>(
  ({  ...props }, forwardedRef) => {
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
         <path  d="M3,22h18"/>
  <path d="M17,19l-1-4M8,15l-1,4M12,16v3"/>
  <path  d="M12,7c.5,0,.96-.2,1.88-.6l.66-.29c1.64-.71,2.46-1.06,2.46-1.62s-.82-.91-2.46-1.62l-.66-.29c-.92-.4-1.38-.6-1.88-.6s-.96.2-1.88.6l-.66.29c-1.64.71-2.46,1.06-2.46,1.62s.82.91,2.46,1.62l.66.29c.92.4,1.38.6,1.88.6ZM12,7v6"/>
  <path  d="M17,4.5v6c0,.56-.82.91-2.46,1.62l-.66.29c-.92.4-1.38.6-1.88.6s-.96-.2-1.88-.6l-.66-.29c-1.64-.71-2.46-1.06-2.46-1.62v-6"/>
</svg>
    );
  },
);

export default Hologram;
