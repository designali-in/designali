import * as React from "react";

import type { DesignaliProps } from "../../types";

export const BitcoinBag = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
         <path  d="M17.22,14.82c-.38-2.31-1.58-4.02-2.61-5.03-.3-.29-.45-.44-.79-.58-.33-.14-.62-.14-1.19-.14h-1.26c-.57,0-.86,0-1.19.14-.33.14-.48.28-.79.58-1.04,1.01-2.23,2.73-2.61,5.03-.29,1.72,1.3,3.02,3.07,3.02h4.31c1.77,0,3.35-1.3,3.07-3.02Z"/>
  <path  d="M10.91,15.21v-3.5M12,11.71v-.88M12,16.09v-.88M10.91,13.46h2.19M13.09,13.46c.36,0,.66.29.66.66v.44c0,.36-.29.66-.66.66h-2.85M13.09,13.46c.36,0,.66-.29.66-.66v-.44c0-.36-.29-.66-.66-.66h-2.85"/>
  <path  d="M9.23,7.59c-.12-.18-.3-.41.07-.47.37-.06.76.2,1.13.19.34,0,.51-.16.7-.37.2-.23.5-.78.87-.78s.67.55.87.78c.19.22.36.37.7.37.38,0,.76-.25,1.13-.19.36.05.19.29.07.47l-.54.79c-.23.34-.35.51-.59.6-.24.1-.56.1-1.19.1h-.89c-.63,0-.95,0-1.19-.1-.24-.1-.36-.27-.59-.6l-.54-.79Z"/>
</svg>
    );
  },
);

export default BitcoinBag;
