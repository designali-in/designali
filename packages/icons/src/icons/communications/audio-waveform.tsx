import * as React from "react";

import type { DesignaliProps } from "../../types";

export const AudioWaveform = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M2,13c1.1,0,2-.9,2-2v-4c0-1.1.9-2,2-2s2,.9,2,2v13c0,1.1.9,2,2,2s2-.9,2-2V4c0-1.1.9-2,2-2s2,.9,2,2v13c0,1.1.9,2,2,2s2-.9,2-2v-4c0-1.1.9-2,2-2" />
      </svg>
    );
  },
);

export default AudioWaveform;
