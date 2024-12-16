import * as React from "react";

import type { DesignaliProps } from "../../types";

export const CarAlert = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path
          fill="none"
          d="M4.98,13.23l-.58.86c-.58.88-.88,1.32-1.03,1.81-.15.5-.15,1.02-.15,2.08v2.7c0,.41,0,.61.07.77.09.21.26.39.47.47.16.07.37.07.77.07s.61,0,.77-.07c.21-.09.39-.26.47-.47.07-.16.07-.37.07-.77s0-.61.07-.77c.09-.21.26-.39.47-.47.16-.07.37-.07.77-.07h9.65c.41,0,.61,0,.77.07.21.09.39.26.47.47.07.16.07.37.07.77s0,.61.07.77c.09.21.26.39.47.47.16.07.37.07.77.07s.61,0,.77-.07c.21-.09.39-.26.47-.47.07-.16.07-.37.07-.77v-2.7c0-1.05,0-1.58-.15-2.08-.15-.5-.44-.94-1.03-1.81l-.58-.86-1.34.33c-.21.05-.31.08-.42.09-.11.01-.21.01-.43.01H7.17c-.22,0-.32,0-.43-.01-.11-.01-.21-.04-.42-.09l-1.34-.33ZM4.98,13.23l.84-2.02c.65-1.57.98-2.35,1.64-2.8.66-.44,1.51-.44,3.21-.44M4.98,13.23l-1.75-1.32"
        />
        <path d="M17.26,16.97h0" />
        <path d="M6.74,16.97h0" />
        <circle cx="17.73" cy="6.27" r="4.27" />
        <line x1="17.83" y1="4.46" x2="17.83" y2="5.55" />
        <circle cx="17.83" cy="8.16" r="0" />
      </svg>
    );
  },
);

export default CarAlert;
