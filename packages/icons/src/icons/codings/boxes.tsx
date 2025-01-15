import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Boxes = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M2.97,12.92c-.6.36-.97,1.01-.97,1.71v3.24c0,.7.37,1.35.97,1.71l3,1.8c.63.38,1.43.38,2.06,0l3.97-2.38v-5.5l-5-3-4.03,2.42Z" />
        <path d="M7,16.5l-4.74-2.85" />
        <path d="M7,16.5l5-3" />
        <path d="M7,16.5v5.17" />
        <path d="M12,13.5v5.5l3.97,2.38c.63.38,1.43.38,2.06,0l3-1.8c.6-.36.97-1.01.97-1.71v-3.24c0-.7-.37-1.35-.97-1.71l-4.03-2.42-5,3Z" />
        <path d="M17,16.5l-5-3" />
        <path d="M17,16.5l4.74-2.85" />
        <path d="M17,16.5v5.17" />
        <path d="M7.97,4.42c-.6.36-.97,1.01-.97,1.71v4.37l5,3,5-3v-4.37c0-.7-.37-1.35-.97-1.71l-3-1.8c-.63-.38-1.43-.38-2.06,0l-3,1.8Z" />
        <path d="M12,8l-4.74-2.85" />
        <path d="M12,8l4.74-2.85" />
        <path d="M12,13.5v-5.5" />
      </svg>
    );
  },
);

export default Boxes;
