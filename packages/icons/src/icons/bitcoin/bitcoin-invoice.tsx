import * as React from "react";

import type { DesignaliProps } from "../../types";

export const BitcoinInvoice = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
     <path  d="M16.64,6.22c-.64,0-1.17,1.55-1.17,3.47h1.17c.56,0,.84,0,1.02-.19.17-.19.14-.45.08-.96-.16-1.35-.59-2.32-1.1-2.32Z"/>
  <path  d="M15.47,9.72v6.12c0,.87,0,1.31-.27,1.48-.44.28-1.11-.31-1.45-.52-.28-.18-.42-.27-.58-.27-.17,0-.31.08-.61.27l-1.1.7c-.3.19-.45.28-.61.28s-.31-.09-.61-.28l-1.1-.7c-.28-.18-.42-.27-.58-.27-.17,0-.31.08-.61.27-.34.21-1.01.8-1.45.52-.27-.17-.27-.61-.27-1.48v-6.12c0-1.65,0-2.48.51-2.99.51-.51,1.33-.51,2.96-.51h6.94"/>
  <path  d="M9.76,12.87v-3.47M10.84,9.4v-.87M10.84,13.73v-.87M9.76,11.13h2.17M11.93,11.13c.36,0,.65.29.65.65v.43c0,.36-.29.65-.65.65h-2.82M11.93,11.13c.36,0,.65-.29.65-.65v-.43c0-.36-.29-.65-.65-.65h-2.82"/>
</svg>
    );
  },
);

export default BitcoinInvoice;
