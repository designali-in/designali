import { Slider } from "@designali/ui";
import { MinusIcon, PlusIcon } from "@iconicicons/react";

export default function Example() {
  return (
    <div className="text-surface-300 inline-flex w-full min-w-80 max-w-[400px] flex-col gap-y-12">
      <Slider
        after={
          <PlusIcon className="text-surface-300 size-6 dark:text-gray-500" />
        }
        before={
          <MinusIcon className="text-surface-300 size-6 dark:text-gray-500" />
        }
        content="A tooltip is a small box that appears when hovering over a UI element, providing additional information."
        defaultValue={[50]}
        description="(description)"
        helperText="Helper text"
        label="Label"
      />
    </div>
  );
}
