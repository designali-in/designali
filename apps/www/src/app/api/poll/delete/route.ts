import { z } from "zod";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { DeletePollValidator } from "@/lib/validations/poll";

export async function POST(req: Request) {
  try {
    const session = await auth();

    if (!session) {
      return new Response("Unauthorized", { status: 401 });
    }

    const body = await req.json();

    const { pollId } = DeletePollValidator.parse(body);

    const poll = await prisma.poll.findFirst({
      where: {
        id: pollId,
        creatorId: session.user.id,
      },
    });

    if (!poll) {
      return new Response("Poll not found", { status: 404 });
    }

    await prisma.poll.delete({
      where: {
        id: pollId,
        creatorId: session.user.id,
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
