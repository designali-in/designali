import { Sun } from "dicons";
import { FileIcon } from "lucide-react";

interface Icon {
  extensions?: string[];
  filenames?: string[];
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

const icons: Icon[] = [
  {
    extensions: ["js", "mjs", "cjs"],
    icon: Sun,
  },
  {
    extensions: ["ts", "mts", "cts"],
    icon: Sun,
  },
  {
    extensions: ["jsx", "tsx"],
    icon: Sun,
  },
  {
    extensions: ["sh", "bash", "zsh"],
    icon: Sun,
  },
  {
    extensions: ["md"],
    icon: Sun,
  },
  {
    extensions: ["mdx"],
    icon: Sun,
  },
  {
    filenames: ["package.json"],
    icon: Sun,
  },
];

const filenameToIcon = new Map<
  string,
  React.FC<React.SVGProps<SVGSVGElement>>
>();
const extensionToIcon = new Map<
  string,
  React.FC<React.SVGProps<SVGSVGElement>>
>();

for (const icon of icons) {
  if (icon.filenames) {
    for (const filename of icon.filenames) {
      filenameToIcon.set(filename, icon.icon);
    }
  }
  if (icon.extensions) {
    for (const extension of icon.extensions) {
      extensionToIcon.set(extension, icon.icon);
    }
  }
}

export const getIconByFilename = (
  filename: string,
): React.FC<React.SVGProps<SVGSVGElement>> => {
  if (filenameToIcon.has(filename)) {
    return filenameToIcon.get(filename);
  }

  const extension = filename.split(".").pop();

  if (extension && extensionToIcon.has(extension)) {
    return extensionToIcon.get(extension);
  }

  return FileIcon;
};
