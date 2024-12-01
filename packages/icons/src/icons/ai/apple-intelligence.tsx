import * as React from "react";

import type { DesignaliProps } from "../../types";

export const AppleIntelligence = React.forwardRef<
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
      <path d="M17.67,16.51l3.27-1.05c1.18-.38,1.48-1.88.53-2.67l-2.56-2.11M17.67,16.51l-1.84.59c-.81.26-1.58.64-2.28,1.13l-1.42.99M17.67,16.51l.07-1.58c.04-.88.21-1.74.53-2.57l.64-1.69M17.67,16.51l-.14,3.3c-.05,1.19-1.4,1.89-2.43,1.25l-2.98-1.84M12.13,19.22l-2.83,1.99c-.99.69-2.37.08-2.5-1.11l-.35-3.33M12.13,19.22l-1.65-1.02c-.73-.45-1.52-.78-2.34-1l-1.69-.44M6.45,16.77l-3.3-.85c-1.2-.31-1.59-1.79-.69-2.63l2.45-2.28M6.45,16.77l-.33-3.1-1.21-2.67M4.91,11.01l-1.35-2.98c-.5-1.1.42-2.32,1.64-2.18l3.48.42M4.91,11.01l1.37-1.28c.64-.59,1.18-1.28,1.6-2.04l.79-1.42M8.68,6.27l1.64-2.96c.58-1.04,2.09-1.09,2.73-.08l1.85,2.89M8.68,6.27l1.97.24c.84.1,1.7.08,2.53-.07l1.73-.31M14.9,6.12l3.41-.61c1.21-.22,2.2.94,1.77,2.08l-1.18,3.09M14.9,6.12l1,1.56c.47.73,1.04,1.38,1.72,1.93l1.29,1.06" />
    </svg>
  );
});

export default AppleIntelligence;
