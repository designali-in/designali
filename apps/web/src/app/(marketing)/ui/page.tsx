import DemoComponent from "./_components/demo-component";

// Define an array of input file names
const inputFiles = [
  "input-01",
  "input-02",
  "input-03",
  "input-04",
  "input-05",
  "input-06",
];

export default function Page() {
  return (
    <main>
      <div className="my-40 px-4 sm:px-6">
        <div className="mx-auto w-full max-w-6xl">
          <div className="mb-16 text-center">
            <h1 className="mb-3 text-3xl font-black text-foreground md:text-4xl">
              Input
            </h1>
            <p className="text-muted-foreground">
              A growing collection of over 50 input components built with
              Next.js and TailwindCSS.
            </p>
          </div>

          <div className="grid max-w-6xl grid-cols-1 overflow-hidden sm:grid-cols-2 lg:grid-cols-3 [&>*]:relative [&>*]:px-1 [&>*]:py-12 [&>*]:before:absolute [&>*]:before:bg-border/70 [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:bg-border/70 [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] sm:[&>*]:px-8 xl:[&>*]:px-12">
            {inputFiles.map((componentName) => {
              const directory = "inputs";
              return (
                <DemoComponent
                  key={componentName}
                  directory={directory}
                  componentName={componentName}
                />
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
