
import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Robot02 = React.forwardRef<SVGSVGElement, DesignaliProps>(
  ({ color = "currentColor", ...props }, forwardedRef) => {
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
       <path  d="M4,16c0-4.42,3.58-8,8-8s8,3.58,8,8v2.18c0,.76,0,1.14-.07,1.46-.25,1.15-1.15,2.04-2.29,2.29-.32.07-.7.07-1.46.07H7.82c-.76,0-1.14,0-1.46-.07-1.15-.25-2.04-1.15-2.29-2.29-.07-.32-.07-.7-.07-1.46v-2.18Z"/>
  <path  d="M12,8v-3"/>
  <circle  cx="12" cy="3.5" r="1.5"/>
  <path  d="M9,13v1M15,13v1"/>
  <path  d="M4,18.5h4.1c.56,0,1.09-.28,1.4-.75s.84-.75,1.4-.75h2.2c.56,0,1.09.28,1.4.75s.84.75,1.4.75h4.1"/>
</svg>
    );
  },
);

export default Robot02;
