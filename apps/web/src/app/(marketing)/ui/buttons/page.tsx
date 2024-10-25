import DemoComponent from "@/components/common/ui/DemoComponent";

export const metadata = {
  title: "UI - Buttons",
  description: "A design agency with a touch of magic.",
};

const directory = "buttons";

const files = ["button-01", "button-02", "button-03", "button-04", "button-05"];

export default function Page() {
  return (
    <main className="mx-auto mb-20 max-w-7xl px-6 xl:px-0">
      <div className="grid grid-cols-1 overflow-hidden sm:grid-cols-2 lg:grid-cols-3 [&>*]:relative [&>*]:px-1 [&>*]:py-12 [&>*]:before:absolute [&>*]:before:bg-border/70 [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:bg-border/70 [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] sm:[&>*]:px-8 xl:[&>*]:px-12">
        {files.map((componentName) => {
          return (
            <DemoComponent
              key={componentName}
              directory={directory}
              componentName={componentName}
              className="text-center"
            />
          );
        })}
      </div>
    </main>
  );
}
