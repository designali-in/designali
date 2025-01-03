import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Briefcase06 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M19.43,3.93c.53,0,.8,0,1.02.05.75.18,1.33.8,1.5,1.58.05.23.05.51.05,1.07,0,1.4,0,2.1-.13,2.67-.43,1.97-1.89,3.51-3.76,3.96-.55.13-1.21.13-2.54.13h-7.14c-1.33,0-1.99,0-2.54-.13-1.87-.45-3.33-1.99-3.76-3.96-.13-.58-.13-1.28-.13-2.67,0-.56,0-.84.05-1.07.17-.79.76-1.4,1.5-1.58.22-.05.49-.05,1.02-.05M9,3.93h6" />
        <path d="M22,8.67v8.61c0,2.61-1.7,4.73-3.79,4.73H5.79c-2.09,0-3.79-2.12-3.79-4.73v-8.61" />
        <rect x="4.45" y="2" width="4.55" height="3.66" rx="1.03" ry="1.03" />
        <rect x="15" y="2" width="4.55" height="3.66" rx="1.03" ry="1.03" />
        <line x1="6.04" y1="18.62" x2="10.51" y2="18.62" />
      </svg>
    );
  },
);

export default Briefcase06;
