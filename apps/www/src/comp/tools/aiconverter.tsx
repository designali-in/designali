"use client";

import React from "react";
import { Icons } from "@/comp/icons";
import { base64ToSvg } from "@/lib/img/base64-to-svg";
import { getExtension } from "@/lib/img/get-extension";
import { imageToBase64 } from "@/lib/img/image-to-base64";
import { svgToBase64 } from "@/lib/img/svg-to-base64";
import { truncateFilename } from "@/lib/img/truncate-filename";
import { Button } from "@designali/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@designali/ui/select";
import { toast } from "@designali/ui/toast";
import FileSaver from "file-saver";
import { filesize } from "filesize";
import { XIcon } from "lucide-react";
import { useDropzone } from "react-dropzone";
import { v4 as uuid } from "uuid";

interface ImageFile {
  file: File;
  id: string;
  name: string;
  extension: string;
  size: string;
  to?: Option;
  result?: string;
}

type Option = (typeof options)[number]["value"];

const options = [
  { value: "jpg", label: "JPG" },
  { value: "jpeg", label: "JPEG" },
  { value: "png", label: "PNG" },
  { value: "gif", label: "GIF" },
  { value: "webp", label: "WEBP" },
  { value: "svg", label: "SVG" },
  { value: "ico", label: "ICO" },
] as const;

const download = async (result: string, filename: string, to: string) => {
  const blob = await (await fetch(result)).blob();
  FileSaver.saveAs(blob, `${filename.replace(/\.[^./]+$/, "")}.${to}`);
};

const AIConverter = () => {
  const [files, setFiles] = React.useState<ImageFile[]>([]);

  const onDrop = React.useCallback((newFiles: File[]) => {
    for (const file of newFiles) {
      const name = truncateFilename(file.name);
      const newFile: ImageFile = {
        file,
        id: uuid(),
        name,
        size: filesize(file.size, {
          base: 2,
          standard: "jedec",
        }).toString(),
        extension: getExtension(file.name).toUpperCase(),
      };

      setFiles((prev) => [...prev, newFile]);
    }
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/png": options.map((option) => `.${option.value}`),
    },
    onDropRejected: (newFiles) => {
      for (const file of newFiles) {
        toast.error(`${getExtension(file.file.name)} is not supported`);
      }
    },
  });

  const setAllExtensions = (opts: Option) => {
    setFiles((prev) =>
      prev.map((file) => {
        file.to = opts;
        return file;
      }),
    );
  };

  const setExtension = (id: string, option: Option) => {
    setFiles((prev) =>
      prev.map((file) => {
        if (file.id === id) return { ...file, to: option };

        return file;
      }),
    );
  };

  const clearAll = () => setFiles([]);

  const convertAll = () => {
    for (const imageFile of files) {
      const { extension, to, file, id } = imageFile;

      if (to) {
        let conversion;

        if (to === "svg") {
          conversion = base64ToSvg;
        } else if (extension === "SVG") {
          conversion = svgToBase64;
        } else {
          conversion = imageToBase64;
        }

        conversion(file, (result) =>
          setFiles((prev) =>
            prev.map((f) => {
              if (f.id === id)
                return {
                  ...f,
                  result,
                };
              return f;
            }),
          ),
        );
      }
    }
  };

  const deleteHandler = (id: string) => {
    setFiles((prev) => prev.filter((file) => file.id !== id));
  };

  return (
    <div
      id="image-converter"
      className="mx-auto mt-20 flex max-w-5xl flex-col items-center justify-center"
    >
      <p className="lg:text-md my-6 text-center text-xs font-light uppercase tracking-widest text-slate-600 dark:text-slate-400">
        Image Converter
      </p>

      <div
        {...getRootProps()}
        className="flex cursor-pointer flex-col items-center gap-2 rounded-lg border border-dashed p-24 transition-colors duration-300 hover:bg-muted"
      >
        <Icons.image strokeWidth={1} size={48} />
        <input {...getInputProps()} />
        <p className="text-center text-xs text-slate-600 dark:text-slate-400">
          Drag some images here, or click to select files.
        </p>
      </div>

      {files.length > 0 && (
        <div className="mt-10 w-full">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:justify-between">
            <div className="flex items-center justify-start gap-2">
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Convert all to
              </p>
              <Select
                onValueChange={(option: Option) => setAllExtensions(option)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  {options.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Button variant="outline" onClick={clearAll} type="button">
                Clear all
              </Button>
              <Button
                disabled={
                  files.filter((file) => file.to !== undefined).length !==
                  files.length
                }
                onClick={convertAll}
                type="button"
              >
                Convert all
              </Button>
            </div>
          </div>

          <div className="my-8 space-y-4">
            {files.map((file) => {
              const { name, size, extension, id, result, to } = file;

              return (
                <div
                  key={id}
                  className="flex flex-col gap-4 rounded-lg border p-4"
                >
                  <div>{name}</div>

                  <div className="flex flex-col justify-between sm:flex-row sm:items-center">
                    <div className="text-sm text-muted-foreground">{size}</div>

                    <div className="mt-4 flex items-center justify-between gap-2 sm:mt-0 sm:justify-center">
                      {result ? (
                        <Button
                          className="border-none bg-green-500 text-foreground hover:bg-green-600"
                          onClick={() => to && download(result, name, to)}
                          type="button"
                        >
                          Download
                        </Button>
                      ) : (
                        <div className="flex items-center gap-2">
                          {extension} to{" "}
                          <Select
                            value={to}
                            onValueChange={(option: Option) =>
                              setExtension(id, option)
                            }
                          >
                            <SelectTrigger className="w-32">
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                              {options.map((option) => (
                                <SelectItem
                                  key={option.value}
                                  value={option.value}
                                >
                                  {option.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      )}

                      <Button
                        variant="destructive"
                        className="size-10 p-0"
                        onClick={() => deleteHandler(id)}
                        type="button"
                      >
                        <XIcon />
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default AIConverter;
