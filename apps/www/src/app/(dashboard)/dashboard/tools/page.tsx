import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function SettingsProfile() {
  return (
    <main className="p-6">
      <div className="">
        <h1 className="py-4 text-2xl font-semibold">Tools</h1>
        <div className="grid justify-center gap-4 md:flex md:flex-wrap md:justify-start">
          <Link href={"/dashboard/tools/image-converter"}>
            <Card className="w-80">
              <CardHeader>
                <CardTitle>Image Converter</CardTitle>
                <CardDescription>Convert Images</CardDescription>
              </CardHeader>
              <CardContent></CardContent>
            </Card>
          </Link>

          <Link href={"/dashboard/tools/svg-to-png"}>
            <Card className="w-80">
              <CardHeader>
                <CardTitle>SVG to PNG</CardTitle>
                <CardDescription>SVG to PNG</CardDescription>
              </CardHeader>
              <CardContent></CardContent>
            </Card>
          </Link>
          <Link href={"/dashboard/tools/round-corner"}>
            <Card className="w-80">
              <CardHeader>
                <CardTitle>Round Corner</CardTitle>
                <CardDescription>Round Corne</CardDescription>
              </CardHeader>
              <CardContent></CardContent>
            </Card>
          </Link>
          <Link href={"/dashboard/tools/square-image"}>
            <Card className="w-80">
              <CardHeader>
                <CardTitle>Square Image</CardTitle>
                <CardDescription>Square Image</CardDescription>
              </CardHeader>
              <CardContent></CardContent>
            </Card>
          </Link>
          <Link href={"/dashboard/tools/word-counter"}>
            <Card className="w-80">
              <CardHeader>
                <CardTitle>Word Counter</CardTitle>
                <CardDescription>Count words</CardDescription>
              </CardHeader>
              <CardContent></CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </main>
  );
}
