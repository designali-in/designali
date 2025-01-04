import * as React from "react";

import type { DesignaliProps } from "../../types";

export const VideoOff = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
       <path  d="M10.66,6h3.34c1.1,0,2,.9,2,2v2.5l5.25-3.06c.24-.14.54-.06.68.18.04.08.07.16.07.25v8.2"/>
  <path  d="M16,16c0,1.1-.9,2-2,2H4c-1.1,0-2-.9-2-2v-8c0-1.1.9-2,2-2h2"/>
  <path  d="M2,2l20,20"/>
</svg>
    );
  },
);

export default VideoOff;
