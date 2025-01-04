import * as React from "react";

import type { DesignaliProps } from "../../types";

export const BookBookmark01 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M16.5,17h-6.75c-.69,0-1.25-.56-1.25-1.25M8.5,15.75v-4.41c0-1.49,0-2.24.38-2.76.13-.17.28-.33.45-.45.52-.38,1.27-.38,2.76-.38.49,0,1.08.03,1.58.03.45,0,.67,0,1.09-.06.42-.07.46-.09.55-.13.38-.15.75-.37,1.19-.59v4.75c0,.93,0,1.4-.15,1.77-.2.49-.59.88-1.08,1.08-.37.15-.83.15-1.77.15h-4c-.55,0-1,.45-1,1Z" />
        <path d="M15.5,14.5v2.5" />
        <path d="M10.5,8v1.85c0,.37,0,.56.12.63,0,0,.01,0,.02,0,.12.06.29-.03.61-.22.24-.14.36-.21.5-.22,0,0,.01,0,.02,0,.13,0,.25.07.5.22.32.19.49.29.61.22,0,0,.01,0,.02,0,.12-.07.12-.26.12-.63v-1.85" />
      </svg>
    );
  },
);

export default BookBookmark01;
