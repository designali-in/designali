import * as React from "react";

import type { DesignaliProps } from "../../types";

export const FileBox = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
    <path  d="M15.5,22h3.5c1.1,0,2-.9,2-2V7l-5-5H7c-1.1,0-2,.9-2,2v4"/>
  <path  d="M15,2v4c0,1.1.9,2,2,2h4"/>
  <path  d="M4,13.1c-.63.36-1.01,1.04-1,1.76v3.24c-.02.73.35,1.41.97,1.78l3.03,1.82c.62.37,1.4.38,2.03.01l2.97-1.81c.63-.36,1.01-1.04,1-1.76v-3.24c.02-.73-.35-1.41-.97-1.78l-3.03-1.82c-.62-.37-1.4-.38-2.03-.01l-2.97,1.81Z"/>
  <path  d="M8,17v5"/>
  <path  d="M12.7,14.2l-4.7,2.8-4.7-2.8"/>
</svg>
    );
  },
);

export default FileBox;
