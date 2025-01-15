import * as React from "react";

import type { DesignaliProps } from "../../types";

export const TankTop = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <circle cx="12" cy="12" r="10" />
        <path d="M8,12h8" />
        <path d="M12,8v8" />
        <path d="M16.38,2c.23.73.36,1.54.36,2.38,0,3.42-2.13,6.18-4.76,6.18s-4.76-2.77-4.76-6.18c0-.84.13-1.65.36-2.38" />
        <path d="M17.22,17.22c1.84,0,3.33-1.49,3.33-3.33,0-1.21-.75-1.92-1.24-2.93-.95-1.94-.01-4.34.58-6.37.12-.41-.07-.84-.44-1.05l-2.46-1.41c-.16-.09-.34-.13-.52-.12-1.57.11-3.37.5-4.48,1.89-1.1-1.38-2.91-1.78-4.48-1.89-.18-.01-.36.03-.52.12l-2.46,1.41c-.37.21-.55.64-.44,1.05.59,2.03,1.52,4.43.58,6.37-.49,1.01-1.24,1.72-1.24,2.93,0,1.84,1.49,3.33,3.33,3.33" />
        <path d="M16.75,3.9c-1.64.43-2.85,1.93-2.85,3.72,0,.73.2,1.41.55,1.99M7.23,3.9c1.64.43,2.85,1.93,2.85,3.72,0,.73-.2,1.41-.55,1.99" />
        <path d="M10.1,16.96c.39-.16,1.09-.4,1.98-.38.81.01,1.45.22,1.83.38" />
        <line x1="5.83" y1="17.22" x2="5.83" y2="21.98" />

        <line x1="18.06" y1="17.22" x2="18.06" y2="21.98" />
      </svg>
    );
  },
);

export default TankTop;
