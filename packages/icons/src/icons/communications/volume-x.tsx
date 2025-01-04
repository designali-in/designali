import * as React from "react";

import type { DesignaliProps } from "../../types";

export const VolumeX = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path  d="M11,4.7c0-.39-.32-.7-.71-.7-.19,0-.37.07-.5.21l-3.38,3.38c-.26.27-.62.41-1,.41h-2.42c-.55,0-1,.45-1,1v6c0,.55.45,1,1,1h2.42c.37,0,.73.15,1,.41l3.38,3.38c.28.28.72.28,1,0,.13-.13.21-.31.21-.5V4.7Z"/>
  <line  x1="22" y1="9" x2="16" y2="15"/>
  <line  x1="16" y1="9" x2="22" y2="15"/>
</svg>
    );
  },
);

export default VolumeX;
