import { DeleteAccountForm } from "@/comp/forms/delete-account-form";
import { EmailPreferencesForm } from "@/comp/forms/email-preferences-form";
import { ProfileForm } from "@/comp/forms/profile-form";

import { auth } from "@/lib/auth";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default async function SettingsProfile() {
  const session = await auth();
  return (
    <main className="p-6">
      <div className="">
        <h1 className="py-4 text-2xl font-semibold">Notifications</h1>
        <div className="grid gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Email Preferences</CardTitle>
              <CardDescription>
                Manage your email notification preferences
              </CardDescription>
            </CardHeader>
            <CardContent>
              <EmailPreferencesForm user={session.user} />
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
