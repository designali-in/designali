import * as React from "react";

import type { DesignaliProps } from "../../types";

export const NPM = React.forwardRef<SVGSVGElement, DesignaliProps>(
  ({ ...props }, forwardedRef) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="12.01"
        viewBox="0 0 24 12.01"
        {...props}
        ref={forwardedRef}
      >
        <path
          strokeWidth={0}
          fill="#cb3837"
          d="M22,2.12v6.66s-.02,0-.03,0c-3.31,0-6.62,0-9.93,0-.01,0-.03,0-.05,0v1.1h-4.44v-1.11H2V2.12h.06c6.63,0,13.25,0,19.88,0,.02,0,.04,0,.06,0ZM17.55,4.35v3.33h.05c.33,0,.67,0,1,0,.07,0,.06,0,.06-.06,0-1.07,0-2.14,0-3.21v-.06h1.1s0,.04,0,.06c0,1.07,0,2.14,0,3.22q0,.05.05.05c.34,0,.68,0,1.02,0,.02,0,.03,0,.05,0V3.23h-6.67v4.44h2.23v-3.32h1.11ZM8.66,3.23s0,.03,0,.05c0,1.82,0,3.65,0,5.47,0,.04,0,.05.05.05.71,0,1.42,0,2.14,0,.04,0,.05-.01.05-.05,0-.34,0-.68,0-1.02v-.05h.05c.71,0,1.41,0,2.12,0,.05,0,.05,0,.05-.05,0-1.45,0-2.9,0-4.35,0-.05,0-.05-.05-.05-1.45,0-2.9,0-4.35,0h-.05ZM6.44,4.35v3.32h1.11V3.23H3.11v4.44h2.23v-3.32h1.1Z"
        />
        <path
          strokeWidth={0}
          fill="#fff"
          d="M17.55,4.35h-1.11v3.32h-2.23V3.23h6.67v4.45s-.03,0-.05,0c-.34,0-.68,0-1.02,0q-.05,0-.05-.05c0-1.07,0-2.14,0-3.22,0-.02,0-.04,0-.06h-1.1v.06c0,1.07,0,2.14,0,3.21,0,.07,0,.06-.06.06-.33,0-.67,0-1,0h-.05v-3.33Z"
        />
        <path
          strokeWidth={0}
          fill="#fff"
          d="M8.66,3.23h.05c1.45,0,2.9,0,4.35,0,.05,0,.05,0,.05.05,0,1.45,0,2.9,0,4.35,0,.05,0,.05-.05.05-.71,0-1.41,0-2.12,0h-.05v.05c0,.34,0,.68,0,1.02,0,.04,0,.05-.05.05-.71,0-1.42,0-2.14,0-.04,0-.05-.01-.05-.05,0-1.82,0-3.65,0-5.47,0-.01,0-.03,0-.05ZM10.89,6.56h1.1v-2.21h-1.1v2.21Z"
        />
        <path
          strokeWidth={0}
          fill="#fff"
          d="M6.44,4.35h-1.1v3.32h-2.23V3.23h4.45v4.44h-1.11v-3.32Z"
        />
        <path
          strokeWidth={0}
          fill="#cb3837"
          d="M10.89,6.56v-2.21h1.1v2.21h-1.1Z"
        />
      </svg>
    );
  },
);

export default NPM;
