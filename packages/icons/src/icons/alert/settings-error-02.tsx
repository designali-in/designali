import * as React from "react";

import type { DesignaliProps } from "../../types";

export const SettingError02 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
          d="M9.59,20.43c-.4.36-.8.8-.97.83-.17.02-.34-.08-.71-.29l-1.9-1.07c-.48-.24-.5-.42-.5-.48s0-.31.16-.84c.5-1.92-.67-3.96-2.66-4.48-.52-.14-.78-.21-.89-.35-.1-.13-.1-.35-.1-.78v-1.92c0-.43,0-.65.1-.78.1-.13.36-.2.89-.35,1.95-.53,3.17-2.51,2.67-4.45-.14-.53-.21-.8-.14-.96.07-.16.26-.26.64-.48l1.72-.98c.37-.21.56-.32.73-.29.17.02.36.21.73.59,1.46,1.46,3.87,1.46,5.33,0,.38-.38.57-.56.73-.59.17-.02.35.08.73.29l1.72.98c.38.22.57.32.64.48.07.16,0,.42-.14.96-.5,1.94.72,3.93,2.67,4.46.52.14.78.21.89.35.1.13.1.56.1,1"
        />
        <circle cx="17.73" cy="17.73" r="4.27" />
        <line x1="17.83" y1="15.93" x2="17.83" y2="17.01" />
        <circle cx="17.83" cy="19.62" r="0" />
        <path
          fill="none"
          d="M9.29,15.31c-.8-1.33-.85-3.05,0-4.48,1.24-2.05,3.9-2.71,5.96-1.47"
        />
      </svg>
    );
  },
);

export default SettingError02;
