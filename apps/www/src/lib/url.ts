import crypto from "crypto";
import { Session } from "next-auth";

import { prisma } from "./db";
import { getBaseUrl } from "./dutils";

/**
 * Get URL by its ID otherwise
 *
 * @async
 * @param {string} id
 */
export const getUrlById = async (id: string) => {
  const url = await prisma.url.findUnique({
    where: {
      id: id,
    },
    include: {
      user: true,
    },
  });
  return url;
};

/**
 * Creates a new URL corresponding to the User ID present in the Session object.
 * The short URL is created by making sure that it is unique in the database.
 * Returns the URL object along with the attached User.
 *
 * @async
 * @param {string} originalUrl
 * @param {Session} session
 */
export const createUrl = async (originalUrl: string, session: Session) => {
  if (!session?.user?.email) {
    throw new Error("No email present in Session object");
  }

  let randomString = crypto.randomBytes(4).toString("hex");
  let shortUrl = `${getBaseUrl()}/url` + "/" + randomString;

  while (true) {
    const count = await prisma.url.count({ where: { shortUrl: shortUrl } });
    if (count === 0) {
      break;
    }
    randomString = crypto.randomBytes(4).toString("hex");
    shortUrl = `${getBaseUrl()}/url` + "/" + randomString;
  }

  const url = await prisma.url.create({
    data: {
      originalUrl,
      shortUrl,
      user: {
        connect: {
          email: session?.user?.email,
        },
      },
    },
  });
  return url;
};

/**
 * Function to get paginated URLs from the DB.
 *
 * @async
 * @param {string} id - ID of the User
 * @param {number} [skip=0] - Records to skip
 * @param {number} [take=10] - Records to take after skipping
 * @returns {Promise<IPaginatedUrls>}
 */
export const getUrlsForUser = async (
  id: string,
  skip: number = 0,
  take: number = 10,
): Promise<IPaginatedUrls> => {
  const results = await Promise.all([
    prisma.url.findMany({
      skip: skip,
      take: take,
      where: { userId: id },
      include: {
        user: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    }),
    prisma.url.count({
      where: {
        userId: id,
      },
    }),
  ]);

  return {
    results: results[0] ?? [],
    totalCount: results[1] ?? 0,
    skip: skip,
    take: take,
  };
};

/**
 * Deletes a URL given its ID and the User ID
 *
 * @async
 * @param {string} id - ID of the URL object
 * @param {string} userId - User ID
 * @returns {Promise<boolean>} - true if record was found and deleted successfully, otherwise false
 */
export const deleteUrl = async (
  id: string,
  userId: string,
): Promise<boolean> => {
  await prisma.url.delete({
    where: {
      id: id,
      userId: userId,
    },
  });
  return true;
};

export /**
 * Given a short URL, find if a URL object exists otherwise throw an error.
 *
 * @async
 * @param {string} shortUrl
 * @returns {Promise<string>} - the original URL corresponding to the short URL
 */
const getOriginalUrlFromShortUrl = async (
  shortUrl: string,
): Promise<string> => {
  const url = await prisma.url.findFirstOrThrow({
    where: {
      shortUrl: shortUrl,
    },
  });
  return url.originalUrl;
};
