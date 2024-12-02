import * as React from "react";

import type { DesignaliProps } from "../../types";

export const ArtificialIntelligence05 = React.forwardRef<
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
      <path d="M12.22,2h-.44c-1.1,0-2,.9-2,2v.18c0,.71-.38,1.37-1,1.73l-.43.25c-.62.36-1.38.36-2,0l-.15-.08c-.96-.55-2.18-.22-2.73.73l-.22.38c-.55.96-.22,2.18.73,2.73l.15.1c.62.36,1,1.01,1,1.72v.51c0,.72-.38,1.38-1,1.74l-.15.09c-.95.55-1.28,1.77-.73,2.73l.22.38c.55.95,1.77,1.28,2.73.73l.15-.08c.62-.36,1.38-.36,2,0l.43.25c.62.36,1,1.02,1,1.73v.18c0,1.1.9,2,2,2h.44c1.1,0,2-.9,2-2v-.18c0-.71.38-1.37,1-1.73l.43-.25c.62-.36,1.38-.36,2,0l.15.08c.96.55,2.18.22,2.73-.73l.22-.39c.55-.96.22-2.18-.73-2.73l-.15-.08c-.62-.36-1-1.02-1-1.74v-.5c0-.72.38-1.38,1-1.74l.15-.09c.95-.55,1.28-1.77.73-2.73l-.22-.38c-.55-.95-1.77-1.28-2.73-.73l-.15.08c-.62.36-1.38.36-2,0l-.43-.25c-.62-.36-1-1.02-1-1.73v-.18c0-1.1-.9-2-2-2Z" />

      <path d="M12.58,14.5l-1.46-4.52c-.09-.28-.37-.48-.69-.48s-.6.19-.69.48l-1.46,4.52M15.27,9.5v5M8.81,13h3.23" />
    </svg>
  );
});

export default ArtificialIntelligence05;
