import { forwardRef } from "react";

export const Logo = forwardRef<SVGSVGElement, React.SVGAttributes<SVGElement>>(
  (props, ref) => {
    return (
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width={32}
        height={32}
        viewBox="0 0 475.09 411.44"
        ref={ref}
        {...props}
      >
        <path
          fill="#f50537"
          d="M230.73,310c-17.14-3.2-30.12-18.23-30.12-36.3,0-20.4,16.54-36.94,36.94-36.94s36.94,16.54,36.94,36.94c0,18.07-12.98,33.1-30.12,36.3v101.45h230.73L237.55,0,0,411.44H230.73v-101.45Z"
        ></path>
      </svg>
    );
  },
);

Logo.displayName = "Logo";
