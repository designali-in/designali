import * as React from "react";

import { DesignaliProps } from "../../types";

export const TableCellsSplit = React.forwardRef<SVGSVGElement, DesignaliProps>(
  ({ color = "currentColor", ...props }, forwardedRef) => {
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
      >
        <path d="M12 15V9" />
        <path d="M3 15h18" />
        <path d="M3 9h18" />
        <rect width="18" height="18" x="3" y="3" rx="2" />
      </svg>
    );
  },
);

export default TableCellsSplit;
