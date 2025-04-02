import { ComponentProps } from "react";

export type FlexAlignItems = "stretch" | "start" | "end" | "center";
export type FlexJustifyContent =
  | "stretch"
  | "start"
  | "end"
  | "space-between"
  | "space-around"
  | "space-evenly"
  | "center";

interface StackProps extends ComponentProps<"div"> {
  children: React.ReactNode;
  direction?: "column" | "row";
  align?: FlexAlignItems;
  justify?: FlexJustifyContent;
  gap?: number;
  padding?: number;
  grow?: boolean;
  shrink?: boolean;
  wrap?: boolean;
  className?: string;
}

export function Stack(props: StackProps) {
  const {
    children,
    shrink = false,
    grow = false,
    justify = "start",
    align = "start",
    wrap = false,
    padding = 0,
    gap = 0,
    direction = "column",
    className,
    ...etc
  } = props;

  return (
    <div
      className={className}
      style={{
        display: "flex",
        flex: "initial",
        flexDirection: direction,
        alignItems:
          align === "start"
            ? "flex-start"
            : align === "end"
              ? "flex-end"
              : align,
        justifyContent:
          justify === "start"
            ? "flex-start"
            : justify === "end"
              ? "flex-end"
              : justify,
        flexWrap: wrap ? "wrap" : "nowrap",
        flexGrow: grow ? 1 : 0,
        flexShrink: shrink ? 1 : 0,
        padding: padding * 4 + "px",
        gap: gap * 4 + "px",
      }}
      {...etc}
    >
      {children}
    </div>
  );
}
