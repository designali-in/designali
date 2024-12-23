import * as React from "react";

import type { DesignaliProps } from "../../types";

export const LightHouse = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <line x1="2.88" y1="22" x2="21.12" y2="22" />

        <path d="M10.02,8c-.69-.93-1.88-2.24-1.42-3.52.31-.86,2.4-2.48,3.4-2.48s3.09,1.62,3.4,2.48c.46,1.29-.72,2.59-1.42,3.52" />
        <path d="M9.5,8l-2.5,14M14.5,8l2.5,14" />
        <path d="M8.86,7.5h6.27" />
        <path d="M7.93,13.15h8.14" />
        <path d="M6.62,18.61h10.77" />
        <path d="M2.86,6.69l2.19.64" />
        <path d="M2.88,11.13l2.15-.75" />
        <path d="M21.17,11.45l-2.19-.64" />
        <path d="M21.15,7.01l-2.15.75" />
      </svg>
    );
  },
);

export default LightHouse;
