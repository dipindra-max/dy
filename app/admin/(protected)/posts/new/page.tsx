import { prisma } from "@/lib/prisma";
import { savePost } from "../../actions";
import { PostFields } from "../PostFields";

export default async function NewPost() {
  const cats = await prisma.category.findMany({
    orderBy: { name: "asc" },
  });

  return (
    <>
      <div className="eyebrow">Editor</div>

      <h1>New post</h1>

      <form className="form card" action={savePost}>
        <PostFields cats={cats} />
      </form>
    </>
  );
}
