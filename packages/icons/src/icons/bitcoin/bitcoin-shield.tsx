import * as React from "react";

import type { DesignaliProps } from "../../types";

export const BitcoinShield = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
      <path  d="M11.06,13.25v-3M12,10.25v-.75M12,14v-.75M11.06,11.75h1.88M12.94,11.75c.31,0,.56.25.56.56v.38c0,.31-.25.56-.56.56h-2.44M12.94,11.75c.31,0,.56-.25.56-.56v-.37c0-.31-.25-.56-.56-.56h-2.44"/>
  <path  d="M16.5,11.59v-1.45c0-.82,0-1.23-.2-1.5-.2-.27-.66-.4-1.57-.66-.62-.18-1.17-.39-1.61-.59-.6-.27-.9-.4-1.11-.4s-.51.13-1.11.4c-.44.2-.99.41-1.61.59-.91.26-1.37.39-1.57.66-.2.27-.2.68-.2,1.5v1.45c0,2.81,2.53,4.5,3.8,5.17.3.16.46.24.7.24s.4-.08.7-.24c1.27-.67,3.8-2.36,3.8-5.17Z"/>
</svg>
    );
  },
);

export default BitcoinShield;
