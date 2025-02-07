import { DeleteAccountForm } from "@/comp/forms/delete-account-form";
import { ProfileForm } from "@/comp/forms/profile-form";
import { getCurrentUser } from "@/src/lib/session";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Metadata } from "./_components/metadata";

export default async function SettingsProfile() {
  const user = await getCurrentUser();
  return (
    <main className="p-6">
      <div className="">
        <h1 className="py-4 text-2xl font-semibold">Settings</h1>

        <Card className="">
          <CardHeader>
            <CardTitle>Profile</CardTitle>
            <CardDescription>Manage your profile information</CardDescription>
          </CardHeader>
          <CardContent>
            <ProfileForm user={user} />
          </CardContent>
        </Card>
        <div className="mt-3 grid gap-4 md:flex">
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
