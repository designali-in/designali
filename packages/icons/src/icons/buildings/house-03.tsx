import * as React from "react";

import type { DesignaliProps } from "../../types";

export const House03 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M11,20h10v-11" />

        <path d="M2,10l5-6M7,4l5.41,5.41c.29.29.43.43.62.51.18.08.39.08.8.08h8.17l-3.8-4.56c-.59-.71-.88-1.06-1.29-1.25-.4-.19-.86-.19-1.79-.19H7Z" />
        <path d="M11,8v12H3v-11.14" />
        <path d="M7.01,12h0" />
        <path d="M4.23,4.34v2.66" />
        <path d="M17.33,14h-2.66" />
        <path d="M7,16.51v3.49" />
      </svg>
    );
  },
);

export default House03;
