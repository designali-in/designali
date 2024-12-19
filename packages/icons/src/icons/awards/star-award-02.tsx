import * as React from "react";

import type { DesignaliProps } from "../../types";

export const StarAward02 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path  d="M19,9c0,3.87-3.13,7-7,7s-7-3.13-7-7S8.13,2,12,2s7,3.13,7,7Z"/>
  <path  d="M8,15v5.51c0,.87,0,1.31.28,1.45.28.14.63-.12,1.32-.65l1.2-.9c.58-.43.87-.65,1.2-.65s.62.22,1.2.65l1.2.9c.7.52,1.05.79,1.32.65.28-.14.28-.58.28-1.45v-5.51"/>
  <path  d="M11.67,5.21c.14-.28.52-.28.66,0l.81,1.67c.05.11.16.19.27.21l1.77.29c.3.05.42.43.2.66l-1.27,1.33c-.08.09-.12.21-.1.33l.28,1.85c.05.31-.27.55-.54.41l-1.59-.85c-.11-.06-.23-.06-.34,0l-1.59.85c-.27.14-.58-.09-.54-.41l.28-1.85c.02-.12-.02-.25-.1-.33l-1.27-1.33c-.21-.22-.09-.61.2-.66l1.77-.29c.12-.02.22-.1.27-.21l.81-1.67Z"/>
</svg>
    );
  },
);

export default StarAward02;
