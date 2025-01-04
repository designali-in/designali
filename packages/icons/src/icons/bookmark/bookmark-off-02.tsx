import * as React from "react";

import type { DesignaliProps } from "../../types";

export const BookmarkOff02 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M15.74,16.2c-.03.48-.11.76-.35.89-.7.38-2.02-.9-2.64-1.29-.36-.22-.54-.34-.75-.34s-.38.11-.75.34c-.63.39-1.94,1.67-2.64,1.29-.36-.2-.36-.75-.36-1.86v-3.98c0-1.02,0-1.74.11-2.27" />
        <path d="M15.74,14.35v-2.95c0-1.7,0-2.55-.55-3.08-.55-.53-1.43-.53-3.2-.53-1.22,0-2.02,0-2.57.17" />
        <path d="M7.32,7.8l9.36,9.36" />
      </svg>
    );
  },
);

export default BookmarkOff02;
