import * as React from "react";

import type { DesignaliProps } from "../../types";

export const BluetoothOff = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
       <path  d="M17,17l-5,5v-10l-5,5"/>
  <path  d="M2,2l20,20"/>
  <path  d="M14.5,9.5l2.5-2.5-5-5v4.5"/>
</svg>
    );
  },
);

export default BluetoothOff;
