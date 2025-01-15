import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Video = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M16,13l5.22,3.48c.23.15.54.09.69-.14.05-.08.08-.18.08-.28V7.87c0-.28-.22-.5-.5-.5-.09,0-.18.02-.25.07l-5.25,3.06" />
        <rect x="2" y="6" width="14" height="12" rx="2" ry="2" />
      </svg>
    );
  },
);

export default Video;
