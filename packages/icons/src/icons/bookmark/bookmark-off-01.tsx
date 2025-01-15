import * as React from "react";

import type { DesignaliProps } from "../../types";

export const BookmarkOff01 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M16.6,16.56c-.04.63-.15.99-.45,1.16-.92.5-2.63-1.17-3.45-1.68-.47-.29-.71-.44-.97-.44s-.5.15-.97.44c-.82.5-2.53,2.18-3.45,1.68-.47-.26-.47-.98-.47-2.43v-5.19c0-1.33,0-2.27.14-2.96" />
        <path d="M16.6,14.16v-3.84c0-2.22,0-3.33-.71-4.01-.71-.69-1.87-.69-4.17-.69-1.59,0-2.63,0-3.36.23" />
        <path d="M11.11,8.67h5.19" />
        <path d="M5.62,5.62l12.2,12.2" />
      </svg>
    );
  },
);

export default BookmarkOff01;
