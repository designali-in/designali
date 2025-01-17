import * as React from "react";

import type { DesignaliProps } from "../../types";

export const FilePenLine = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
     <path  d="M17,5l-2.41-2.41c-.37-.38-.88-.59-1.41-.59H5c-1.1,0-2,.9-2,2v16c0,1.1.9,2,2,2h12c1.1,0,2-.9,2-2"/>
  <path  d="M20.38,12.63c.83-.83.83-2.17,0-3s-2.17-.83-3,0l-4.01,4.01c-.24.24-.41.53-.51.85l-.84,2.87c-.08.27.07.54.34.62.09.03.19.03.28,0l2.87-.84c.32-.09.62-.27.85-.51l4.01-4.01Z"/>
  <path  d="M7,18h1"/>
</svg>
    );
  },
);

export default FilePenLine;
