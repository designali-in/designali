import * as React from "react";

import type { DesignaliProps } from "../../types";

export const AiInnovation02 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
       <path  d="M5.14,14c-.73-1.19-1.14-2.59-1.14-4.08,0-4.37,3.58-7.92,8-7.92s8,3.55,8,7.92c0,1.49-.42,2.89-1.14,4.08"/>
  <path  d="M7.38,17.1c-.09-.28-.14-.41-.13-.53.01-.24.16-.45.38-.53.1-.04.25-.04.54-.04h7.66c.29,0,.44,0,.54.04.22.09.37.29.38.53,0,.11-.04.25-.13.53-.17.51-.25.77-.39.97-.27.43-.7.74-1.2.87-.24.06-.51.06-1.04.06h-3.98c-.54,0-.81,0-1.04-.06-.5-.12-.93-.44-1.2-.87-.13-.21-.22-.46-.39-.97Z"/>
  <path  d="M15,19l-.13.65c-.14.71-.21,1.06-.37,1.34-.24.43-.64.76-1.11.91-.3.1-.67.1-1.39.1s-1.08,0-1.39-.1c-.47-.16-.87-.48-1.11-.91-.16-.28-.23-.63-.37-1.34l-.13-.65"/>
  <path  d="M12.31,12l-1.46-4.52c-.09-.28-.37-.48-.69-.48s-.6.19-.69.48l-1.46,4.52M15,7v5M8.54,10.5h3.23"/>
</svg>
    );
  },
);

export default AiInnovation02;
