"use client";

import { Content } from "@/data";
import { mapToIcon } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Button from "../Button";
import LinkIcon from "../icons/LinkIcon";

const InvolvementPost = ({ content }: { content: Content }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.toString());
  };

  if (!content) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="relative w-full h-[400px] rounded-b-3xl overflow-hidden">
        <Image src={content.thumbnail} alt={content.title} fill style={{ objectFit: "cover" }} priority />
        <div className="absolute inset-0 bg-blue-700 opacity-40 pointer-events-none" />
        <Link href="/involvements" className="z-1 bottom-0 absolute padding-container left-5 mb-10 hide !delay-100">
          <Button type="button" title="< All Involvements" variant="btn-orange" />
        </Link>
      </div>
      <div className="bg-blue-50 rounded-b-3xl min-h-[300px] mt-[-2rem] flex">
        <div className="max-container padding-container flex flex-col justify-between py-12 text-white lg:flex-row space-y-4 flex-1">
          <div className="space-y-8 pt-8 pb-2 max-w-[80%] mt-auto hide !delay-100">
            {content.tags &&
              content.tags.length > 0 &&
              content.tags.map((tag, index) => (
                <span key={index} className="text-sm border-white border hide !delay-100 py-2 px-4 rounded-lg">
                  {tag}
                </span>
              ))}
            <h1 className="lg:bold-64 bold-46">{content.title}</h1>
          </div>
          <div className="self-start lg:self-end text-end space-y-3 flex flex-col flex-shrink-0">
            <p className="hide !delay-100">{`${content.date} • ${content.duration}`}</p>
            <div className="flex justify-start lg:justify-end hide !delay-100">
              <button
                onClick={copyToClipboard}
                className="flex p-3 rounded-full bg-orange-50 border-blue-50 border mr-[-.5rem] hover:bg-orange-90 transition cursor-pointer"
              >
                <LinkIcon className={`h-5 w-5 fill-white`} />
              </button>
              {content.socials &&
                content.socials.map((social, index) => {
                  const Icon = mapToIcon(social.type);
                  return (
                    <Link
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      type="button"
                      className="flex p-3 rounded-full bg-orange-50 border-blue-50 border mr-[-.5rem] hover:bg-orange-90 transition"
                    >
                      <Icon className={`h-5 w-5 fill-white`} />
                    </Link>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvolvementPost;
