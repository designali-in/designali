import * as React from "react";

import type { DesignaliProps } from "../../types";

export const BubbleChatBlocked = React.forwardRef<
  SVGSVGElement,
  DesignaliProps
>(({ ...props }, forwardedRef) => {
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
      <path d="M2,2l20,20" />
      <path
        fill="none"
        d="M20.51,15.6c2.27-4.42.52-9.85-3.9-12.12-2.74-1.4-5.86-1.27-8.38.08"
      />
      <path
        fill="none"
        d="M3.97,8.64c-.76,2.28-.59,4.79.53,6.97l-2,5.9,5.9-2c2.15,1.1,4.54,1.26,6.69.62"
      />
    </svg>
  );
});

export default BubbleChatBlocked;
