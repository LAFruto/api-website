import fs from "fs/promises";
import matter from "gray-matter";
import path from "path";

export const socialTypes = ["FACEBOOK", "LINKEDIN", "GITHUB", "INSTAGRAM"];
export type SocialType = (typeof socialTypes)[number];

export interface Content {
  title: string;
  description: string;
  thumbnail: string;
  slug: string;
  date: string;
  tags: string[];
  body: string;
  socials: Socials[];
  published: boolean;
}

export interface Socials {
  url: string;
  type: SocialType;
}

const CONTENT_DIR_PATH = "public/markdown";

const getContent = async (dirPath: string): Promise<any[]> => {
  const contentPath = path.resolve(process.cwd(), dirPath);
  const content = await fs.readdir(contentPath);

  return Promise.all(
    content
      .filter((file) => path.extname(file) === ".mdx")
      .map(async (file) => {
        const filePath = `${contentPath}/${file}`;
        const [fileName] = file.split(".");
        const fileContent = await fs.readFile(filePath, "utf8");
        const { data, content } = matter(fileContent);

        return {
          ...data,
          body: content,
          slug: fileName,
        };
      })
  );
};

export const getAllContent = async () => {
  const content = await getContent(CONTENT_DIR_PATH);
  return content.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const getContentEntry = async (slug: string): Promise<Content> => {
  const content = await getAllContent();

  return content.find((content) => content.slug === slug);
};
