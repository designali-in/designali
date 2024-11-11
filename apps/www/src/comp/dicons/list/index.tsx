"use client";

import type { Icon } from "@/actions/get-icons";

import { Card, CardTitle } from "@/components/ui/card";

import { ICON_LIST } from "../../../../../../packages/icons/src/index";
import { useSearch } from "./use-search";

interface Props {
  icons: Icon[];
}

const IconsList = ({ icons }: Props) => {
  const { results } = useSearch(icons);

  return (
    <div className="my-10 flex flex-col gap-6 sm:my-20">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-[repeat(auto-fill,minmax(165px,1fr))]">
        {results.map((icon) => {
          const IconComponent = ICON_LIST.find(
            ({ name }) => name === icon.name,
          ).icon;

          return (
            <Card key={icon.name}>
              <IconComponent />
              <CardTitle>{icon.name}</CardTitle>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export { IconsList };
