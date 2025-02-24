import { Badge } from "@designali/ui";
import { PlusIcon } from "@iconicicons/react";

export default function Example() {
  return (
    <Badge before={<PlusIcon />} after={<PlusIcon />}>
      Label
    </Badge>
  );
}
