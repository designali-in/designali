import * as React from "react";

import type { DesignaliProps } from "../../types";

export const BitcoinTag = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
      <path  d="M17.5,5c.83,0,1.5.67,1.5,1.5s-.67,1.5-1.5,1.5-1.5-.67-1.5-1.5.67-1.5,1.5-1.5Z"/>
  <path  d="M7.9,13.45l3.82-3.82M12.84,10.75l.96-.96M8.06,15.52l.96-.96M9.81,11.54l2.24,2.24M12.04,13.78c.37.37.35.99-.04,1.39l-.48.48c-.4.4-1.02.42-1.39.04l-2.91-2.91M12.04,13.78c.37.37.99.35,1.39-.04l.48-.48c.4-.4.42-1.02.04-1.39l-2.91-2.91"/>
  <path  d="M2.71,11.29c-.94.95-.94,2.47,0,3.42l6.58,6.58c.95.94,2.47.94,3.42,0l8.7-8.7c.38-.37.59-.88.59-1.41v-7.17c0-1.1-.9-2-2-2h-7.17c-.53,0-1.04.21-1.41.59L2.71,11.29Z"/>
</svg>
    );
  },
);

export default BitcoinTag;
