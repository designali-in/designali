import * as React from "react";

import type { DesignaliProps } from "../../types";

export const AiChat01 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M14.17,20.89c4.18-.28,7.52-3.66,7.79-7.9.05-.83.05-1.69,0-2.52-.27-4.24-3.61-7.62-7.79-7.9-1.43-.09-2.92-.09-4.34,0-4.18.28-7.51,3.66-7.79,7.9-.05.83-.05,1.69,0,2.52.1,1.55.78,2.98,1.59,4.18.47.85.16,1.9-.33,2.82-.35.66-.53,1-.39,1.24.14.24.46.25,1.08.26,1.24.03,2.08-.32,2.75-.81.38-.28.57-.42.7-.43.13-.02.39.09.9.3.46.19.99.31,1.49.34,1.42.09,2.91.09,4.34,0Z" />
        <path d="M10.49,7v1.98M7,10.5h2.05M15.02,10.5h2.05M15.02,13.47h2.05M7,13.47h2.05M10.49,15.02v1.98M13.51,15.02v1.98M13.5,7v1.98M10.05,14.97h3.97c.55,0,1-.45,1-1v-3.99c0-.55-.45-1-1-1h-3.97c-.55,0-1,.45-1,1v3.99c0,.55.45,1,1,1Z" />
      </svg>
    );
  },
);

export default AiChat01;
