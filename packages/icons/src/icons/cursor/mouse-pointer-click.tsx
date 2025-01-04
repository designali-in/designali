import * as React from "react";

import type { DesignaliProps } from "../../types";

export const MousePointerClick = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
       
       <path  d="M14.55,4.02l-2.13,2.02"/>
  <path  d="M5.09,8.17l-3.08-.85"/>
  <path  d="M6.04,12.42l-2.02,2.13"/>
  <path  d="M7.32,2l.85,3.08"/>
  <path  d="M9.27,9.97c-.11-.27.01-.58.28-.69.13-.06.28-.06.41,0l11.7,4.79c.27.11.4.42.29.69-.06.16-.2.28-.37.32l-4.63,1.11c-.39.09-.69.4-.79.79l-1.11,4.63c-.07.29-.35.46-.64.4-.17-.04-.31-.16-.37-.32l-4.79-11.7Z"/>
</svg>
    );
  },
);

export default MousePointerClick;
