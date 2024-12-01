
import * as React from "react";

import type { DesignaliProps } from "../../types";

export const AiSetting = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path  d="M15.5,11.5c0,1.93-1.57,3.5-3.5,3.5s-3.5-1.57-3.5-3.5,1.57-3.5,3.5-3.5,3.5,1.57,3.5,3.5Z"/>
  <path  d="M21,13.6c.32-.09.65-.13,1-.13v-3.93c-2.86,0-4.71-3.1-3.27-5.57l-3.46-1.97c-1.46,2.49-5.07,2.49-6.53,0l-3.46,1.97c1.45,2.46-.41,5.57-3.27,5.57v3.93c2.86,0,4.71,3.1,3.27,5.57l3.46,1.97c.73-1.25,2-1.87,3.27-1.87"/>
  <path  d="M17.72,19.7c-.06-.25-.26-.44-.51-.51l-2.17-.56c-.09-.03-.15-.12-.12-.22.02-.06.06-.11.12-.12l2.17-.56c.25-.06.44-.26.51-.51l.56-2.17c.03-.09.12-.15.22-.12.06.02.11.06.12.12l.56,2.17c.06.25.26.44.51.51l2.17.56c.09.03.15.12.12.22-.02.06-.06.11-.12.12l-2.17.56c-.25.06-.44.26-.51.51l-.56,2.17c-.03.09-.12.15-.22.12-.06-.02-.11-.06-.12-.12l-.56-2.17Z"/>
</svg>
    );
  },
);

export default AiSetting;
