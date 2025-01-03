import * as React from "react";

import type { DesignaliProps } from "../../types";

export const AddressBook = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path  d="M2,6.06h2"/>
  <path  d="M2,10.06h2"/>
  <path  d="M2,14.06h2"/>
  <path  d="M2,18.06h2"/>
  <rect  x="4" y="2.06" width="16" height="20" rx="2" ry="2"/>
  
    <circle  cx="12" cy="12" r="2.15"/>
    <path  d="M14.15,9.85v2.69c0,.89.72,1.62,1.62,1.62s1.62-.72,1.62-1.62v-.54c0-2.97-2.41-5.38-5.38-5.38s-5.38,2.41-5.38,5.38,2.41,5.38,5.38,5.38c1.16,0,2.3-.38,3.23-1.08"/>
 
</svg>
    );
  },
);

export default AddressBook;
