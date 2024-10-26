import DemoComponent from "@/comp/common/ui/DemoComponent";

export const metadata = {
  title: "UI - Buttons",
  description: "A design agency with a touch of magic.",
};

const directory = "buttons";

const files = [
  "button-01",
  "button-02",
  "button-03",
  "button-04",
  "button-05",
  "button-06",
  "button-07",
  "button-08",
  "button-09",
  "button-10",
  "button-11",
  "button-12",
  "button-13",
  "button-14",
  "button-15",
  "button-16",
  "button-17",
  "button-18",
  "button-19",
  "button-20",
  "button-21",
  "button-22",
  "button-23",
  "button-24",
  "button-25",
  "button-26",
  "button-27",
  "button-28",
  "button-29",
  "button-30",
  "button-31",
  "button-32",
  "button-33",
  "button-34",
  "button-35",
  "button-36",
  "button-37",
  "button-38",
  "button-39",
  "button-40",
  "button-41",
  "button-42",
  "button-43",
  "button-44",
  "button-45",
  "button-46",
  "button-47",
  "button-48",
  "button-49",
  "button-50",
  "button-51",
];

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
