import * as React from "react";

import type { DesignaliProps } from "../../types";

export const BitcoinDown02 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
           <path  d="M20,8.5l-4.59-4.21c-.67-.61-1-.92-1.4-.91-.4,0-.72.33-1.36.97l-.97.97c-.56.56-.85.85-1.21.88s-.69-.19-1.35-.65l-5.13-3.55M20,8.5h-3.5M20,8.5v-3"/>
  <path  d="M9.44,18.17v-5.33M11,12.83v-1.33M11,19.5v-1.33M9.44,15.5h3.12M12.56,15.5c.52,0,.94.45.94,1v.67c0,.55-.42,1-.94,1h-4.06M12.56,15.5c.52,0,.94-.45.94-1v-.67c0-.55-.42-1-.94-1h-4.06"/>
  <circle  cx="11" cy="15.46" r="6.54"/>
</svg>
    );
  },
);

export default BitcoinDown02;
