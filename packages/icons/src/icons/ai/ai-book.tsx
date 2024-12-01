import * as React from "react";

import type { DesignaliProps } from "../../types";

export const AiBook = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path  d="M20.5,16.93v-6.93c0-3.77,0-5.66-1.17-6.83-1.17-1.17-3.06-1.17-6.83-1.17h-1c-3.77,0-5.66,0-6.83,1.17-1.17,1.17-1.17,3.06-1.17,6.83v9.5"/>
  <path  d="M20.5,17H6c-1.38,0-2.5,1.12-2.5,2.5s1.12,2.5,2.5,2.5h14.5"/>
  <path  d="M20.5,22c-1.38,0-2.5-1.12-2.5-2.5s1.12-2.5,2.5-2.5"/>
  <path  d="M12.31,12l-1.46-4.52c-.09-.28-.37-.48-.69-.48s-.6.19-.69.48l-1.46,4.52M15,7v5M8.54,10.5h3.23"/>
</svg>
    );
  },
);

export default AiBook;
