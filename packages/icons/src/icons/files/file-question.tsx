import * as React from "react";

import type { DesignaliProps } from "../../types";

export const FileQuestion = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
      <path  d="M12,17h.01"/>
  <path  d="M15,2H6c-1.1,0-2,.9-2,2v16c0,1.1.9,2,2,2h12c1.1,0,2-.9,2-2V7l-5-5Z"/>
  <path  d="M9.1,9c.57-1.56,2.29-2.36,3.84-1.8,1.18.43,1.97,1.54,1.98,2.8,0,2-3,3-3,3"/>
</svg>
    );
  },
);

export default FileQuestion;
