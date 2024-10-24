import ClientDemoComponent from "./demo-component"; // Client Component
import { readComponentSource } from "./read-component-source";

export async function DemoComponent({
  directory,
  componentName,
  className,
}: {
  directory: string;
  componentName: string;
  className?: string;
}) {
  const source = await readComponentSource(directory, componentName);

  return (
    <ClientDemoComponent
      directory={directory}
      componentName={componentName}
      className={className}
      source={source}
    />
  );
}
