import Image from "next/image";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { JSDOM } from "jsdom";
import DOMPurify from "dompurify";
import fetchBlog from "@/utils/fetch-blog";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}
const window = new JSDOM("").window as unknown as Window & {
  DocumentFragment: typeof DocumentFragment;
  HTMLTemplateElement: typeof HTMLTemplateElement;
  Node: typeof Node;
  Element: typeof Element;
  NodeFilter: typeof NodeFilter;
  NamedNodeMap: typeof NamedNodeMap;
  HTMLFormElement: typeof HTMLFormElement;
  DOMParser: typeof DOMParser;
};

const purify = DOMPurify(window);
const BlogPostPage = async ({ params }: BlogPostPageProps) => {
  const { slug } = await params;
  const blog = await fetchBlog(slug);
  const cleanContent = purify.sanitize(blog.content);
  return (
    <article className="mx-auto max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8 space-y-4 text-right md:mb-8">
        <h1 className="text-center text-3xl font-bold tracking-tight md:text-5xl">
          {blog.title}
        </h1>
        <div className="text-muted-foreground flex items-center justify-end gap-2">
          <CalendarIcon className="h-4 w-4" />
          <time dateTime={blog.createdAt}>
            {new Date(blog.createdAt).toLocaleDateString("fa-IR", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <span className="mx-2">•</span>
          <span
            className={cn(
              "rounded-full px-3 py-1 text-sm font-medium",
              blog.status === "منتشر شده"
                ? "bg-green-100 text-green-800"
                : "bg-yellow-100 text-yellow-800",
            )}
          >
            {blog.status}
          </span>
        </div>
      </header>
      <div className="relative mb-8 aspect-[21/9] w-full overflow-hidden rounded-sm md:mb-12">
        <Image
          src={blog.imgPath}
          alt={`تصویر اصلی مطلب: ${blog.title}`}
          fill
          priority={true}
          loading="eager"
          quality={85}
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px"
          placeholder="blur"
        />
      </div>
      <div
        className="flex flex-col gap-3 [&>h2]:text-2xl [&>h2]:font-bold [&>h2:not(:first-child)]:mt-6 [&>p]:text-gray-600"
        dangerouslySetInnerHTML={{ __html: cleanContent }}
      />
    </article>
  );
};

export default BlogPostPage;
