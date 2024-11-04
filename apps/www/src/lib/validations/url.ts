import * as z from "zod";

import type {  UserRole } from "@prisma/client";
import { prisma } from "@/lib/db";
import type { ShortUrlFormData } from "@/src/types/urls";
 
const urlPattern = /^(?!-)[a-zA-Z0-9]+(-[a-zA-Z0-9]+)*(?<!-)$/;
const targetPattern =
  /^(https?:\/\/)([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(:\d+)?(\/[a-zA-Z0-9-_.]*)*(\/|\?([a-zA-Z0-9-_.]+=[a-zA-Z0-9-_.]*(&[a-zA-Z0-9-_.]+=[a-zA-Z0-9-_.]*)*)?)?(\.[a-zA-Z]{2,6})?$/;

export const createUrlSchema = z.object({
  id: z.string().optional(),
  target: z.string().min(6).regex(targetPattern, "Invalid target URL format"),
  url: z.string().min(2).regex(urlPattern, "Invalid URL format"),
  expiration: z.string().default("-1"),
  visible: z.number().default(1),
  active: z.number().default(1),
});

export async function getUserShortUrls(
  userId: string,
  active = 1,
  page: number,
  size: number,
  role: UserRole = "USER",
) {
  const option =
    role === "USER"
      ? {
          userId,
          active,
        }
      : {};
  const [total, list] = await prisma.$transaction([
    prisma.userUrl.count({
      where: option,
    }),
    prisma.userUrl.findMany({
      where: option,
      skip: (page - 1) * size,
      take: size,
      orderBy: {
        updatedAt: "desc",
      },
    }),
  ]);
  return {
    total,
    list,
  };
}


export async function getUserShortUrlCount(
  userId: string,
  active = 1,
  role: UserRole = "USER",
) {
  try {
    return await prisma.userUrl.count({
      where:
        role === "USER"
          ? {
              userId,
              active,
            }
          : {},
    });
  } catch (error) {
    return -1;
  }
}

export async function createUserShortUrl(data: ShortUrlFormData) {
  try {
    const res = await prisma.userUrl.create({
      data: {
        userId: data.userId,
        userName: data.userName || "Anonymous",
        target: data.target,
        url: data.url,
        visible: data.visible,
        active: data.active,
        expiration: data.expiration,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    });
    return { status: "success", data: res };
  } catch (error) {
    return { status: error };
  }
}

export async function getUrlBySuffix(suffix: string) {
  return await prisma.userUrl.findFirst({
    where: {
      url: suffix,
    },
    select: {
      id: true,
      target: true,
      active: true,
      expiration: true,
      updatedAt: true,
    },
  });
}


