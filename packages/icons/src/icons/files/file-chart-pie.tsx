import * as React from "react";

import type { DesignaliProps } from "../../types";

export const FileChartPie = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path  d="M15,2v4c0,1.1.9,2,2,2h4"/>
  <path  d="M17,22h2c1.1,0,2-.9,2-2V7l-5-5H7c-1.1,0-2,.9-2,2v3.5"/>
  <path  d="M5.02,11.51c-2.48,2.2-2.7,5.99-.51,8.47,2.2,2.48,5.99,2.7,8.47.51.18-.16.34-.32.5-.5"/>
  <path  d="M10,16c-.55,0-1-.45-1-1v-4c0-.55.45-1.01.99-.92,2.52.42,4.5,2.4,4.92,4.92.09.54-.36.99-.92.99h-4Z"/>
</svg>
    );
  },
);

export default FileChartPie;
