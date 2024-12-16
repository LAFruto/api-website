import Article from "@/components/involvements/Article";
import Involvement from "@/components/involvements/Involvement";
import { getAllContent, getContentEntry } from "@/data";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export const generateStaticParams = async () => {
  const content = await getAllContent();

  return content.map((post) => ({ slug: post.slug }));
};

export default async function ContentPage({ params }: { params: { slug: string } }) {
  const content = await getContentEntry(params.slug);

  if (!content) {
    return notFound();
  }

  return (
    <Suspense fallback={<div className="flex h-full w-full items-center justify-center">Loading...</div>}>
      <Involvement content={content} />
      <Article body={content.body} />
    </Suspense>
  );
}
