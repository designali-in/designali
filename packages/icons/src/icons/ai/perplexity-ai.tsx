
import * as React from "react";

import type { DesignaliProps } from "../../types";

export const PerplexityAi = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
         <path " d="M6,16c-1.41,0-2.12,0-2.56-.44-.44-.44-.44-1.15-.44-2.56v-2c0-1.41,0-2.12.44-2.56.44-.44,1.15-.44,2.56-.44h12c1.41,0,2.12,0,2.56.44.44.44.44,1.15.44,2.56v2c0,1.41,0,2.12-.44,2.56-.44.44-1.15.44-2.56.44"/>
  <path  d="M12,2v20"/>
  <path  d="M5,8V2.71c0-.39.32-.71.71-.71.19,0,.37.07.5.21l5.79,5.79"/>
  <path" d="M19,8V2.71c0-.39-.32-.71-.71-.71-.19,0-.37.07-.5.21l-5.79,5.79"/>
  <path  d="M6.65,12.91l5.35-4.91,5.35,4.91c.41.38.65.91.65,1.47v5.93c0,.38-.31.69-.69.69-.2,0-.38-.08-.51-.23l-4.79-5.27-4.79,5.27c-.13.14-.32.23-.51.23-.38,0-.69-.31-.69-.69v-5.93c0-.56.24-1.1.65-1.47Z"/>
</svg>
    );
  },
);

export default PerplexityAi;
