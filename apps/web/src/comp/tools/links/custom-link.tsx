import { auth } from "@designali/auth";

import { CustomLinkButton } from "./custom-link-button";
import { CustomLinkDialog } from "./custom-link-dialog";

export const CustomLink = async () => {
  const session = await auth();

  if (!session) {
    return <CustomLinkButton disabled />;
  }

  return <CustomLinkDialog />;
};
