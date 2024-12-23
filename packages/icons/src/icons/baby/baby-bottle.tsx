import * as React from "react";

import type { DesignaliProps } from "../../types";

export const BabyBottle = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path  d="M17,10.5s1,2.5,1,5.75c0,1.17-.13,2.24-.3,3.14-.21,1.12-.31,1.69-.87,2.15-.56.46-1.22.46-2.54.46h-4.58c-1.32,0-1.99,0-2.54-.46-.56-.46-.66-1.02-.87-2.15-.17-.89-.3-1.97-.3-3.14,0-3.25,1-5.75,1-5.75"/>
  <path  d="M7,10.51h10c.15-.82-.08-2.39-2.04-3.01-.47-.15-1.01-.42-1.26-.89-.22-.41-.32-.97,0-1.59.6-1.14.02-2.54-1.23-2.94-.16-.05-.32-.09-.48-.09-.17,0-.35.03-.52.09-1.25.39-1.83,1.8-1.23,2.94.33.62.22,1.18,0,1.59-.24.45-.76.85-1.24,1-1.35.43-2.29,1.45-2.02,2.9Z"/>
  <path  d="M15,14h2.5M15,18h2.5"/>
</svg>
    );
  },
);

export default BabyBottle;
