import { Separator } from "@designali/ui/separator";

import AppearancePage from "./appearance-form";

export default function SettingsAppearancePage() {
  return (
    <div className="space-y-6 p-6">
      <div>
        <h3 className="text-lg font-medium">Appearance</h3>
        <p className="text-sm text-muted-foreground">
          Customize the appearance of the app. Automatically switch between day
          and night themes.
        </p>
      </div>
      <Separator />
      <AppearancePage />
    </div>
  );
}
