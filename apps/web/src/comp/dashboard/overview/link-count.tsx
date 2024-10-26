import { getUserById } from "@/server/api/user";
import { auth } from "@designali/auth";

export const LinkCount = async () => {
  const session = await auth();
  let linkCount = 0;

  try {
    const user = await getUserById(session.user.id);
    linkCount = user.userLink.totalLinks ?? 0;
  } catch (error) {
    linkCount = 0;
  }

  return <>{linkCount}</>;
};

// <div>{!session ? <div>{user.userLink.totalLinks ?? 0}</div> : 0}</div>
