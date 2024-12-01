
import * as React from "react";

import type { DesignaliProps } from "../../types";

export const NeuralNetwork = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
         <path  d="M21.5,12c0,1.38-1.12,2.5-2.5,2.5s-2.5-1.12-2.5-2.5,1.12-2.5,2.5-2.5,2.5,1.12,2.5,2.5Z"/>
  <path  d="M13.5,4c0,.83-.67,1.5-1.5,1.5s-1.5-.67-1.5-1.5.67-1.5,1.5-1.5,1.5.67,1.5,1.5Z"/>
  <path  d="M12.5,11.5c0,.83-.67,1.5-1.5,1.5s-1.5-.67-1.5-1.5.67-1.5,1.5-1.5,1.5.67,1.5,1.5Z"/>
  <path  d="M6.5,7.5c0,1.1-.9,2-2,2s-2-.9-2-2,.9-2,2-2,2,.9,2,2Z"/>
  <path  d="M10.5,19.5c0,1.1-.9,2-2,2s-2-.9-2-2,.9-2,2-2,2,.9,2,2Z"/>
  <path  d="M13.5,5l4,5M14.5,15.5l-4,3M8,17.5l-3-8M6.31,6.65l4.19-2.15M12.5,11.5l4,.34"/>
  <path  d="M12,5.5l-1,4.5"/>
</svg>
    );
  },
);

export default NeuralNetwork;
