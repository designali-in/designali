import type { Icon } from "@/actions/get-icons";
import { useMemo } from "react";
import Fuse from "fuse.js";
import { useQueryState } from "nuqs";

const useSearch = (items: Icon[]) => {
  const [query] = useQueryState("q");

  const fuse = useMemo(
    () =>
      new Fuse(items, {
        keys: [
          { name: "name", weight: 3 },
          { name: "keywords", weight: 2 },
        ],
        threshold: 0.3,
        ignoreLocation: true,
        findAllMatches: true,
        isCaseSensitive: false,
      }),
    [items],
  );

  const results = useMemo(() => {
    if (!query) return items;
    return fuse.search(query).map((result) => result.item);
  }, [fuse, query, items]);

  return { results };
};

export { useSearch };
