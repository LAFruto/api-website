import { MDXRemote } from "next-mdx-remote/rsc";
import { Markdown } from "../ui/markdown";
import rehypeHighlight from "rehype-highlight";

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
