import Involvement from "@/components/involvements/Involvement";
import Article from "@/components/involvements/Article";
import { getAllContent, getContentEntry } from "@/data";

export const generateStaticParams = async () => {
  const content = await getAllContent();

  return content.map((post) => ({ slug: post.slug }));
};

export default async function ContentPage({ params }: { params: { slug: string } }) {
  const content = await getContentEntry(params.slug);
  return (
    <div>
      <Involvement content={content} />
      <Article body={content.body} />
    </div>
  );
}
