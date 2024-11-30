import * as React from "react";

import type { DesignaliProps } from "../../types";

export const KeyframeMultipleRemove = React.forwardRef<
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
      <path
        fill="none"
        d="M6.5,6.16c.67-.77,1.09-1.16,1.6-1.16.63,0,1.12.58,2.1,1.75l2.27,2.7c1.02,1.22,1.53,1.82,1.53,2.55s-.51,1.34-1.53,2.55l-2.27,2.7c-.98,1.16-1.47,1.75-2.1,1.75-.52,0-.93-.39-1.6-1.16"
      />
      <path
        fill="none"
        d="M13,19l3.51-4.4c.99-1.24,1.49-1.86,1.49-2.6s-.5-1.36-1.49-2.6l-3.51-4.4"
      />
      <path
        fill="none"
        d="M17,19l3.51-4.4c.99-1.24,1.49-1.86,1.49-2.6s-.5-1.36-1.49-2.6l-3.51-4.4"
      />
      <line x1="6.98" y1="12" x2="2" y2="12" />
    </svg>
  );
});

export default KeyframeMultipleRemove;
