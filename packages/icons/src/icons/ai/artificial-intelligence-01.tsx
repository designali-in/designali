
import * as React from "react";

import type { DesignaliProps } from "../../types";

export const ArtificialIntelligence = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path  d="M16,22v-.5c0-1.1.93-2,1.92-2.49.96-.48,1.77-1.26,1.87-2.18l.2-1.83,2-1-2.5-3.75c0-4.3-3.3-7.84-7.5-8.22M6.5,17v5M6.5,17c-1.03-.73-1.89-1.69-2.5-2.81M6.5,17c.75.53,1.59.94,2.5,1.19"/>
  <path  d="M8,4h-2c-.94,0-1.41,0-1.71.29-.29.29-.29.76-.29,1.71v2c0,.94,0,1.41.29,1.71.29.29.76.29,1.71.29h2c.94,0,1.41,0,1.71-.29.29-.29.29-.76.29-1.71v-2c0-.94,0-1.41-.29-1.71-.29-.29-.76-.29-1.71-.29Z"/>
  <path  d="M5.5,10v2M8.5,10v2M5.5,2v2M8.5,2v2M4,5.5h-2M4,8.5h-2M12,5.5h-2M12,8.5h-2"/>
</svg>
    );
  },
);

export default ArtificialIntelligence;
