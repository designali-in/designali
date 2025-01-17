import * as React from "react";

import type { DesignaliProps } from "../../types";

export const FilePen = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
      <path  d="M12.5,22h5.5c1.1,0,2-.9,2-2V7l-5-5H6c-1.1,0-2,.9-2,2v9.5"/>
  <path  d="M14,2v4c0,1.1.9,2,2,2h4"/>
  <path  d="M13.38,15.63c.83-.83.83-2.17,0-3s-2.17-.83-3,0l-5.01,5.01c-.24.24-.41.53-.51.85l-.84,2.87c-.08.27.07.54.34.62.09.03.19.03.28,0l2.87-.84c.32-.09.62-.27.85-.51l5.01-5.01Z"/>
</svg>
    );
  },
);

export default FilePen;
