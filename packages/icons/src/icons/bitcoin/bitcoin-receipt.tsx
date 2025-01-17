import * as React from "react";

import type { DesignaliProps } from "../../types";

export const BitcoinReceipt = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
      <path  d="M11.06,12.75v-3M12,9.75v-.75M12,13.5v-.75M11.06,11.25h1.87M12.94,11.25c.31,0,.56.25.56.56v.38c0,.31-.25.56-.56.56h-2.44M12.94,11.25c.31,0,.56-.25.56-.56v-.38c0-.31-.25-.56-.56-.56h-2.44"/>
  <path  d="M11.47,16.76l-.96-.6c-.24-.15-.36-.23-.5-.23-.15,0-.27.07-.53.23-.29.19-.88.69-1.25.45-.23-.15-.23-.53-.23-1.28v-5.32c0-1.41,0-2.12.41-2.56.41-.44,1.08-.44,2.41-.44h2.35c1.33,0,2,0,2.41.44s.41,1.15.41,2.56v5.32c0,.76,0,1.13-.23,1.28-.38.24-.96-.27-1.25-.45-.24-.15-.36-.23-.5-.23-.15,0-.27.07-.53.23l-.96.6c-.26.16-.39.24-.53.24s-.27-.08-.53-.24Z"/>
</svg>
    );
  },
);

export default BitcoinReceipt;
