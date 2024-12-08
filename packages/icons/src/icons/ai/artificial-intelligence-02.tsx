import * as React from "react";

import type { DesignaliProps } from "../../types";

export const ArtificialIntelligence02 = React.forwardRef<
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
      <path
        fill="none"
        d="M16,22v-.5c0-1.1.93-2,1.92-2.49.96-.48,1.77-1.26,1.87-2.18l.2-1.83,2-1-2.5-3.75c0-4.3-3.3-7.84-7.5-8.22M6.5,17v5M6.5,17c-1.03-.73-1.89-1.69-2.5-2.81M6.5,17c.75.53,1.59.94,2.5,1.19"
      />
      <path d="M7.4,3.8h-1.8c-.85,0-1.27,0-1.54.26-.26.26-.26.69-.26,1.54v1.8c0,.85,0,1.27.26,1.54.26.26.69.26,1.54.26h1.8c.85,0,1.27,0,1.54-.26.26-.26.26-.69.26-1.54v-1.8c0-.85,0-1.27-.26-1.54-.26-.26-.69-.26-1.54-.26Z" />
      <path d="M5.15,9.2v1.8M7.85,9.2v1.8M5.15,2v1.8M7.85,2v1.8M3.8,5.15h-1.8M3.8,7.85h-1.8M11,5.15h-1.8M11,7.85h-1.8" />
    </svg>
  );
});

export default ArtificialIntelligence02;
