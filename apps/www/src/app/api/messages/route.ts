/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { createMessage, getMessages } from "@/actions/message-actions";
import { getCurrentUser } from "@/src/lib/session";

import { auth } from "@/lib/auth";

export async function GET(req: NextRequest) {
  try {
    const userId = auth();
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const user = await getCurrentUser();
    if (!user) {
      return new NextResponse("User not exist", { status: 404 });
    }

    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.searchParams);
    const ticketId = searchParams.get("ticketId");

    if (!ticketId) {
      return new NextResponse("Ticket ID is required", { status: 400 });
    }
    const messages = await getMessages(ticketId);

    return new NextResponse(JSON.stringify(messages), { status: 200 });
  } catch (error) {
    return new NextResponse("Error retrieveing tickets", { status: 500 });
  }
}

export async function POST(req: NextRequest, res: Response) {
  try {
    const userId = auth();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const user = await getCurrentUser();
    if (!user) {
      return new NextResponse("User not exist", { status: 404 });
    }

    const body = await req.json();

    const { ticketId, content } = body;
    if (!ticketId || !content) {
      return new NextResponse("Ticket ID and content are required", {
        status: 400,
      });
    }

    const message = await createMessage(ticketId, content);

    return new NextResponse(JSON.stringify(message), { status: 200 });
  } catch (error) {
    return new NextResponse("Error", { status: 500 });
  }
}
