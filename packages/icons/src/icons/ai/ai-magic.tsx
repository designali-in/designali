import * as React from "react";

import type { DesignaliProps } from "../../types";

export const AiMagic = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M9.94,15.5c-.18-.7-.73-1.26-1.44-1.44l-6.14-1.58c-.27-.08-.42-.35-.34-.62.05-.17.18-.3.34-.34l6.14-1.58c.7-.18,1.25-.73,1.44-1.44l1.58-6.14c.07-.27.35-.42.62-.35.17.05.3.18.35.35l1.58,6.14c.18.7.73,1.26,1.44,1.44l6.14,1.58c.27.07.42.35.35.61-.05.17-.18.3-.35.35l-6.14,1.58c-.7.18-1.26.73-1.44,1.44l-1.58,6.14c-.07.27-.35.42-.62.35-.17-.05-.3-.18-.35-.35l-1.58-6.14Z" />
        <path d="M20,3v4" />
        <path d="M22,5h-4" />
        <path d="M4,17v2" />
        <path d="M5,18h-2" />
      </svg>
    );
  },
);

export default AiMagic;
