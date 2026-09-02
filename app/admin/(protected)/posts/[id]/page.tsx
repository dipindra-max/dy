import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { savePost } from "../../actions";
import { PostFields } from "../PostFields";

export default async function EditPost({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const [post, cats] = await Promise.all([
    prisma.post.findUnique({
      where: { id },
    }),
    prisma.category.findMany({
      orderBy: { name: "asc" },
    }),
  ]);

  if (!post) {
    return notFound();
  }

  return (
    <>
      <div className="eyebrow">Editor</div>

      <h1>Edit post</h1>

      <form className="form card" action={savePost}>
        <PostFields
          cats={cats}
          post={{
            id: post.id,
            title: post.title,
            slug: post.slug,
            excerpt: post.excerpt,
            content: post.content,
            status: post.status,
            scheduledAt: post.scheduledAt,
            seoTitle: post.seoTitle,
            seoDescription: post.seoDescription,
            canonicalUrl: post.canonicalUrl,
            isFeatured: post.featured,
            featuredImageUrl: post.featuredImage,
          }}
        />
      </form>
    </>
  );
}
