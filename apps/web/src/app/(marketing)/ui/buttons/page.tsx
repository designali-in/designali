import { DemoComponent } from "@/components/common/ui/DemoComponent";
import { ThemeCustomizer } from "@/src/components/common/theme-customizer";
import PageTitle from "@/src/components/mdx/page-title";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@designali/ui/breadcrumb";

//  <ThemeCustomizer />

const directory = "buttons";

const files = ["button-01", "button-02", "button-03", "button-04", "button-05"];

export default function Page() {
  return (
    <main className="mx-auto my-20 mt-40 max-w-7xl px-6 xl:px-0">
      <PageTitle
        title="Buttons"
        description={` Designali an extensive collection of copy-and-paste components for quickly building app UIs. It's free, open-source, and ready to drop into your projects.`}
      />
      <div className="mt-4 flex justify-center">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/ui">ui</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{directory}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

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
