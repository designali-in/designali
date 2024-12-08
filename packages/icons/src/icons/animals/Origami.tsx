import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Origami = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M12.44,2.42l9.35,16.63c.24.44.17.98-.19,1.33l-1.3,1.29c-.21.21-.49.32-.78.32H5.93c-.25,0-.5-.09-.69-.24l-2.75-2.2c-.48-.38-.56-1.08-.17-1.56.21-.27.53-.42.88-.42l4.63.03" />
        <path d="M12.21,12V3.11c0-.61.5-1.11,1.11-1.11h7c.61,0,1.11.5,1.11,1.11,0,.32-.14.63-.39.84l-5.22,4.47" />
        <path d="M12.21,22L3.97,13.76c-.42-.42-.65-.98-.65-1.57v-6.4c0-.61.5-1.11,1.12-1.11.29,0,.57.12.78.32l15.88,15.89" />
      </svg>
    );
  },
);

export default Origami;
