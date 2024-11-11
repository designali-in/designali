import { promises as fs } from "fs";
import path from "path";

import { ICON_LIST } from "../../../../packages/icons/src/danimate";

const ICONS_DIRECTORY = "../../../designali/packages/icons/src/danimate";

interface Icon {
  name: string;
  content: string;
  keywords: string[];
}

const getIcons = async (): Promise<Icon[]> => {
  const iconsDir = path.join(process.cwd(), ICONS_DIRECTORY);

  const icons = await Promise.all(
    ICON_LIST.map(async ({ name, keywords }) => {
      const content = await fs.readFile(
        path.join(iconsDir, `${name}.tsx`),
        "utf-8",
      );

      return { name, content, keywords };
    }),
  );

  return icons;
};

export { getIcons };
export type { Icon };
