import * as React from "react";

import type { DesignaliProps } from "../../types";

export const AiLaptop = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M16.53,2v1.65M13.63,4.92h1.7M20.3,4.92h1.7M20.3,7.4h1.7M13.63,7.4h1.7M16.53,8.69v1.65M19.04,8.69v1.65M19.03,2v1.65M16.17,8.64h3.3c.46,0,.83-.37.83-.83v-3.33c0-.46-.37-.83-.83-.83h-3.3c-.46,0-.83.37-.83.83v3.33c0,.46.37.83.83.83Z" />
        <path
          fill="none"
          d="M10.12,6.02h-4.51c-1.18,0-2.13.95-2.13,2.13v9.59M20.52,17.74v-3.98M20.52,17.74H3.48M20.52,17.74l1.36,2.72c.26.53.05,1.17-.47,1.43-.15.08-.32.12-.49.11H3.07c-.59,0-1.07-.47-1.07-1.06,0-.17.04-.34.11-.49l1.36-2.72"
        />
      </svg>
    );
  },
);

export default AiLaptop;
