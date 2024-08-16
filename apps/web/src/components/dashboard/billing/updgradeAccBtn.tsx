import React from "react";
import Link from "next/link";
import { getUserSubscription } from "@/lib/actions/userSubscriptions";
import { MAX_FREE_FROMS } from "@/lib/constant/constants";
import { auth } from "@designali/auth";
import { Progress } from "@designali/ui/progress";

import SubscribeBtn from "./SubscribeBtn";

type Props = {};

const UpdgradeAccBtn = async (props: Props) => {
  const session = await auth();
  const userId = session?.user?.id;
  if (!userId) {
    return null;
  }
  const subscription = await getUserSubscription({ userId });
  if (subscription) {
    return null;
  }

  const percent = 1 * 100;

  return (
    <div className="mb-4 p-4 text-left text-xs">
      <Progress value={percent} />
      <p className="mt-2"> out of {MAX_FREE_FROMS} forms generated.</p>
      <p>
        <SubscribeBtn price="price_1Oeu01C0XQCoR9vaO7GKAKRJ" userId={userId} />{" "}
        for unlimited forms.
      </p>
    </div>
  );
};

export default UpdgradeAccBtn;
