import * as React from "react";

import type { DesignaliProps } from "../../types";

export const HonourStar = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path  d="M2.5,3h19"/>
  <path  d="M4.5,3v11c0,2.33.43,3.09,2.43,4.29l3.01,1.81c1,.6,1.5.9,2.06.9s1.06-.3,2.06-.9l3.01-1.81c2-1.2,2.43-1.96,2.43-4.29V3"/>
  <path  d="M12.6,8l.62,1.24c.08.17.31.34.5.37l1.12.19c.71.12.88.64.37,1.16l-.87.88c-.15.15-.23.43-.18.64l.25,1.08c.2.86-.26,1.19-1.01.74l-1.05-.62c-.19-.11-.5-.11-.69,0l-1.05.62c-.75.45-1.2.11-1.01-.74l.25-1.08c.05-.2-.03-.49-.18-.64l-.87-.88c-.51-.52-.35-1.04.37-1.16l1.12-.19c.19-.03.41-.2.49-.37l.62-1.24c.34-.67.88-.67,1.21,0Z"/>
</svg>
    );
  },
);

export default HonourStar;
