import * as React from "react";

import type { DesignaliProps } from "../../types";

export const ListX = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M12 12H3" />
        <path d="M16 6H3" />
        <path d="M12 18H3" />
        <path d="m16 12 5 3-5 3v-6Z" />
      </svg>
    );
  },
);

export default ListX;
