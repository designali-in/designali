import * as React from "react";

import type { DesignaliProps } from "../../types";

export const AiScheduling = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M17.17,19.4c-.07-.28-.29-.5-.57-.57l-2.45-.63c-.11-.03-.17-.14-.14-.25.02-.07.07-.12.14-.14l2.45-.63c.28-.07.5-.29.57-.57l.63-2.45c.03-.11.14-.17.25-.14.07.02.12.07.14.14l.63,2.45c.07.28.29.5.57.57l2.45.63c.11.03.17.14.14.25-.02.07-.07.12-.14.14l-2.45.63c-.28.07-.5.29-.57.57l-.63,2.45c-.03.11-.14.17-.25.14-.07-.02-.12-.07-.14-.14l-.63-2.45Z" />
        <path d="M8,1.74v4" />
        <path d="M16,1.74v4" />
        <path
          fill="none"
          d="M14.91,21.74H5c-1.1,0-2-.9-2-2V5.74c0-1.1.9-2,2-2h14c1.1,0,2,.9,2,2v8.64"
        />
        <path d="M3,9.74h18" />
      </svg>
    );
  },
);

export default AiScheduling;
