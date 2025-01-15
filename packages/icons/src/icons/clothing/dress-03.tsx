import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Dress03 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
       
       <path  d="M15,4l-3,2-3-2c-.59.51-1.93,1.29-2,2.15-.03.37.13.57.43.98.67.88,1.56,1.4,1.56,2.88h6c0-1.48.89-2,1.56-2.88.31-.4.46-.61.43-.98-.07-.85-1.41-1.64-2-2.15Z"/>
  <path  d="M9.5,10h5"/>
  <path  d="M18,19c2,0,3-2.17,3-2.17-2.82-1.84-4.5-3.99-5.41-5.62-.35-.62-.52-.93-.76-1.07-.23-.14-.55-.14-1.17-.14h-3.32c-.63,0-.94,0-1.17.14-.23.14-.41.45-.76,1.07-.91,1.63-2.59,3.79-5.41,5.62,0,0,1,2.17,3,2.17"/>
  <path  d="M13.71,14c.34.8,1.82,2.67,3.44,4.31.6.6.9.91.86,1.42-.04.51-.29.68-.79,1.02-1.14.78-2.87,1.25-5.21,1.25s-4.07-.47-5.21-1.25c-.5-.34-.75-.51-.79-1.02-.04-.51.26-.81.86-1.42,1.62-1.64,3.1-3.51,3.44-4.31"/>
  
    <line  x1="9.07" y1="2" x2="9.07" y2="4"/>
    <line  x1="14.93" y1="2" x2="14.93" y2="4"/>
  
</svg>
    );
  },
);

export default Dress03;
