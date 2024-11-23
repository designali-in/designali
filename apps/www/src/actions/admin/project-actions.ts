import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

import { auth } from "@/lib/auth";

const prisma = new PrismaClient();

export async function createProject(
  projectName: string,
  projectInfo: string,
  projectUrl: string,
  techStack: string[],
) {
  try {
    const session = await auth();
    if (!session || !session.user) {
      return false;
    }

    const userId = session.user.id;

    const dbUser = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!dbUser) {
      return false;
    }

    const newProject = await prisma.project.create({
      data: {
        projectName,
        projectInfo,
        techStack,
        projectUrl,
        userId: dbUser.id,
      },
    });
    if (newProject) {
      return true;
    } else return false;
  } catch (error) {
    console.error("Error creating project:", error);
    return false;
  }
}

export async function getProjects() {
  try {
    const session = await auth();
    if (!session || !session.user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const userId = session.user.id;

    const dbUser = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        projects: true,
      },
    });

    if (!dbUser) {
      return new NextResponse("User not exist", { status: 404 });
    }

    return dbUser.projects;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return new NextResponse("Error", { status: 500 });
  }
}

export async function getProjectsWithAdmin() {
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

    const isAdmin = dbUser.role === "ADMIN";

    if (!isAdmin) {
      return new NextResponse("Unauthorized access to projects", {
        status: 403,
      });
    }

    const projects = await prisma.user.findMany({
      select: {
        email: true,

        projects: true,
      },
    });

    return projects;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return new NextResponse("Error", { status: 500 });
  }
}

export async function updateProject(
  projectId: string,
  projectName: string,
  projectInfo: string,
  projectUrl: string,
  techStack: string[],
) {
  try {
    const session = await auth();
    if (!session || !session.user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const updatedProject = await prisma.project.update({
      where: { id: projectId },
      data: {
        projectName,
        projectInfo,
        projectUrl,
        techStack,
      },
    });

    if (updatedProject) {
      return new NextResponse("Project updated", { status: 200 });
    } else return new NextResponse("Project not found", { status: 404 });
  } catch (error) {
    console.error("Error updating project:", error);
    return new NextResponse("Error", { status: 500 });
  }
}

export async function deleteProject(projectId: string) {
  try {
    const session = await auth();
    if (!session || !session.user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const deletedProject = await prisma.project.delete({
      where: { id: projectId },
    });

    if (deletedProject) {
      return new NextResponse("Project deleted", { status: 200 });
    } else return new NextResponse("Project not found", { status: 404 });
  } catch (error) {
    console.error("Error deleting project:", error);
    return new NextResponse("Error", { status: 500 });
  }
}
