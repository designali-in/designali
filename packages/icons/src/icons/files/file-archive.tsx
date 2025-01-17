import * as React from "react";

import type { DesignaliProps } from "../../types";

export const FileArchive = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
       
       <path  d="M10,12v-1"/>
  <path  d="M10,18v-2"/>
  <path  d="M10,7v-1"/>
  <path  d="M14,2v4c0,1.1.9,2,2,2h4"/>
  <path  d="M15.5,22h2.5c1.1,0,2-.9,2-2V7l-5-5H6c-1.1,0-2,.9-2,2v16c0,.36.09.7.27,1.01"/>
  <circle  cx="10" cy="20" r="2"/>
 
    <path  d="M10,12v-1"/>
    <path  d="M10,18v-2"/>
    <path  d="M10,7v-1"/>
    <path  d="M14,2v4c0,1.1.9,2,2,2h4"/>
    <path  d="M15.5,22h2.5c1.1,0,2-.9,2-2V7l-5-5H6c-1.1,0-2,.9-2,2v16c0,.36.09.7.27,1.01"/>
    <circle  cx="10" cy="20" r="2"/>
  
</svg>
    );
  },
);

export default FileArchive;
