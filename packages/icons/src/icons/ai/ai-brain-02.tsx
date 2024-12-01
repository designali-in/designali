import * as React from "react";

import type { DesignaliProps } from "../../types";

export const AiBrain02 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
         <path  d="M12,4.5c0-1.38-1.12-2.5-2.5-2.5s-2.5,1.12-2.5,2.5c-1.66,0-3,1.34-3,3,0,.57.16,1.1.43,1.55-1.39.27-2.43,1.48-2.43,2.95s1.05,2.68,2.43,2.95c-.27.45-.43.98-.43,1.55,0,1.66,1.34,3,3,3,0,1.38,1.12,2.5,2.5,2.5s2.5-1.12,2.5-2.5"/>
  <path  d="M12,19.5c0,1.38,1.12,2.5,2.5,2.5s2.5-1.12,2.5-2.5c1.66,0,3-1.34,3-3,0-.57-.16-1.1-.43-1.55,1.39-.27,2.43-1.48,2.43-2.95s-1.05-2.68-2.43-2.95c.27-.45.43-.98.43-1.55,0-1.66-1.34-3-3-3,0-1.38-1.12-2.5-2.5-2.5s-2.5,1.12-2.5,2.5"/>
  <path  d="M10.49,7v1.98M7,10.5h2.05M15.02,10.5h2.05M15.02,13.47h2.05M7,13.47h2.05M10.49,15.02v1.98M13.51,15.02v1.98M13.5,7v1.98M10.05,14.97h3.97c.55,0,1-.45,1-1v-3.99c0-.55-.45-1-1-1h-3.97c-.55,0-1,.45-1,1v3.99c0,.55.45,1,1,1Z"/>
</svg>
    );
  },
);

export default AiBrain02;
