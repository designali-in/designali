import * as React from "react";

import type { DesignaliProps } from "../../types";

export const AiBrain02 = React.forwardRef<SVGSVGElement, DesignaliProps>(
  ({ ...props }, forwardedRef) => {
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
        <path d="M12,4.5c0-1.38-1.12-2.5-2.5-2.5s-2.5,1.12-2.5,2.5c-1.66,0-3,1.34-3,3,0,.57.16,1.1.43,1.55-1.39.27-2.43,1.48-2.43,2.95s1.05,2.68,2.43,2.95c-.27.45-.43.98-.43,1.55,0,1.66,1.34,3,3,3,0,1.38,1.12,2.5,2.5,2.5s2.5-1.12,2.5-2.5" />
        <path d="M12,19.5c0,1.38,1.12,2.5,2.5,2.5s2.5-1.12,2.5-2.5c1.66,0,3-1.34,3-3,0-.57-.16-1.1-.43-1.55,1.39-.27,2.43-1.48,2.43-2.95s-1.05-2.68-2.43-2.95c.27-.45.43-.98.43-1.55,0-1.66-1.34-3-3-3,0-1.38-1.12-2.5-2.5-2.5s-2.5,1.12-2.5,2.5" />
        <path d="M10.76,7.89v1.63M7.9,10.77h1.69M14.49,10.77h1.69M14.49,13.21h1.69M7.9,13.21h1.69M10.76,14.48v1.63M13.25,14.48v1.63M13.24,7.89v1.63M10.41,14.44h3.26c.45,0,.82-.37.82-.82v-3.28c0-.45-.37-.82-.82-.82h-3.26c-.45,0-.82.37-.82.82v3.28c0,.45.37.82.82.82Z" />
      </svg>
    );
  },
);

export default AiBrain02;
