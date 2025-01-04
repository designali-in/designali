import * as React from "react";

import type { DesignaliProps } from "../../types";

export const BookEdit = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M12,7v14" />
        <path d="M12,21c0-1.66-1.34-3-3-3H3c-.55,0-1-.45-1-1V4c0-.55.45-1,1-1h5c2.21,0,4,1.79,4,4,0-2.21,1.79-4,4-4h5c.55,0,1,.45,1,1v8.34" />

        <path d="M21.54,17.31c.61-.61.61-1.6,0-2.21-.61-.61-1.6-.61-2.21,0l-3.69,3.69c-.18.17-.3.39-.37.63l-.62,2.11c-.06.2.06.4.25.46.07.02.14.02.21,0l2.11-.62c.24-.07.45-.2.63-.37l3.69-3.69Z" />
      </svg>
    );
  },
);

export default BookEdit;
