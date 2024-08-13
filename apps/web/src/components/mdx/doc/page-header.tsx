import { cn } from "@designali/ui";
import { Separator } from "@designali/ui/separator";

interface DocsPageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  heading: string;
  text?: string;
}

export function DocsPageHeader({
  heading,
  text,
  className,
  ...props
}: DocsPageHeaderProps) {
  return (
    <>
      <div className={cn("space-y-4", className)} {...props}>
        <h1 className="inline-block text-4xl font-bold lg:text-5xl">
          {heading}
        </h1>
        {text && (
          <p className="text-xl text-slate-600 dark:text-slate-400">{text}</p>
        )}
      </div>
      <Separator className="my-8" />
    </>
  );
}
