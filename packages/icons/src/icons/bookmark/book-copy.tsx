import * as React from "react";

import type { DesignaliProps } from "../../types";

export const BookCopy = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path  d="M2,16V4c0-1.1.9-2,2-2h11"/>
  <path  d="M22,18h-11c-1.1,0-2,.9-2,2s.9,2,2,2h10.5c.28,0,.5-.22.5-.5V6.5c0-.28-.22-.5-.5-.5h-10.5c-1.1,0-2,.9-2,2v12"/>
  <path  d="M5,14h-1c-1.1,0-2,.9-2,2s.9,2,2,2h1"/>
</svg>
    );
  },
);

export default BookCopy;
