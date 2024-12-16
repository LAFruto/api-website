import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";
import { Markdown } from "../ui/markdown";
import { memo } from "react";

const Article = ({ body }: { body: string }) => {
  return (
    <div className="max-container px-[10%] lg:px-[16%] py-24">
      <article>
        <MDXRemote
          source={body}
          components={Markdown}
          options={{
            mdxOptions: {
              remarkPlugins: [],
              rehypePlugins: [[rehypeHighlight, {}]],
              development: process.env.NODE_ENV === "development",
            },
          }}
        />
      </article>
    </div>
  );
};

export default Article;
