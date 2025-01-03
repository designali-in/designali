import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Attachment = React.forwardRef<SVGSVGElement, DesignaliProps>(
  ({...props }, forwardedRef) => {
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
       <path  d="M21.53,12v1.67c0,4.6-3.73,8.33-8.33,8.33s-8.33-3.73-8.33-8.33v-6.11c0-3.07,2.49-5.56,5.56-5.56s5.56,2.49,5.56,5.56v6.11c0,1.53-1.24,2.78-2.78,2.78s-2.78-1.24-2.78-2.78v-4.44"/>
       </svg>
    );
  },
);

export default Attachment;
