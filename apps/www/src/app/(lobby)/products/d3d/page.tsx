import AdBanner from "@/components/common/AdBanner";
import AllD3D from "./alld3d"

export const metadata = {
  title: "D3D",
  description: "A design agency with a touch of magic.",
};

export default function AboutAI() {
  return (
    <div className="relative">
      <div className="relative container-wrapper my-6 border-grid rounded-3xl border-y">
        <div className="">
          <AllD3D/>
          <div className="">
            <AdBanner
              dataAdFormat="auto"
              dataFullWidthResponsive={true}
              dataAdSlot="2106263519"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
