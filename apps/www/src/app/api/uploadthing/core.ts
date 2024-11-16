import type { FileRouter } from "uploadthing/next";
import { getToken } from "next-auth/jwt";
import { createUploadthing } from "uploadthing/next";

const f = createUploadthing();

export const ourFileRouter = {
  imageUploader: f({ image: { maxFileSize: "4MB" } })
    .middleware(async ({ req }) => {
      const user = await getToken({
        req,
        salt: "d59aCVFRS/nssHYlGaredV80Nf2ZOp1DQ33yaRkSRRE=",
        secret: "d59aCVFRS/nssHYlGaredV80Nf2ZOp1DQ33yaRkSRRE=",
      });

      if (!user) throw new Error("Unauthorized");

      return { userId: user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {}),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
