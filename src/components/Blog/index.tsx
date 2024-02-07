import { BlogContent } from "./BlogContent";
import { BlogFooter } from "./BlogFooter";
import { BlogImage } from "./BlogImage";
import { BlogRoot } from "./BlogRoot";

export type BlogProps = {
    bgImage: string;
    bgImageAlt: string;
    title: string;
    content: string;
    categorie: string;
}

export const Blog = {
    Root: BlogRoot,
    Image: BlogImage,
    Content: BlogContent,
    Footer: BlogFooter
}