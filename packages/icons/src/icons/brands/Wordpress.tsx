import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Wordpress = React.forwardRef<SVGSVGElement, DesignaliProps>(
  ({ ...props }, forwardedRef) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        {...props}
        ref={forwardedRef}
      >
        <path
          strokeWidth={0}
          fill="#21759c"
          d="M2,11.8c0-.05.02-.11.02-.16.08-2.13.77-4.05,2.07-5.74,1.34-1.74,3.08-2.91,5.19-3.52.57-.17,1.16-.27,1.75-.33.53-.05,1.05-.07,1.58-.03,2.19.15,4.13.92,5.81,2.33,1.35,1.13,2.33,2.52,2.95,4.16.26.7.45,1.42.54,2.16.05.46.1.91.09,1.37-.02,2.33-.76,4.43-2.23,6.24-1.4,1.72-3.18,2.86-5.33,3.41-.48.12-.96.2-1.46.25-.53.05-1.06.07-1.59.03-1.91-.13-3.66-.74-5.22-1.87-1.74-1.26-2.96-2.91-3.65-4.95-.21-.63-.36-1.27-.44-1.92-.04-.3-.04-.6-.07-.89,0-.05-.01-.1-.02-.15,0-.13,0-.26,0-.39ZM12,21.56c5.27,0,9.56-4.27,9.57-9.55,0-5.28-4.27-9.57-9.56-9.57-5.28,0-9.56,4.28-9.56,9.56,0,5.28,4.27,9.55,9.55,9.57Z"
        />
        <path
          strokeWidth={0}
          fill="#21759c"
          d="M16.29,17.16c-1.03-3.07-2.06-6.11-3.08-9.17.2-.02.39-.03.58-.05.14-.01.28-.02.42-.04.2-.03.32-.21.3-.42-.03-.19-.19-.32-.39-.31-.22.02-.44.04-.66.05-.62.02-1.24.06-1.86.06-.48,0-.96-.04-1.44-.07-.19-.01-.39-.03-.58-.04-.2,0-.36.14-.37.34-.02.23.11.38.33.4.28.02.56.05.83.08.03,0,.07.05.08.09.23.62.46,1.24.68,1.87.19.53.39,1.07.58,1.6.02.06.02.13,0,.19-.6,1.82-1.21,3.64-1.82,5.46,0,0,0,.01-.02.04-1.04-3.09-2.07-6.16-3.11-9.24.21-.02.4-.03.59-.05.14-.01.27-.02.41-.04.19-.03.32-.22.29-.4-.03-.21-.2-.34-.4-.33-.36.03-.72.06-1.08.07-.51.02-1.02.03-1.53.04-.05,0-.11,0-.17-.02,1.34-1.96,3.16-3.23,5.5-3.67,2.77-.52,5.22.2,7.36,2.02,0,0,0,.02,0,.03-.13.02-.26.03-.38.06-.57.14-1.01.66-1.09,1.24-.06.42.03.82.21,1.19.16.32.34.63.53.93.3.5.56,1.02.69,1.6.15.66.13,1.33-.06,1.98-.23.81-.48,1.62-.72,2.43-.2.66-.4,1.33-.6,1.99,0,.03-.02.05-.03.1Z"
        />
        <path
          strokeWidth={0}
          fill="#21759c"
          d="M14.83,20.1c-.22.07-.44.14-.66.2-.8.21-1.61.3-2.43.27-.69-.02-1.38-.13-2.05-.32-.09-.03-.08-.07-.06-.13.33-.97.67-1.93,1-2.9.5-1.45,1-2.9,1.5-4.35,0-.02.01-.04.03-.08.89,2.44,1.78,4.86,2.67,7.31Z"
        />
        <path
          strokeWidth={0}
          fill="#21759c"
          d="M4.17,8.57c1.35,3.7,2.7,7.4,4.05,11.11,0,0-.02.01-.02.02-1.9-.98-3.3-2.43-4.12-4.41-.92-2.24-.87-4.48.06-6.71.01,0,.02,0,.03,0Z"
        />
        <path
          strokeWidth={0}
          fill="#21759c"
          d="M19.56,7.96c2.07,3.76.96,8.97-3.2,11.41,0-.03.01-.06.02-.09.85-2.47,1.7-4.94,2.56-7.4.19-.54.39-1.08.51-1.64.14-.66.19-1.32.14-1.99,0-.1-.02-.2-.03-.3Z"
        />
      </svg>
    );
  },
);

export default Wordpress;
