import * as React from "react";

import type { DesignaliProps } from "../../types";

export const MousePointerBan = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
       
       <path  d="M2.03,2.68c-.1-.26.02-.55.28-.65.12-.05.25-.05.37,0l9,3.5c.26.1.39.39.29.65-.06.14-.17.25-.32.3l-3.44,1.07c-.32.1-.56.34-.66.66l-1.07,3.44c-.08.26-.36.41-.63.33-.15-.05-.26-.15-.32-.3L2.03,2.68Z"/>
  <circle  cx="16" cy="16" r="6"/>
  <path  d="M11.8,11.8l8.4,8.4"/>
</svg>
    );
  },
);

export default MousePointerBan;
