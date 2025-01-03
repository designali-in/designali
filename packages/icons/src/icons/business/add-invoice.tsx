import * as React from "react";

import type { DesignaliProps } from "../../types";

export const AddInvoice = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
       <path  d="M13.27,21.1c-.52.33-.77.49-1.06.49s-.54-.16-1.06-.49l-1.91-1.21c-.48-.31-.73-.46-1-.47-.29,0-.54.14-1.06.47-.59.37-1.75,1.39-2.51.9-.46-.3-.46-1.05-.46-2.57V7.59c0-2.83,0-4.24.83-5.12.83-.88,2.16-.88,4.82-.88h4.71c2.66,0,3.99,0,4.82.88s.83,2.29.83,5.12v4"/>
 
    <line  x1="17.77" y1="13.54" x2="17.77" y2="22"/>
    <line  x1="13.54" y1="17.98" x2="22" y2="17.98"/>
  
  <line  x1="8.21" y1="6.59" x2="16.21" y2="6.59"/>
  <line  x1="8.21" y1="10.59" x2="12.21" y2="10.59"/>
</svg>
    );
  },
);

export default AddInvoice;
