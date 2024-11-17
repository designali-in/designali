import type { UserDisplay } from "@/types";
import UserClient from "@/comp/dashboard/admin/users/UserClient";
import { format } from "date-fns";

import { prisma } from "@/lib/db";

const UsersPage = async () => {
  const recentFiveUsers = await prisma.user.findMany({
    take: 5,
    orderBy: {
      createdAt: "desc",
    },
    include: {
      agency: true,
      pollVote: true,
      post: true,
      rating: true,
    },
  });
  const structuredUserData: UserDisplay[] = recentFiveUsers.flatMap((user) => ({
    name: user.name,
    email: user.email,
    createdAt: format(new Date(user.createdAt), "do MMMM',' yyyy"),
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    rating: user.rating?.length || 0,
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    pollsVoted: user.pollVote?.length || 0,
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    postsCreated: user.post?.length || 0,
  }));
  return (
    <main className="p-6">
      <div className="">
        <h1 className="py-4 text-2xl font-semibold">Users</h1>
        <UserClient
          initialUsers={structuredUserData}
          initialFetchedUsers={recentFiveUsers}
        />
      </div>
    </main>
  );
};

export default UsersPage;
