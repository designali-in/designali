/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { NextResponse } from "next/server";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";

export async function createMessage(ticketId: string, content: string) {
  try {
    const session = await auth();
    if (!session || !session.user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const userId = session.user.id;

    const dbUser = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!dbUser) {
      return new NextResponse("User not exist", { status: 404 });
    }

    const ticket = await prisma.ticket.findUnique({
      where: { id: ticketId },
    });

    if (!ticket) {
      return new NextResponse("Ticket not exist", { status: 404 });
    }

    const senderType = dbUser.role === "ADMIN" ? "ADMIN" : "USER";

    const newMessage = await prisma.message.create({
      data: {
        sender: senderType,
        content,
        ticketId,
      },
    });

    if (newMessage) {
      return new NextResponse("Message created", { status: 200 });
    } else return new NextResponse("Failed to create message", { status: 500 });
  } catch (error) {
    console.error("Error creating message:", error);
    return new NextResponse("Error", { status: 500 });
  }
}

export async function getMessages(ticketId: string) {
  try {
    const session = await auth();
    if (!session || !session.user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const userId = session.user.id;

    const dbUser = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!dbUser) {
      return new NextResponse("User not found", { status: 404 });
    }

    const dbTicket = await prisma.ticket.findUnique({
      where: {
        id: ticketId,
      },
      include: {
        messages: true,
      },
    });

    if (!dbTicket) {
      return new NextResponse("Ticket not found", { status: 404 });
    }

    const messages = dbTicket.messages;

    return messages;
  } catch (error) {
    console.error("Error fetching messages:", error);
    return new NextResponse("Error", { status: 500 });
  }
}

export async function deleteMessage(messageId: string) {
  try {
    const deletedMessage = await prisma.message.delete({
      where: { id: messageId },
    });

    if (deletedMessage) {
      return new NextResponse("Message deleted", { status: 200 });
    } else return new NextResponse("Message not found", { status: 404 });
  } catch (error) {
    console.error("Error deleting message:", error);
    return new NextResponse("Error", { status: 500 });
  }
}
