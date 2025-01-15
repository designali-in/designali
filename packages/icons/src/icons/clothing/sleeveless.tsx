import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Sleeveless = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M12,7.32c1.66,0,3-2.11,3-5.32,1.1.43,2.46.4,2.41,1.76-.05,1.35.39,3.06,1.76,4.35.62.58.83.85.83,1.68v6.7c0,2.28,0,3.42-.73,4.12-2.08,2.01-12.82,1.66-14.54,0-.73-.71-.73-1.85-.73-4.12v-6.7c0-.83.21-1.1.83-1.68,1.38-1.29,1.81-3,1.76-4.35-.05-1.36,1.3-1.34,2.41-1.76,0,3.2,1.34,5.32,3,5.32Z" />
      </svg>
    );
  },
);

export default Sleeveless;
