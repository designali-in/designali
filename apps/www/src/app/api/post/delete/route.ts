//@ts-nocheck
import { z } from "zod";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { DeletePostValidator } from "@/lib/validations/community";

export async function POST(req: Request) {
  try {
    const session = await auth();

    if (!session) {
      return new Response("Unauthorized", { status: 401 });
    }

    const body = await req.json();
    const { creatorId, postId } = DeletePostValidator.parse(body);

    const post = await prisma.designPost.findFirst({
      where: {
        id: postId,
      },
    });

    if (!post) {
      return new Response("Post not found", { status: 404 });
    }

    const postCreator = await prisma.user.findFirst({
      where: {
        id: creatorId,
      },
    });

    if (!postCreator) {
      return new Response("User not found", { status: 404 });
    }

    if (postCreator.id !== session.user.id) {
      return new Response("Forbidden", { status: 403 });
    }

    //all checks complete✅
    await prisma.designPost.delete({
      where: {
        id: postId,
      },
    });

    return new Response("OK");
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(error.message, { status: 422 });
    }

    return new Response("Something went wrong", { status: 500 });
  }
}
