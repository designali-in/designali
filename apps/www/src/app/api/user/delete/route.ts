import { NextResponse } from "next/server";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";

export async function DELETE() {
  try {
    const session = await auth();

    if (!session.user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    // Delete the user's data
    await prisma.user.delete({
      where: {
        id: session.user.id,
      },
    });

    return new NextResponse("Account deleted", { status: 200 });
  } catch (error) {
    console.error("Error deleting account:", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
