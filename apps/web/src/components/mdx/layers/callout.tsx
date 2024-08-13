import { cn } from "@designali/ui";

interface CalloutProps {
  icon?: string;
  children?: React.ReactNode;
  type?: "default" | "warning" | "danger";
}

export default function Callout({
  children,
  icon,
  type = "default",
  ...props
}: CalloutProps) {
  return (
    <div
      className={cn(
        "my-6 flex items-start rounded-2xl border border-l-4 border-slate-400 bg-slate-100 p-4 dark:border-slate-600 dark:bg-slate-900",
        {
          "border-slate-100 bg-slate-100 dark:border-slate-900 dark:bg-slate-900":
            type === "danger",
          "border-aired bg-aired": type === "warning",
        },
      )}
      {...props}
    >
      {icon && <span className="mr-4 text-2xl">{icon}</span>}
      <div>{children}</div>
    </div>
  );
}
