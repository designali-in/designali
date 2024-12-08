import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Shellfish = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M14.55,4.96c.07.31.09.64.05.98l-.82,6.04M14.55,4.96c-.63-2.61-4.46-2.61-5.09,0M14.55,4.96c1.57-1.61,4.38,0,4.45,2M19,6.96c1,.17,3,1.1,3,3.51,0,2.17-2.61,4.47-5.18,6.29-.58.41-.87.62-1.06.77-.57.46-.94.83-1.38,1.42-.14.19-.29.41-.59.86l-.23.35c-.35.52-.93.83-1.55.83s-1.21-.31-1.55-.83l-.23-.35c-.3-.45-.45-.67-.59-.86-.44-.59-.81-.96-1.38-1.42-.19-.15-.48-.36-1.06-.77-2.58-1.82-5.18-4.12-5.18-6.29,0-2.41,2-3.34,3-3.51M19,6.96c.07,1.84-1.19,4.31-2.3,6.02M9.45,4.96c-.07.31-.09.64-.05.98l.82,6.04M9.45,4.96c-1.57-1.61-4.38,0-4.45,2M5,6.96c-.07,1.84,1.19,4.31,2.3,6.02" />
        <path d="M18,16l-.76,3.79c-.14.7-.76,1.21-1.47,1.21h-7.54c-.72,0-1.33-.5-1.47-1.21l-.76-3.79" />
      </svg>
    );
  },
);

export default Shellfish;
