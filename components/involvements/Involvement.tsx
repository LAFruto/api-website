"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Button from "../Button";
import { Involvement, SocialType } from "@prisma/client";
import { formatDateToCustomString, mapToIcon } from "@/lib/utils";
import { Content, getContentEntry, getInvolvement } from "@/data";

import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";

type InvolvementWithSocials = Involvement & {
  socials: {
    id: string;
    url: string;
    type: SocialType;
  }[];
};

const InvolvementPost = () => {
  const pathname = usePathname();
  const url = pathname.split("/")[2];
  const [involvement, setInvolvement] = useState<InvolvementWithSocials>();
  const [content, setContent] = useState<Content>();

  useEffect(() => {
    const fetchData = async () => {
      const involvement = await getInvolvement(url);
      if (involvement) {
        const content = await getContentEntry(involvement.markdown);
        setInvolvement(involvement);
        setContent(content);
      }
    };

    fetchData();
  }, [url]);

  if (!involvement) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="relative w-full h-[400px] rounded-b-3xl overflow-hidden">
        <Image src={involvement.image} alt={involvement.title} fill style={{ objectFit: "cover" }} />
        <div className="absolute inset-0 bg-blue-700 opacity-40 pointer-events-none" />
        <Link href="/involvements" className="z-1 bottom-0 absolute padding-container left-5 mb-10">
          <Button type="button" title="< All Involvements" variant="btn-orange" />
        </Link>
      </div>
      <div className="bg-blue-50 rounded-b-3xl min-h-[300px] mt-[-2rem] flex">
        <div className="max-container padding-container flex flex-col justify-between py-12 text-white lg:flex-row space-y-4 flex-1">
          <div className="space-y-8 pt-8 pb-2 max-w-[80%] mt-auto">
            {involvement.tags.length > 0 && (
              <span className="text-sm border-white border py-2 px-4 rounded-xl">{involvement.tags}</span>
            )}
            <h1 className="lg:bold-64 bold-46">{involvement.title}</h1>
          </div>
          <div className="self-start lg:self-end text-end space-y-3 flex flex-col flex-shrink-0">
            <p>{`${formatDateToCustomString(involvement.date)} • 3 min. read`}</p>
            <div className="flex justify-start lg:justify-end">
              {involvement.socials.map((social) => {
                const Icon = mapToIcon(social.type);
                return (
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    type="button"
                    className="flex p-3 rounded-full bg-orange-50 border-blue-50 border mr-[-.5rem] hover:bg-orange-90 transition"
                  >
                    <Icon className="w-5 h-5 rounded-full fill-black" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="max-container padding-container py-24">
        {content && (
          <article>
            <MDXRemote
              source={content?.body}
              // components={BlogMarkdown}
              options={{
                mdxOptions: {
                  remarkPlugins: [],
                  rehypePlugins: [[rehypeHighlight, {}]],
                  development: process.env.NODE_ENV === "development",
                },
              }}
            />
          </article>
        )}
      </div>
    </>
  );
};

export default InvolvementPost;
