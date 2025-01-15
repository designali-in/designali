import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Vest = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M4.51,10.83c2.39-1.64,2.59-4.28,1.87-6.05-.3-.73-.45-1.1-.37-1.29.29-.68,2.36-1.2,2.99-1.49l4.17,9.73c.6,1.46.89,2.19.82,2.94-.08.75-.53,1.4-1.42,2.71l-2.44,3.58c-.78,1.15-1.21,1.26-2.5.76l-2.32-.91c-1.07-.42-1.31-.73-1.31-1.89v-7.18c0-.55-.01-.55.51-.91Z" />
        <path d="M12,8.99l3-6.99c.63.29,2.7.81,2.99,1.49.08.19-.07.56-.37,1.29-.73,1.77-.53,4.4,1.87,6.05.52.36.51.35.51.91v7.18c0,1.16-.24,1.47-1.31,1.89l-2.32.91c-1.29.5-1.72.39-2.5-.76l-1.87-2.74" />
        <path d="M9,2h6" />
        <circle cx="10.94" cy="14.41" r=".05" />
      </svg>
    );
  },
);

export default Vest;
