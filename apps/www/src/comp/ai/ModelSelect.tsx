import { ProviderTiming } from "@/lib/ai/image-types";
import { ProviderKey } from "@/lib/ai/provider-config";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

import { ImageDisplay } from "./ImageDisplay";

interface ModelSelectProps {
  label: string;
  models: string[];
  value: string;
  providerKey: ProviderKey;
  onChange: (value: string, providerKey: ProviderKey) => void;
  iconPath: string;
  color: string;
  enabled?: boolean;
  onToggle?: (enabled: boolean) => void;
  image: string | null | undefined;
  timing?: ProviderTiming;
  failed?: boolean;
  modelId: string;
}

export function ModelSelect({
  label,
  models,
  value,
  providerKey,
  onChange,
  enabled = true,
  image,
  timing,
  failed,
  modelId,
}: ModelSelectProps) {
  return (
    <Card
      className={cn(`w-full transition-opacity`, enabled ? "" : "opacity-50")}
    >
      <CardContent className="h-full rounded-2xl p-2">
        <ImageDisplay
          modelId={modelId}
          provider={providerKey}
          image={image}
          timing={timing}
          failed={failed}
        />
      </CardContent>
    </Card>
  );
}
