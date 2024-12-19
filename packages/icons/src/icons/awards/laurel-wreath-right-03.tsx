import * as React from "react";

import type { DesignaliProps } from "../../types";

export const LaurelWreathRight03 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
          <path  d="M13.01,6.5s-1.83-.07-2.67-1.57c-.84-1.5.15-2.93.15-2.93,0,0,1.83.07,2.67,1.57.84,1.5-.15,2.93-.15,2.93Z"/>
  <path  d="M12.82,6.5c1.46,2.1,3.32,6.98-.98,9.69-5.37,3.39-5.85,4.36-6.34,5.81"/>
  <path  d="M7.97,18.5s3.57-1.36,1.53-5c0,0-4.08,1.36-1.53,5Z"/>
  <path  d="M8,19s2.37-3.07,5.5.1c0,0-2.51,3.58-5.5-.1Z"/>
  <path  d="M14.51,12.94s-.4-4.09,3.96-3.94c0,0,.64,4.57-3.96,3.94Z"/>
  <path  d="M14.49,12.5s.4-4.09-3.96-3.94c0,0-.64,4.57,3.96,3.94Z"/>
</svg>
    );
  },
);

export default LaurelWreathRight03;
