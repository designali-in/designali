import * as React from "react";

import type { DesignaliProps } from "../../types";

export const BabyGirlDress = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path  d="M8.21,9l-3.93,7.48c-1.82,3.46,5.8,4.52,7.72,4.52s9.54-1.06,7.72-4.52l-3.93-7.48"/>
  <path  d="M10.13,12.22c.67-.37,1.26-.22,1.61.02.14.1.22.14.26.14s.11-.05.26-.14c.35-.23.94-.38,1.61-.02.88.48,1.08,2.06-.95,3.4-.39.25-.58.38-.92.38s-.53-.13-.92-.38c-2.03-1.34-1.83-2.92-.95-3.4Z"/>
  <path  d="M7,10.81c-2,.98-5.53-2.18-4.93-2.94l3.5-4.48c.19-.24.5-.39.83-.39h2.1c.25,0,.46.16.53.38.38,1.07,1.72,2.35,2.96,2.35,1.24,0,2.58-1.28,2.96-2.35.08-.21.28-.38.53-.38h2.1c.33,0,.64.15.83.39l3.5,4.48c.59.76-2.93,3.92-4.93,2.94"/>
</svg>
    );
  },
);

export default BabyGirlDress;
