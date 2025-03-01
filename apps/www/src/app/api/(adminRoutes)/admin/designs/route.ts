import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { getTicketsWithAdmin } from "@/actions/admin/ticket-actions";
import {
  createTicket,
  getTickets,
  getTicketWithId,
} from "@/actions/ticket-actions";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";

export async function GET(req: any) {
  try {
    const userId = auth();
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.searchParams);
    const projectId = searchParams.get("projectId");
    const ticketId = searchParams.get("ticketId");

    // console.log("projectId", ticketId);

    let projects;

    // if (!ticketId && projectId) {
    //   tickets = await getTickets(projectId);
    // }
    // if (ticketId) {
    //   tickets = await getTicketWithId(ticketId);
    // }

    projects = await getTicketsWithAdmin();

    console.log(projects);

    return new NextResponse(JSON.stringify(projects), { status: 200 });
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

    const user = await auth();
    if (!user) {
      return new NextResponse("User not exist", { status: 404 });
    }

    const requestBody = await req.json(); // Parse the request body

    const { projectId, title, messages, category, priority } = requestBody;
    const newTicket = await createTicket(
      projectId,
      title,
      messages,
      priority,
      category,
    );

    return new NextResponse("Go", { status: 200 });
  } catch (error) {
    return new NextResponse("Error", { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const session = await auth();
    if (!session || !session.user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const requestBody = await req.json();

    const { ticketId, status } = requestBody;

    const dbTicket = await prisma.ticket.update({
      where: {
        id: ticketId,
      },
      data: {
        status: status,
      },
    });

    if (dbTicket) {
      return new NextResponse("Ticket status updated", { status: 200 });
    } else {
      return new NextResponse("Failed to update ticket status", {
        status: 404,
      });
    }
  } catch (error) {
    console.error("Error updating ticket status:", error);
    return new NextResponse("Error updating ticket status", { status: 500 });
  }
}
