import * as React from "react";

import type { DesignaliProps } from "../../types";

export const FileCog = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path  d="M14.85,2v4c0,1.1.9,2,2,2h4"/>
  <path  d="M4.05,12.9l-.9-.4"/>
  <path  d="M4.05,15.1l-.9.4"/>
  <path  d="M5.53,21.5c.36.32.83.5,1.31.5h12.01c1.1,0,2-.9,2-2V7l-5-5H6.85c-1.1,0-2,.9-2,2v2.5"/>
  <path  d="M5.75,11.2l-.4-.9"/>
  <path  d="M5.75,16.8l-.4.9"/>
  <path  d="M8.35,10.3l-.4.9"/>
  <path  d="M8.35,17.7l-.4-.9"/>
  <path  d="M10.55,12.5l-.9.4"/>
  <path  d="M10.55,15.5l-.9-.4"/>
  <circle  cx="6.85" cy="14" r="3"/>
</svg>
    );
  },
);

export default FileCog;
