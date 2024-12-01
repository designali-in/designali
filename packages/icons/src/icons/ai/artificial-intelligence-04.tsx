
import * as React from "react";

import type { DesignaliProps } from "../../types";

export const ArtificialIntelligence04 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path  d="M4,12c0-3.77,0-5.66,1.17-6.83,1.17-1.17,3.06-1.17,6.83-1.17s5.66,0,6.83,1.17c1.17,1.17,1.17,3.06,1.17,6.83s0,5.66-1.17,6.83c-1.17,1.17-3.06,1.17-6.83,1.17s-5.66,0-6.83-1.17c-1.17-1.17-1.17-3.06-1.17-6.83Z"/>
  <path  d="M7.5,15l1.84-5.53c.09-.28.36-.47.66-.47s.56.19.66.47l1.84,5.53M8.5,13h3"/>
  <path  d="M15.5,9v6"/>
  <path  d="M8,2v2M16,2v2M12,2v2M8,20v2M12,20v2M16,20v2M22,16h-2M4,8h-2M4,16h-2M4,12h-2M22,8h-2M22,12h-2"/>
</svg>
    );
  },
);

export default ArtificialIntelligence04;
