import { ButtonGroup } from "@designali/ui";
import { PlusIcon } from "@iconicicons/react";

export default function Example() {
  return (
    <ButtonGroup>
      <ButtonGroup.Item after={<PlusIcon />} before={<PlusIcon />}>
        Button
      </ButtonGroup.Item>

      <ButtonGroup.Item after={<PlusIcon />} before={<PlusIcon />}>
        Button
      </ButtonGroup.Item>

      <ButtonGroup.Item after={<PlusIcon />} before={<PlusIcon />}>
        Button
      </ButtonGroup.Item>
    </ButtonGroup>
  );
}
