import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Bitcoin = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path  d="M12.18,19.86c5.35.94,6.67-6.54,1.32-7.48M12.18,19.86l-6.41-1.13M12.18,19.86l-.38,2.14M13.5,12.38c5.35.94,6.67-6.54,1.32-7.48M13.5,12.38l-4.28-.75M14.82,4.89l-6.42-1.13M14.82,4.89l.38-2.14M7.53,21.25L10.92,2"/>
        </svg>
    );
  },
);

export default Bitcoin;
