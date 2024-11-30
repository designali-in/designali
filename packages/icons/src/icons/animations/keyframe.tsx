import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Keyframe = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M19.74,12.76l-7.13,8.91c-.34.42-.88.42-1.22,0l-7.13-8.91c-.34-.42-.34-1.1,0-1.52L11.39,2.33c.34-.42.88-.42,1.22,0l7.13,8.91c.34.42.34,1.1,0,1.52Z" />
      </svg>
    );
  },
);

export default Keyframe;
