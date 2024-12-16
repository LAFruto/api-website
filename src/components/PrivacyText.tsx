import { Markdown } from "@/components/ui/markdown";
import fs from "fs/promises";
import { MDXRemote } from "next-mdx-remote/rsc";
import path from "path";

async function getPrivacyContent() {
  const filePath = path.join(process.cwd(), "public", "privacy-policy.mdx");
  const content = await fs.readFile(filePath, "utf8");
  return content;
}

export default async function PrivacyText() {
  const content = await getPrivacyContent();

  return (
    <div className="max-container px-[10%] lg:px-[16%] py-24">
      <MDXRemote source={content} components={Markdown} />
    </div>
  );
}
