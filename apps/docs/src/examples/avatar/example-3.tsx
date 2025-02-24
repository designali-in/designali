import { Avatar, Tooltip } from "@designali/ui";

export default function Example() {
  return (
    <div className="flex items-center justify-center gap-6">
      <Tooltip content="Max Quest" sideOffset={8}>
        <Avatar.Root className="outline-wg-red h-16 w-16 justify-center rounded-full outline outline-offset-2">
          <Avatar.Image
            className="rounded-full"
            src="https://images.unsplash.com/photo-1560800452-f2d475982b96?auto=format&fit=crop&w=250&h=250"
          />
          <Avatar.Fallback className="rounded-full" />
          <span className="absolute flex h-10 w-10 items-center justify-center rounded-full bg-neutral-700/50 text-white backdrop-blur-sm">
            MQ
          </span>
          <Avatar.Status className="bg-wg-red left-1" />
        </Avatar.Root>
      </Tooltip>
    </div>
  );
}
