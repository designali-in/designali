import React from "react";
import Link from "next/link";
import { Alert, AlertDescription, AlertTitle } from "@designali/ui/alert";

const page = () => {
  return (
    <Alert variant="default">
      <AlertTitle>Success</AlertTitle>
      <AlertDescription>
        Your account has been updated.{" "}
        <Link href="/view-forms" className="underline">
          Go to the dashboard
        </Link>{" "}
        to create more forms
      </AlertDescription>
    </Alert>
  );
};

export default page;
