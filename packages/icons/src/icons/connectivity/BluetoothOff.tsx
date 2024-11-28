import * as React from "react";

import { DesignaliProps } from "../types";

export const BluetoothOff = React.forwardRef<SVGSVGElement, DesignaliProps>(
  ({ color = "currentColor", ...props }, forwardedRef) => {
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
        <path d="m17 17-5 5V12l-5 5" />
        <path d="m2 2 20 20" />
        <path d="M14.5 9.5 17 7l-5-5v4.5" />
      </svg>
    );
  },
);

export default BluetoothOff;
