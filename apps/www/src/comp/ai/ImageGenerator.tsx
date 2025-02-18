import { AlertCircle, ChevronDown, Settings } from "lucide-react";

import {
  GeneratedImage,
  ImageError,
  ProviderTiming,
} from "@/lib/ai/image-types";
import {
  initializeProviderRecord,
  PROVIDER_ORDER,
  ProviderKey,
} from "@/lib/ai/provider-config";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import { ImageCarousel } from "./ImageCarousel";
import { ImageDisplay } from "./ImageDisplay";

interface ImageGeneratorProps {
  images: GeneratedImage[];
  errors: ImageError[];
  failedProviders: ProviderKey[];
  timings: Record<ProviderKey, ProviderTiming>;
  enabledProviders: Record<ProviderKey, boolean>;
  toggleView: () => void;
}

export function ImageGenerator({
  images,
  errors,
  failedProviders,
  timings,
  enabledProviders,
  toggleView,
}: ImageGeneratorProps) {
  return (
    <div className="space-y-6">
      {/* If there are errors, render a collapsible alert */}
      {errors.length > 0 && (
        <Collapsible>
          <CollapsibleTrigger asChild>
            <Button
              variant="ghost"
              className="flex items-center gap-2 text-destructive"
            >
              <AlertCircle className="h-4 w-4" />
              {errors.length} {errors.length === 1 ? "error" : "errors"}{" "}
              occurred
              <ChevronDown className="h-4 w-4 transition-transform duration-200 data-[state=open]:rotate-180" />
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="mt-2 space-y-2">
              {errors.map((err, index) => (
                <Alert key={index} variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <div className="ml-3">
                    <AlertTitle className="capitalize">
                      {err.provider} Error
                    </AlertTitle>
                    <AlertDescription className="mt-1 text-sm">
                      {err.message}
                    </AlertDescription>
                  </div>
                </Alert>
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>
      )}

      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">Generated Images</h3>
        <Button
          variant="outline"
          className=""
          onClick={() => toggleView()}
          size="icon"
        >
          <Settings className="h-4 w-4" />
        </Button>
      </div>

      {/* Mobile layout: Carousel */}
      <div className="sm:hidden">
        <ImageCarousel
          providers={PROVIDER_ORDER}
          images={images}
          timings={timings}
          failedProviders={failedProviders}
          enabledProviders={enabledProviders}
          providerToModel={initializeProviderRecord<string>()}
        />
      </div>

      {/* Desktop layout: Grid */}
      <div className="hidden gap-6 sm:grid sm:grid-cols-2 2xl:grid-cols-4">
        {PROVIDER_ORDER.map((provider) => {
          const imageItem = images.find((img) => img.provider === provider);
          const imageData = imageItem?.image;
          const timing = timings[provider];
          return (
            <ImageDisplay
              key={provider}
              provider={provider}
              image={imageData}
              timing={timing}
              failed={failedProviders.includes(provider)}
              enabled={enabledProviders[provider]}
              modelId={imageItem?.modelId ?? ""}
            />
          );
        })}
      </div>
    </div>
  );
}
