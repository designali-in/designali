import * as React from "react";

import type { DesignaliProps } from "../../types";

export const LaurelWreathRight01 = React.forwardRef<
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
      <path d="M14.76,6.61c.21,1.64-1.1,3.17-1.1,3.17,0,0-1.66-1.14-1.88-2.78-.21-1.64,1.1-3.17,1.1-3.17,0,0,1.66,1.14,1.88,2.78Z" />
      <path d="M16.32,12.13c-.7,1.5-2.62,2.09-2.62,2.09,0,0-.8-1.85-.1-3.35.7-1.5,2.62-2.09,2.62-2.09,0,0,.8,1.85.1,3.35Z" />
      <path d="M15.5,17.41c-1.33.99-3.31.6-3.31.6,0,0,.18-2,1.5-3,1.33-.99,3.31-.6,3.31-.6,0,0-.18,2-1.5,3Z" />
      <path d="M11.89,21.71c-1.51.7-3.36-.1-3.36-.1,0,0,.59-1.93,2.09-2.62s3.36.1,3.36.1c0,0-.59,1.93-2.09,2.62Z" />
      <path d="M10.22,2.97c1.21,1.13,1.16,3.14,1.16,3.14,0,0-2.01.18-3.22-.96-1.21-1.13-1.16-3.14-1.16-3.14,0,0,2.01-.18,3.22.96Z" />
    </svg>
  );
});

export default LaurelWreathRight01;
