import * as React from "react";

import type { DesignaliProps } from "../../types";

export const FileAudio = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path  d="M18.5,22h.5c1.1,0,2-.9,2-2V7l-5-5H7c-1.1,0-2,.9-2,2v3"/>
  <path  d="M15,2v4c0,1.1.9,2,2,2h4"/>
  <path  d="M3,19c0-1.1.9-2,2-2s2,.9,2,2v1c0,1.1-.9,2-2,2s-2-.9-2-2v-4c0-3.31,2.69-6,6-6s6,2.69,6,6v4c0,1.1-.9,2-2,2s-2-.9-2-2v-1c0-1.1.9-2,2-2s2,.9,2,2"/>
</svg>
    );
  },
);

export default FileAudio;
