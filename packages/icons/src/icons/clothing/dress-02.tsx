import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Dress02 = React.forwardRef<SVGSVGElement, DesignaliProps>(
  ({ ...props }, forwardedRef) => {
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
        <path d="M14.5,9c1.46-.5,2.23-1.01,2-3-.13-1.12-.5-2,.5-3l-2.5-1c-.17,1.17-1,2.5-2.5,3-1.5-.5-2.33-1.83-2.5-3l-2.5,1c1,1,.63,1.88.5,3-.23,1.99.54,2.5,2,3" />
        <path d="M8.5,12h7c-.5-1-.5-2-.5-3h-6c0,1,0,2-.5,3Z" />
        <path d="M16.31,21.45c1.29.74,2.98.72,4.28-.02.36-.21.55-.68.28-.97-1.93-2.05-3.37-4.56-4.38-7.11-.27-.67-.4-1.01-.65-1.18-.25-.17-.6-.17-1.28-.17h-5.12c-.68,0-1.03,0-1.28.17-.25.17-.39.51-.65,1.18-1.01,2.55-2.45,5.05-4.38,7.11-.27.29-.08.76.28.97,1.31.74,3,.75,4.28.02.81-.45,1.82-.45,2.61,0,.52.3,1.16.55,1.7.55s1.18-.26,1.7-.55c.79-.45,1.81-.45,2.61,0Z" />
      </svg>
    );
  },
);

export default Dress02;
