import * as React from "react";

import type { DesignaliProps } from "../../types";

export const House01 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path  d="M12,3v19h-5c-1.89,0-2.83,0-3.41-.59-.59-.59-.59-1.53-.59-3.41V7"/>
  <path  d="M10,22h7c1.89,0,2.83,0,3.41-.59s.59-1.53.59-3.41v-6.5"/>
  <line  x1="2" y1="7" x2="14.05" y2="2.09"/>
  <line  x1="12.01" y1="6.98" x2="21.99" y2="11.52"/>
  <path  d="M6.75,12.34h1.5"/>
  <path  d="M6.75,16h1.5"/>
  <path  d="M15.5,13.76h1.5"/>
  <path  d="M16.25,17.76v4.24"/>
</svg>
    );
  },
);

export default House01;
