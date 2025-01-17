import * as React from "react";

import type { DesignaliProps } from "../../types";

export const BitcoinFilter = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path  d="M8.94,8.87c-.87,0-1.3,0-1.54.26-.24.26-.19.67-.08,1.48.03.24.08.37.24.56.51.6,1.46,1.66,2.78,2.62.12.09.2.23.21.39.04.53.09,1.01.13,1.43.07.69.1,1.04.35,1.17.25.13.57-.04,1.2-.37l.57-.3c.23-.12.35-.19.42-.29.07-.1.09-.23.12-.48.04-.33.08-.71.12-1.15.01-.16.09-.3.21-.39,1.32-.96,2.27-2.03,2.78-2.62.16-.18.21-.32.24-.56.11-.81.16-1.22-.08-1.48-.24-.26-.68-.26-1.54-.26"/>
  <path  d="M11,10.2v-3.19M12,7.01v-.8M12,10.99v-.8M11,8.6h1.99M13,8.6c.33,0,.6.27.6.6v.4c0,.33-.27.6-.6.6h-2.59M13,8.6c.33,0,.6-.27.6-.6v-.4c0-.33-.27-.6-.6-.6h-2.59"/>
</svg>
    );
  },
);

export default BitcoinFilter;
