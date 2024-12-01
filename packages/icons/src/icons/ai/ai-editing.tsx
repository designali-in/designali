import * as React from "react";

import type { DesignaliProps } from "../../types";

export const AiEditing = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M4.81,6.78c-.06-.25-.26-.44-.51-.51l-2.17-.56c-.09-.03-.15-.12-.12-.22.02-.06.06-.11.12-.12l2.17-.56c.25-.06.44-.26.51-.51l.56-2.17c.03-.09.12-.15.22-.12.06.02.11.06.12.12l.56,2.17c.06.25.26.44.51.51l2.17.56c.09.03.15.12.12.22-.02.06-.06.11-.12.12l-2.17.56c-.25.06-.44.26-.51.51l-.56,2.17c-.03.09-.12.15-.22.12-.06-.02-.11-.06-.12-.12l-.56-2.17Z" />
        <path d="M15.4,9.64l1.48,1.48M7,22h1.5c1.21,0,1.82,0,2.36-.23.55-.23.97-.65,1.83-1.51l8.15-8.15c.54-.54.81-.81.95-1.1.27-.55.27-1.2,0-1.76-.14-.29-.41-.56-.95-1.1-.54-.54-.81-.81-1.1-.95-.55-.27-1.2-.27-1.76,0-.29.14-.56.41-1.1.95l-8.15,8.15c-.86.86-1.29,1.29-1.51,1.83-.23.55-.23,1.15-.23,2.36v1.5Z" />
      </svg>
    );
  },
);

export default AiEditing;
