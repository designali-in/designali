import * as React from "react";

import type { DesignaliProps } from "../../types";

export const BubbleChatQuestion = React.forwardRef<
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
      <path d="M8.21,19.9c4.65,2.39,10.36.55,12.75-4.1,2.39-4.65.55-10.36-4.1-12.75C12.2.66,6.49,2.5,4.1,7.15c-1.39,2.71-1.39,5.93,0,8.64l-2.1,6.21,6.21-2.1Z" />
      <path d="M9.63,8.82c.55-1.56,2.26-2.38,3.83-1.83,1.2.42,2.01,1.56,2,2.83,0,2-3,3-3,3" />
      <path d="M12.54,16.82h.01" />
    </svg>
  );
});

export default BubbleChatQuestion;
