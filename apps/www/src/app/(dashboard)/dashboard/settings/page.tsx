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

import { Metadata } from "./_components/metadata";

export default async function SettingsProfile() {
  const session = await auth();
  return (
    <main className="p-6">
      <div className="">
        <h1 className="py-4 text-2xl font-semibold">Settings</h1>
        <div className="grid gap-4 md:grid-cols-2 lg:flex">
          <Card className="w-80">
            <CardHeader>
              <CardTitle>Profile</CardTitle>
              <CardDescription>Manage your profile information</CardDescription>
            </CardHeader>
            <CardContent>
              <ProfileForm user={session.user} />
            </CardContent>
          </Card>

          <Card className="w-80">
            <CardHeader>
              <CardTitle>Delete Account</CardTitle>
              <CardDescription>
                Permanently delete your account and all associated data
              </CardDescription>
            </CardHeader>
            <CardContent>
              <DeleteAccountForm />
            </CardContent>
          </Card>
          <Metadata />
        </div>
      </div>
    </main>
  );
}
