import Link from "next/link";
import { Button } from "@/registry/default/designali/ui/button";
import { CodeBlock } from "@/src/comp/mdx/layers/code-block";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata = {
  title: "UI - Designali",
  description: "A design agency with a touch of magic.",
};

export default function HomePage() {
  return (
    <main className="mx-auto mt-10 grid max-w-7xl gap-3 px-0 xl:px-0">
      <div className="grid  justify-center gap-3 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Button</CardTitle>
          </CardHeader>
          <CardContent className="w-80 md:w-full">
            Displays a button or a component that looks like a button.
            <CodeBlock
              title={".tsx"}
            >{`import { Button } from "@/components/ui/button" `}</CodeBlock>
          </CardContent>
          <CardFooter>
            <Link href="/products/ui/buttons">
              <Button icon="ArrowRight">Buttons</Button>
            </Link>
          </CardFooter>
        </Card>
        <Card className="">
          <CardHeader>
            <CardTitle>Inputs</CardTitle>
          </CardHeader>
          <CardContent className="w-80 md:w-full">
            Displays a form input field or a component that looks like an input
            field.
            <CodeBlock
              title={".tsx"}
            >{`import { Input } from "@/components/ui/inputs" `}</CodeBlock>
          </CardContent>
          <CardFooter>
            <Link href="/products/ui/inputs">
              <Button icon="ArrowRight">Inputs</Button>
            </Link>
          </CardFooter>
        </Card>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Mockups</CardTitle>
          </CardHeader>
          <CardContent className="w-80 md:w-full">
            Displays a mockup field or a component that looks like an apple
            devices.
            <CodeBlock
              title={".tsx"}
            >{`import { Input } from "@/components/ui/inputs" `}</CodeBlock>
          </CardContent>
          <CardFooter>
            <Link href="/products/ui/mockups">
              <Button icon="ArrowRight">Mockups</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
      <div className="flex w-full justify-center gap-3">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Easings</CardTitle>
          </CardHeader>
          <CardContent className=" w-full">
            <p className="text-sm leading-relaxed text-muted-foreground">
              We use class names with arbitrary properties like{" "}
              <code className="font-mono text-[13px] text-foreground">
                &#91;transition-timing-function:cubic-bezier(...)&#93;
              </code>{" "}
              instead of{" "}
              <code className="font-mono text-[13px] text-foreground">
                ease-&#91;cubic-bezier(...)&#93;
              </code>{" "}
              as recommended in the Tailwind CSS documentation, because the
              latter won&lsquo;t work with the tailwindcss-animate plugin. See{" "}
              <a
                href="https://github.com/jamiebuilds/tailwindcss-animate/pull/46"
                className="underline hover:no-underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                this GitHub issue
              </a>{" "}
              for technical details.
            </p>
          </CardContent>
          <CardFooter>
            <Link href="/products/ui/easings">
              <Button icon="ArrowRight">Easings</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
