import * as React from "react";

import type { DesignaliProps } from "../../types";

export const EarRings04 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
       
       <circle  cx="6.34" cy="4.87" r="1.72"/>
  <line  x1="6.34" y1="6.59" x2="6.34" y2="14.49"/>
  <path  d="M2,17.79c0-1.74,1.94-3.15,4.34-3.15s4.34,1.41,4.34,3.15"/>
  <path  d="M13.32,17.79c0-1.74,1.94-3.15,4.34-3.15s4.34,1.41,4.34,3.15"/>
  <path  d="M8.13,15.03v3.9c0,1.05-.81,1.92-1.79,1.92h0c-.99,0-1.79-.86-1.79-1.92v-3.9"/>
  <circle  cx="17.66" cy="4.87" r="1.72"/>
  <line  x1="17.66" y1="6.59" x2="17.66" y2="14.49"/>
  <path  d="M19.45,15.03v3.9c0,1.05-.81,1.92-1.79,1.92h0c-.99,0-1.79-.86-1.79-1.92v-3.9"/>
</svg>
    );
  },
);

export default EarRings04;
