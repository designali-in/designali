import type { Metadata } from "next";
import CreatePollClient from "@/comp/dashboard/admin/poll/CreatePollClient";

import { env } from "@/env";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: "Create Poll",
  description:
    "Engage the community by creating interactive polls. Enter a question, set 2-10 options, and choose an expiry date to gather opinions.",
};

const CreatePollPage = () => {
  return (
    <div>
      <Card className="flex h-full w-60  flex-col">
        <CardHeader className="flex-1">
          <CardTitle>Create poll</CardTitle>
          <CardDescription className="line-clamp-2">
            Create a poll and share it with your friends.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CreatePollClient />
        </CardContent>
      </Card>
    </div>
  );
};

export default CreatePollPage;
