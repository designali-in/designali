import * as React from "react";

import type { DesignaliProps } from "../../types";

export const MonitorCog = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path  d="M12,17.35v4"/>
  <path  d="M15.2,5.25l-.9-.4"/>
  <path  d="M15.2,7.45l-.9.4"/>
  <path  d="M16.9,3.55l-.4-.9"/>
  <path  d="M16.9,9.15l-.4.9"/>
  <path  d="M19.5,2.65l-.4.9"/>
  <path  d="M19.5,10.05l-.4-.9"/>
  <path  d="M21.7,4.85l-.9.4"/>
  <path  d="M21.7,7.85l-.9-.4"/>
  <path  d="M22,13.35v2c0,1.1-.9,2-2,2H4c-1.1,0-2-.9-2-2V5.35c0-1.1.9-2,2-2h7"/>
  <path  d="M8,21.35h8"/>
  <circle  cx="18" cy="6.35" r="3"/>
</svg>
    );
  },
);

export default MonitorCog;
