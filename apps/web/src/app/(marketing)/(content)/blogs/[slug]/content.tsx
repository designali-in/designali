import type { BlogPost } from "contentlayer/generated";
import Mdx from "@/components/mdx/layers";
import { LikeButton } from "@/components/ui/like-button";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { getHeadings } from "@/utils/get-headings";

import TableOfContents from "./table-of-contents";

interface ContentProps {
  post: BlogPost;
  slug: string;
}

const Content = (props: ContentProps) => {
  const { post, slug } = props;
  const headings = getHeadings(post.body.raw);

  return (
    <div className="mt-8 flex flex-col justify-between lg:flex-row">
      <ScrollProgress className="top-14" />
      <article className="w-full lg:w-[670px]">
        <Mdx code={post.body.code} />
      </article>
      <aside className="lg:min-w-[220px] lg:max-w-[220px]">
        <div className="sticky top-24 mt-10">
          {headings && headings.length > 0 && (
            <TableOfContents headings={headings} />
          )}
          <div className="mt-10 px-4">
            <LikeButton slug={slug} />
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Content;
