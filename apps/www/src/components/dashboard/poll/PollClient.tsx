"use client";

import type { ExtendedPoll } from "@/types/global";
import dynamic from "next/dynamic";

const Polls = dynamic(() => import("./Polls"), {
  ssr: false,
  loading: () => null,
});

interface PollsProps {
  initialPolls: ExtendedPoll[];
  interaction?: boolean;
  sessionId: string;
}

const PollClient = ({ initialPolls, sessionId, interaction }: PollsProps) => {
  return (
    <Polls
      initialPolls={initialPolls}
      sessionId={sessionId}
      interaction={interaction}
    />
  );
};

export default PollClient;
