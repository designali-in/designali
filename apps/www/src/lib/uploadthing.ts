import type { OurFileRouter } from "@/app/api/uploadthing/core";
import { generateReactHelpers } from "@uploadthing/react/hooks";

export const { uploadFiles } = generateReactHelpers<OurFileRouter>();
