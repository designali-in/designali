import type { ShortLink } from "@designali/db/src/schema";
import type { Session } from "next-auth";
import Link from "next/link";
import { auth } from "@designali/auth";
import { Button } from "@designali/ui/button";

import { getUserLinkByUserId } from "~/server/api/user-link";
import { LinkCard, LinkCardDashboard } from "./link-card";

const fetchLinksBySession = async (
  session: Session | null,
): Promise<ShortLink[]> => {
  if (session) {
    const userLink = await getUserLinkByUserId(session.user.id);
    return userLink.links ?? [];
  }

  if (!session) {
    return null;
  }
};

// let shortLinks: ShortLink[] = []; try { shortLinks = await fetchLinksBySession(session); } catch (err) { throw new Error("Failed to fetch links"); }
// const shortLinks: ShortLink[] = [] || (await fetchLinksBySession(session));

export const LinkList = async () => {
  const session = await auth();
  let shortLinks: ShortLink[] = [] || (await fetchLinksBySession(session));

  try {
    shortLinks = await fetchLinksBySession(session);
  } catch (error) {
    return null;
  }
  return (
    <>
      <div className="flex w-full flex-col gap-2">
        {session ? (
          <div>
            <div className="flex w-full flex-col gap-2">
              {shortLinks.slice(0, 2).map((link) => (
                <LinkCard key={link.slug} link={link} session={session} />
              ))}
            </div>
            <div className="mt-4 flex justify-center">
              <Link href="/app/dashboard/short-links">
                <Button variant="outline" size="lg">
                  See the all Links
                </Button>
              </Link>
            </div>
          </div>
        ) : (
          <div className="flex justify-center">
            <Link href="/login">
              <Button variant="outline" size="lg">
                Login to see the all shortLinks
              </Button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export const AllLinkList = async () => {
  const session = await auth();
  let shortLinks: ShortLink[] = [] || (await fetchLinksBySession(session));

  try {
    shortLinks = await fetchLinksBySession(session);
  } catch (error) {
    return null;
  }

  return (
    <>
      <div className="flex w-full flex-col gap-2">
        {shortLinks.map((link) => (
          <LinkCard key={link.slug} link={link} session={session} />
        ))}
      </div>
    </>
  );
};

export const LinkListDashboard = async () => {
  const session = await auth();
  let shortLinks: ShortLink[] = [] || (await fetchLinksBySession(session));

  try {
    shortLinks = await fetchLinksBySession(session);
  } catch (error) {
    return null;
  }

  return (
    <>
      <div className="grid w-full grid-cols-1 gap-3">
        {shortLinks.slice(0, 2).map((link) => (
          <LinkCardDashboard key={link.slug} link={link} session={session} />
        ))}
      </div>
    </>
  );
};
