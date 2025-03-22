"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FileUpload } from "@/components/lobby/products/d3d/file-upload";
import { MobileWarning } from "@/components/lobby/products/d3d/mobile-warning";
import { useMobileDetection } from "@/hooks/use-mobile-detection"; 
import { ArrowRight, Loader2 } from "lucide-react"; 
import { Button } from "@/components/ui/button";

export default function Home() {
  const [svgData, setSvgData] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string>("");
  const [selectedIcon, setSelectedIcon] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { isMobile, continueOnMobile, handleContinueOnMobile } =
    useMobileDetection();

  const handleFileUpload = (data: string, name: string) => {
    setSvgData(data);
    setFileName(name);
    console.log(`File uploaded: ${name}`) 
  };

  const handleIconSelect = (iconName: string) => {
    setSelectedIcon(iconName)
    console.log(`Selected icon: ${iconName}`)
  }


  const handleContinue = async () => {
    if (svgData) {
      setIsLoading(true);

      try {
        localStorage.setItem("svgData", svgData);
        localStorage.setItem("fileName", fileName);
        localStorage.setItem("selectedIcon", selectedIcon);

        if (isMobile) {
          localStorage.setItem("continueOnMobile", "true");
        }

        await new Promise((resolve) => setTimeout(resolve, 100));

        router.push("/products/d3d/edit");
      } catch (error) {
        console.error("Error during navigation:", error);
        setIsLoading(false);
      }
    }
  };

  return (
    <main className="container-wrapper mt-4 border-t rounded-t-3xl flex flex-col relative w-full">
      <div>
        {isLoading && (
          <div className="fixed  inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
              <Loader2 className="h-12 w-12 text-primary animate-spin" />
              <p className="text-xl font-medium">Preparing your 3D model...</p>
            </div>
          </div>
        )}
      </div>

      {/* Header */}

      <div className="flex-1 flex mt-20 flex-col items-center justify-center">
        {/* Main Headline */}
        <div className="text-center mb-10 md:mb-12">
          <h1 className=" text-4xl md:text-5xl lg:text-7xl font-semibold  tracking-tighter leading-tight md:leading-tight">
            Transform Your SVG in 
            <span className="text-ali"> 3D</span>
          </h1>
        </div>

        <div>
          {isMobile && !continueOnMobile ? (
            <div key="mobile-warning">
              <MobileWarning
                onContinue={handleContinueOnMobile}
                onReturn={() => {}}
              />
            </div>
          ) : (
            <div  className="w-full max-w-4xl mx-auto">
              <div className="w-full">
                <FileUpload
                  onFileUpload={handleFileUpload}
                  fileName={fileName}
                  selectedIcon={selectedIcon}
                  onIconSelect={handleIconSelect}
                /> 
              </div> 
              <div
                id="continue-button-section"
                className="h-20 mb-8 mt-2 flex items-center justify-center"
              >
                <div>
                  {svgData && (
                    <div
                      key="continue-button"
                      className="w-full flex justify-center"
                    >
                      <Button
                        className="h-12"
                        onClick={handleContinue}
                        disabled={isLoading}
                      >
                        <span className="flex items-center gap-2">
                          {isLoading ? (
                            <>
                              <Loader2 size={16} className="animate-spin" />
                              Processing...
                            </>
                          ) : (
                            <>
                              Continue to Editor <ArrowRight size={16} />
                            </>
                          )}
                        </span>
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
