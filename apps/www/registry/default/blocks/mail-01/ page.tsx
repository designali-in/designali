import Image from "next/image";

import { Mail } from "@/registry/default/blocks/mail-01/components/mail";
import { accounts, mails } from "@/registry/default/blocks/mail-01/data";

export default function MailPage() {
  return (
    <>
      <div className="hidden flex-col md:flex">
        <Mail
          accounts={accounts}
          mails={mails}
          defaultLayout={undefined}
          defaultCollapsed={undefined}
          navCollapsedSize={4}
        />
      </div>
    </>
  );
}
