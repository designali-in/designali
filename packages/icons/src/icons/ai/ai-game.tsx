import * as React from "react";

import type { DesignaliProps } from "../../types";

export const AiGame = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path  d="M6,8c-.88.14-1.52.4-2.04.89-1.15,1.06-1.31,2.8-1.62,6.29l-.33,3.57c-.12,1.76,1.25,3.25,2.99,3.25h.75c1.23,0,2.33-.76,2.78-1.91l.74-1.88c.24-.62.37-.92.62-1.1.25-.17.58-.17,1.24-.17h1.74c.66,0,.98,0,1.24.17.25.17.38.48.62,1.1l.74,1.88c.46,1.15,1.56,1.91,2.78,1.91h.75c1.74,0,3.12-1.5,2.99-3.25l-.32-3.56c-.32-3.49-.48-5.24-1.62-6.3-.52-.48-1.17-.75-2.04-.89"/>
  <path  d="M11.27,6.78c-.06-.25-.26-.44-.51-.51l-2.17-.56c-.09-.03-.15-.12-.12-.22.02-.06.06-.11.12-.12l2.17-.56c.25-.06.44-.26.51-.51l.56-2.17c.03-.09.12-.15.22-.12.06.02.11.06.12.12l.56,2.17c.06.25.26.44.51.51l2.17.56c.09.03.15.12.12.22-.02.06-.06.11-.12.12l-2.17.56c-.25.06-.44.26-.51.51l-.56,2.17c-.03.09-.12.15-.22.12-.06-.02-.11-.06-.12-.12l-.56-2.17Z"/>
  <circle  cx="7" cy="12.94" r=".15"/>
  <circle  cx="17.01" cy="12.94" r=".15"/>
</svg>
    );
  },
);

export default AiGame;
