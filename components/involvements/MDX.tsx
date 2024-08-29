import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";
import { Markdown } from "../ui/markdown";

const Article = ({ body }: { body: string }) => {
  return (
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
  );
};

export default Article;
