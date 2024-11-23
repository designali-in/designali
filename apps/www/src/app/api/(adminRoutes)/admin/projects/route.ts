import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { getProjectsWithAdmin } from "@/actions/admin/project-actions";
import {
  createTicket,
  getTickets,
  getTicketWithId,
} from "@/actions/ticket-actions";
import { PrismaClient } from "@prisma/client";

import { auth } from "@/lib/auth";

const prisma = new PrismaClient();

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

    projects = await getProjectsWithAdmin();

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

export async function PUT(req: NextRequest, res: Response) {
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

    const { ticketId, status } = requestBody;

    const dbTicket = await prisma.ticket.update({
      where: {
        id: ticketId,
      },
      data: {
        status: status,
      },
    });

    return new NextResponse("Ticket status updated", { status: 200 });
  } catch (error) {
    return new NextResponse("Error", { status: 500 });
  }
}
