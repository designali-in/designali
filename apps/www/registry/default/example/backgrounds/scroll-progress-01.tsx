import { ScrollProgress } from "@/components/ui/backgrounds/scroll-progress";

const ScrollProgressDemo = () => {
  return (
    <div className="z-10 rounded-lg border border-secondary p-4">
      <ScrollProgress className="top-[65px]" />
      <h2 className="pb-4 font-bold">
        Note: The scroll progress is shown below the navbar of the page.
      </h2>
      <p className="pb-4">
        Designali is a collection of re-usable components that you can copy and
        paste into your web apps. It primarily features components, blocks, and
        templates geared towards creating landing pages and user-facing
        marketing materials.
      </p>
    </div>
  );
};

export default ScrollProgressDemo;
