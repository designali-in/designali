import * as React from "react";

import type { DesignaliProps } from "../../types";

export const JoggerPants = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M18.16,5v-1c0-.94,0-1.41-.3-1.71-.3-.29-.78-.29-1.75-.29H7.89c-.97,0-1.45,0-1.75.29-.3.29-.3.76-.3,1.71v1M18.16,5l2.65,14.65c.2,1.09.3,1.63-.01,1.99-.31.36-.88.36-2.01.36h-1.17c-.73,0-1.1,0-1.37-.2-.27-.2-.38-.54-.59-1.22l-1.7-5.38c-.8-2.54-1.2-3.81-1.96-3.81s-1.16,1.27-1.96,3.81l-1.7,5.38c-.21.68-.32,1.02-.59,1.22-.27.2-.64.2-1.37.2h-1.17c-1.14,0-1.7,0-2.01-.36-.31-.36-.21-.9-.01-1.99l2.65-14.65M18.16,5H5.84" />

        <line x1="11.43" y1="5" x2="9.43" y2="7.78" />
        <line x1="11.43" y1="5" x2="14.57" y2="9.03" />
      </svg>
    );
  },
);

export default JoggerPants;
