//@ts-nocheck
import type { FileRouter } from "uploadthing/next"; 
import { createUploadthing } from "uploadthing/next";

import { auth } from "@/lib/auth";

const f = createUploadthing();

export const ourFileRouter: FileRouter = {
  imageUploader: f({ image: { maxFileSize: "4MB" } })
    .middleware(async ({ req }) => {
      const user = await auth();

      if (!user) throw new Error("Unauthorized");

      return { userId: user.user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {}),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
