import * as React from "react";

import type { DesignaliProps } from "../../types";

export const AiInnovation01 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M11,2c-4.42,0-8,3.55-8,7.92,0,1.49.42,2.89,1.14,4.08" />
        <path d="M17,5h-2c-.94,0-1.41,0-1.71.29-.29.29-.29.76-.29,1.71v2c0,.94,0,1.41.29,1.71s.76.29,1.71.29h2c.94,0,1.41,0,1.71-.29s.29-.76.29-1.71v-2c0-.94,0-1.41-.29-1.71-.29-.29-.76-.29-1.71-.29Z" />
        <path d="M14.5,11v2M17.5,11v2M14.5,3v2M17.5,3v2M13,6.5h-2M13,9.5h-2M21,6.5h-2M21,9.5h-2" />
        <path d="M6.38,17.1c-.09-.28-.14-.41-.13-.53.01-.24.16-.45.38-.53.1-.04.25-.04.54-.04h7.66c.29,0,.44,0,.54.04.22.09.37.29.38.53,0,.11-.04.25-.13.53-.17.51-.25.77-.39.97-.27.43-.7.74-1.2.87-.24.06-.51.06-1.04.06h-3.98c-.54,0-.81,0-1.04-.06-.5-.12-.93-.44-1.2-.87-.13-.21-.22-.46-.39-.97Z" />
        <path d="M14,19l-.13.65c-.14.71-.21,1.06-.37,1.34-.24.43-.64.76-1.11.91-.3.1-.67.1-1.39.1s-1.08,0-1.39-.1c-.47-.16-.87-.48-1.11-.91-.16-.28-.23-.63-.37-1.34l-.13-.65" />
      </svg>
    );
  },
);

export default AiInnovation01;
