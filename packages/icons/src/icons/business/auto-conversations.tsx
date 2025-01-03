import * as React from "react";

import type { DesignaliProps } from "../../types";

export const AutoConversations = React.forwardRef<
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
      <path d="M21.95,6.66l-8.63,8.63c-.19.2-.51.2-.71,0,0,0,0,0,0,0l-3.29-3.29c-.19-.19-.51-.19-.71,0l-6.63,6.63" />
      <path d="M21.99,12.14v-5.48s-5.46-.01-5.46-.01" />
      <line x1="4.19" y1="6.66" x2="10.57" y2="6.66" />
    </svg>
  );
});

export default AutoConversations;
