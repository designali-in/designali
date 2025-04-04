import * as React from "react";

import type { DesignaliProps } from "../../types";

export const MagicWand = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M18.01,6.46c-.06-.23-.24-.41-.47-.47l-2.03-.52c-.09-.02-.14-.12-.11-.2.02-.06.06-.1.11-.11l2.03-.52c.23-.06.41-.24.47-.47l.52-2.03c.02-.09.12-.14.2-.11.06.02.1.06.11.11l.52,2.03c.06.23.24.41.47.47l2.03.52c.09.02.14.12.12.2-.02.06-.06.1-.12.12l-2.03.52c-.23.06-.41.24-.47.47l-.52,2.03c-.02.09-.12.14-.2.11-.06-.02-.1-.06-.11-.11l-.52-2.03Z" />

        <path d="M6.87,7.04c-.04-.16-.17-.28-.32-.32l-1.38-.36c-.06-.02-.09-.08-.08-.14.01-.04.04-.07.08-.08l1.38-.36c.16-.04.28-.16.32-.32l.36-1.38c.02-.06.08-.09.14-.08.04.01.07.04.08.08l.36,1.38c.04.16.17.28.32.32l1.38.36c.06.02.1.08.08.14-.01.04-.04.07-.08.08l-1.38.36c-.16.04-.28.17-.32.32l-.36,1.38c-.02.06-.08.09-.14.08-.04-.01-.07-.04-.08-.08l-.36-1.38Z" />

        <path d="M6.87,7.04c-.04-.16-.17-.28-.32-.32l-1.38-.36c-.06-.02-.09-.08-.08-.14.01-.04.04-.07.08-.08l1.38-.36c.16-.04.28-.16.32-.32l.36-1.38c.02-.06.08-.09.14-.08.04.01.07.04.08.08l.36,1.38c.04.16.17.28.32.32l1.38.36c.06.02.1.08.08.14-.01.04-.04.07-.08.08l-1.38.36c-.16.04-.28.17-.32.32l-.36,1.38c-.02.06-.08.09-.14.08-.04-.01-.07-.04-.08-.08l-.36-1.38Z" />

        <path d="M16.79,18.29c-.04-.16-.17-.28-.32-.32l-1.38-.36c-.06-.02-.09-.08-.08-.14.01-.04.04-.07.08-.08l1.38-.36c.16-.04.28-.16.32-.32l.36-1.38c.02-.06.08-.09.14-.08.04.01.07.04.08.08l.36,1.38c.04.16.17.28.32.32l1.38.36c.06.02.1.08.08.14-.01.04-.04.07-.08.08l-1.38.36c-.16.04-.28.17-.32.32l-.36,1.38c-.02.06-.08.09-.14.08-.04-.01-.07-.04-.08-.08l-.36-1.38Z" />

        <path d="M10.82,10.97L2.46,19.34c-.61.61-.61,1.6,0,2.21.61.61,1.6.61,2.21,0l8.36-8.36M10.82,10.97l2.2,2.2M10.82,10.97l.83-.83M13.03,13.18l.83-.83M11.65,10.15l.05-.05c.43-.43,1.13-.43,1.56,0l.65.65c.43.43.43,1.13,0,1.56l-.05.05M11.65,10.15l2.2,2.2" />
      </svg>
    );
  },
);

export default MagicWand;
