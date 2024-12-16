import * as React from "react";

import type { DesignaliProps } from "../../types";

export const SettingError01 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <circle cx="17.73" cy="17.73" r="4.27" />
        <line x1="17.83" y1="15.93" x2="17.83" y2="17.01" />
        <circle cx="17.83" cy="19.62" r="0" />
        <path
          fill="none"
          d="M9.29,15.31c-.8-1.33-.85-3.05,0-4.48,1.24-2.05,3.9-2.71,5.96-1.47"
        />
        <path
          fill="none"
          d="M19.87,10.01l.15-.09c.95-.55,1.28-1.77.73-2.73l-.22-.38c-.55-.95-1.77-1.28-2.73-.73l-.15.08c-.62.36-1.38.36-2,0l-.43-.25c-.62-.36-1-1.02-1-1.73v-.18c0-1.1-.9-2-2-2h-.44c-1.1,0-2,.9-2,2v.18c0,.71-.38,1.37-1,1.73l-.43.25c-.62.36-1.38.36-2,0l-.15-.08c-.96-.55-2.18-.22-2.73.73l-.22.38c-.55.96-.22,2.18.73,2.73l.15.1c.62.36,1,1.01,1,1.72v.51c0,.72-.38,1.38-1,1.74l-.15.09c-.95.55-1.28,1.77-.73,2.73l.22.38c.55.95,1.77,1.28,2.73.73l.15-.08c.62-.36,1.38-.36,2,0l.43.25c.62.36,1,1.02,1,1.73v.18c0,1.1.9,2,2,2"
        />
      </svg>
    );
  },
);

export default SettingError01;
