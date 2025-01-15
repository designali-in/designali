import * as React from "react";

import type { DesignaliProps } from "../../types";

export const BlushBrush02 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
       
       <path  d="M12,13l3,2M12,13c-4.48,2.75-7.12,1.78-9,.85,0,2.08.68,3.82,1.7,5.15M12,13l3-4.59M15,15c-.22,2.04-1.57,6.19-4.84,7-1.81,0-3.99-1.07-5.46-3M15,15l2.6-5M17.6,10l3.28-6.31c.29-.58.05-1.28-.52-1.57-.56-.28-1.24-.07-1.54.47l-3.81,5.82M17.6,10l-2.6-1.59M4.7,19c1.04.17,3.58.2,5.46-1"/>
  <path  d="M4.77,6.71c-.06-.25-.26-.44-.5-.5l-2.14-.55c-.09-.03-.15-.12-.12-.22.02-.06.06-.1.12-.12l2.14-.55c.25-.06.44-.26.5-.5l.55-2.14c.03-.09.12-.15.21-.12.06.02.1.06.12.12l.55,2.14c.06.25.26.44.5.5l2.14.55c.09.03.15.12.12.21-.02.06-.06.11-.12.12l-2.14.55c-.25.06-.44.26-.5.5l-.55,2.14c-.03.09-.12.15-.21.12-.06-.02-.1-.06-.12-.12l-.55-2.14Z"/>
</svg>
    );
  },
);

export default BlushBrush02;
