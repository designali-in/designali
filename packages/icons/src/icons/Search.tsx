import * as React from "react";

import { DesignaliProps } from "../types";

export const Search = React.forwardRef<SVGSVGElement, DesignaliProps>(
  ({ color = "currentColor", ...props }, forwardedRef) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        {...props}
        ref={forwardedRef}
      >
        <path d="M11,3c2.21,0,4.21.9,5.66,2.34s2.34,3.45,2.34,5.66-.9,4.21-2.34,5.66-3.45,2.34-5.66,2.34-4.21-.9-5.66-2.34-2.34-3.45-2.34-5.66.9-4.21,2.34-5.66,3.45-2.34,5.66-2.34Z" />
        <path d="M21,21l-2.15-2.15-2.15-2.15" />{" "}
      </svg>
    );
  },
);

export default Search;
