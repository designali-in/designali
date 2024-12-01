import * as React from "react";

import type { DesignaliProps } from "../../types";

export const ArtificialIntelligence03 = React.forwardRef<
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
      <path d="M16,22v-.5c0-1.1.93-2,1.92-2.49.96-.48,1.77-1.26,1.87-2.18l.2-1.83,2-1-2.5-3.75c0-4.56-3.69-8.25-8.25-8.25-1.15,0-2.25.24-3.25.66M6.5,17v5M6.5,17c-1.36-.96-2.42-2.32-3-3.91M6.5,17c.75.53,1.59.94,2.5,1.19" />
      <path d="M2.75,3.25l3.25,2.25h4M3.5,3.25c0,.41-.34.75-.75.75s-.75-.34-.75-.75.34-.75.75-.75.75.34.75.75Z" />
      <path d="M2.75,8.75h7.25M3.5,8.75c0,.41-.34.75-.75.75s-.75-.34-.75-.75.34-.75.75-.75.75.34.75.75Z" />
    </svg>
  );
});

export default ArtificialIntelligence03;
