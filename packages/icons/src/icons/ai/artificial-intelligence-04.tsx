import * as React from "react";

import type { DesignaliProps } from "../../types";

export const ArtificialIntelligence04 = React.forwardRef<
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
      <path d="M8,2v2M16,2v2M12,2v2M8,20v2M12,20v2M16,20v2M22,16h-2M4,8h-2M4,16h-2M4,12h-2M22,8h-2M22,12h-2" />
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <path d="M12.58,14.5l-1.46-4.52c-.09-.28-.37-.48-.69-.48s-.6.19-.69.48l-1.46,4.52M15.27,9.5v5M8.81,13h3.23" />
    </svg>
  );
});

export default ArtificialIntelligence04;
