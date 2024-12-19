import * as React from "react";

import type { DesignaliProps } from "../../types";

export const MedalSecondPlace = React.forwardRef<SVGSVGElement, DesignaliProps>(
  ({  ...props }, forwardedRef) => {
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
        <path  d="M10.5,14l.53-.57c.62-.63,1.65-.56,2.18.16.41.56.38,1.33-.08,1.85l-2.63,2.57h2.93"/>
  <circle  cx="12" cy="15.5" r="6.5"/>
  <path  d="M9,9.5l-3.5-7.5"/>
  <path  d="M15,9.5l3.5-7.5"/>
  <path  d="M15,2l-1,2.5"/>
  <path  d="M12.5,9l-3-7"/>
</svg>
    );
  },
);

export default MedalSecondPlace;
