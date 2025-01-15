import * as React from "react";

import type { DesignaliProps } from "../../types";

export const ShortsPants = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M10.99,15.12l-.73,5.1c-.23,1.63-.62,1.92-2.26,1.72l-4.21-.52c-1.59-.2-1.89-.56-1.77-2.16l.74-9.54c.06-.74.09-1.11.16-1.47.18-.91.69-1.72.9-2.62.12-.52.08-1.08.08-1.62,0-1.67.35-2.02,2.02-2.02h12.15c1.67,0,2.02.35,2.02,2.02,0,.54-.04,1.09.08,1.62.21.9.72,1.7.9,2.62.72,3.55.62,7.4.89,11.01.12,1.59-.18,1.96-1.77,2.16l-4.21.52c-1.63.2-2.02-.09-2.26-1.72l-.73-5.1" />
        <path d="M9,13.5c.76.76,1.2,1.5,2.33,1.5h1.34c1.13,0,1.57-.74,2.33-1.5" />
        <line x1="3.9" y1="5" x2="20.1" y2="5" />
        <path d="M6.69,5c.07.2,1.04,3.08-.8,5.39-1.2,1.51-2.87,1.86-3.35,1.95" />
        <path d="M17.45,5c-.07.2-1.04,3.08.8,5.39,1.2,1.51,2.87,1.86,3.35,1.95" />
      </svg>
    );
  },
);

export default ShortsPants;
