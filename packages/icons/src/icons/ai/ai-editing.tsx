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
        <path d="M12.96,8.84l1.58,1.58M4.01,22h1.59c1.29,0,1.94,0,2.52-.24.58-.24,1.04-.7,1.95-1.61l8.68-8.68c.57-.57.86-.86,1.01-1.17.29-.59.29-1.28,0-1.87-.15-.31-.44-.6-1.01-1.17-.57-.57-.86-.86-1.17-1.01-.59-.29-1.28-.29-1.87,0-.31.15-.6.44-1.17,1.01L5.86,15.94c-.91.91-1.37,1.37-1.61,1.95-.24.58-.24,1.23-.24,2.52v1.59Z" />
      </svg>
    );
  },
);

export default AiEditing;
