import { Button } from "@designali/ui";
import { PlusIcon } from "@iconicicons/react";

export default function Example() {
  return (
    <Button after={<PlusIcon />} before={<PlusIcon />}>
      Button
    </Button>
  );
}
