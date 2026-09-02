type Category = {
  id: string;
  name: string;
};

type PostData = {
  id?: string;
  title?: string;
  slug?: string;
  categoryId?: string;
  excerpt?: string | null;
  featuredImageUrl?: string | null;
  content?: string;
  status?: string;
  scheduledAt?: Date | string | null;
  isFeatured?: boolean;
  seoTitle?: string | null;
  seoDescription?: string | null;
  canonicalUrl?: string | null;
  ogImageUrl?: string | null;
};

type PostFieldsProps = {
  cats: Category[];
  post?: PostData;
};

export function PostFields({ cats, post }: PostFieldsProps) {
  return (
    <>
      {post && (
        <input
          type="hidden"
          name="id"
          value={post.id}
        />
      )}

      <label className="label">
        Title
        <input
          className="input"
          name="title"
          defaultValue={post?.title}
          required
        />
      </label>

      <label className="label">
        Slug
        <input
          className="input"
          name="slug"
          defaultValue={post?.slug}
        />
      </label>

      <label className="label">
        Category
        <select
          className="select"
          name="categoryId"
          defaultValue={post?.categoryId}
          required
        >
          <option value="">Select</option>

          {cats.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>
      </label>

      <label className="label">
        Excerpt
        <textarea
          className="textarea"
          name="excerpt"
          defaultValue={post?.excerpt ?? ""}
        />
      </label>

      <label className="label">
        Featured image URL
        <input
          className="input"
          name="featuredImageUrl"
          defaultValue={
            post?.featuredImageUrl ?? "/images/profile.jpg"
          }
        />
      </label>

      <label className="label">
        Article content (Markdown)
        <textarea
          className="textarea"
          style={{ minHeight: 400 }}
          name="content"
          defaultValue={post?.content ?? ""}
          required
          placeholder="# Your article

Write useful original content here…"
        />
      </label>

      <div
        className="grid"
        style={{ gridTemplateColumns: "1fr 1fr" }}
      >
        <label className="label">
          Status
          <select
            className="select"
            name="status"
            defaultValue={post?.status ?? "DRAFT"}
          >
            <option value="DRAFT">DRAFT</option>
            <option value="PUBLISHED">PUBLISHED</option>
            <option value="SCHEDULED">SCHEDULED</option>
          </select>
        </label>

        <label className="label">
          Schedule date/time
          <input
            className="input"
            type="datetime-local"
            name="scheduledAt"
          />
        </label>
      </div>

      <label>
        <input
          type="checkbox"
          name="isFeatured"
          defaultChecked={post?.isFeatured ?? false}
        />{" "}
        Featured article
      </label>

      <h3>SEO</h3>

      <label className="label">
        SEO title
        <input
          className="input"
          name="seoTitle"
          defaultValue={post?.seoTitle ?? ""}
        />
      </label>

      <label className="label">
        SEO description
        <textarea
          className="textarea"
          name="seoDescription"
          defaultValue={post?.seoDescription ?? ""}
        />
      </label>

      <label className="label">
        Canonical URL
        <input
          className="input"
          name="canonicalUrl"
          defaultValue={post?.canonicalUrl ?? ""}
        />
      </label>

      <label className="label">
        OG image URL
        <input
          className="input"
          name="ogImageUrl"
          defaultValue={post?.ogImageUrl ?? ""}
        />
      </label>

      <button className="btn primary">
        {post ? "Save changes" : "Create post"}
      </button>
    </>
  );
      }
