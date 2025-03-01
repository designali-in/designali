import { BlogHeaderLayout } from "@/src/components/mdx/blog/blog-header-layout";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mt-4 p-6 border-t rounded-t-3xl container-wrapper">
      <BlogHeaderLayout />
      <div className="">{children}</div>
    </div>
  );
}
