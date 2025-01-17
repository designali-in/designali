import * as React from "react";

import type { DesignaliProps } from "../../types";

export const FileHeart = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
       <path  d="M5,22h14c1.1,0,2-.9,2-2V7l-5-5H7c-1.1,0-2,.9-2,2v2"/>
  <path  d="M15,2v4c0,1.1.9,2,2,2h4"/>
  <path  d="M11.29,10.7c-.7-.7-1.75-.9-2.66-.52-.29.12-.56.3-.78.53l-.35.34-.35-.34c-.69-.7-1.74-.91-2.65-.53-.3.12-.56.3-.79.53-.95.94-1,2.53.2,3.74l3.59,3.55,3.6-3.55c1.2-1.21,1.14-2.8.19-3.74h0Z"/>
</svg>
    );
  },
);

export default FileHeart;
