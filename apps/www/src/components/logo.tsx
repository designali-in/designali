"use client";

import { useParams } from "next/navigation";
import { type ReactNode  } from "react";
import { cn } from "@/src/lib/utils";

export function Body({
  children,
}: {
  children: ReactNode;
}): React.ReactElement {
  const mode = useMode();

  return (
    <body className={cn(mode, "relative flex min-h-screen flex-col")}>
      {children}
    </body>
  );
}

export function useMode(): string | undefined {
  const { slug } = useParams();
  return Array.isArray(slug) && slug.length > 0 ? slug[0] : undefined;
}

export function DesignaliIcon(props: React.SVGProps<SVGSVGElement>) {
   
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fab"
      data-icon="heart"
      color="#f50537"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        strokeWidth={0}
        fill="currentColor"
        d="M2.8,1.43h7.53c3.47,0,6.15.92,8.04,2.75,1.89,1.84,2.83,4.45,2.83,7.85s-.92,5.98-2.77,7.8c-1.85,1.83-4.49,2.74-7.92,2.74H2.8V1.43Z"
      ></path>
    </svg>
  );
}
