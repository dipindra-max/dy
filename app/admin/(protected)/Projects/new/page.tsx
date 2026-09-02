import { prisma } from "@/lib/prisma";
import { saveProject } from "../../actions";

export default async function NewProject({
  searchParams,
}: {
  searchParams: Promise<{ id?: string }>;
}) {
  const id = (await searchParams).id;

  const project = id
    ? await prisma.project.findUnique({
        where: { id },
      })
    : null;

  return (
    <>
      <div className="eyebrow">Portfolio editor</div>

      <h1>{project ? "Edit project" : "New project"}</h1>

      <form className="form card" action={saveProject}>
        {project && (
          <input
            type="hidden"
            name="id"
            value={project.id}
          />
        )}

        <label className="label">
          Title
          <input
            className="input"
            name="title"
            defaultValue={project?.title}
            required
          />
        </label>

        <label className="label">
          Slug
          <input
            className="input"
            name="slug"
            defaultValue={project?.slug}
            required
          />
        </label>

        <label className="label">
          Description
          <textarea
            className="textarea"
            name="description"
            defaultValue={project?.description}
            required
          />
        </label>

        <label className="label">
          Details
          <textarea
            className="textarea"
            name="content"
            defaultValue={project?.content ?? ""}
          />
        </label>

        <label className="label">
          Image URL
          <input
            className="input"
            name="image"
            defaultValue={project?.image ?? ""}
          />
        </label>

        <label className="label">
          Demo URL
          <input
            className="input"
            name="url"
            defaultValue={project?.url ?? ""}
          />
        </label>

        <label className="label">
          GitHub URL
          <input
            className="input"
            name="githubUrl"
            defaultValue={project?.githubUrl ?? ""}
          />
        </label>

        <label className="label">
          Sort order
          <input
            className="input"
            type="number"
            name="sortOrder"
            defaultValue={project?.sortOrder ?? 0}
          />
        </label>

        <label>
          <input
            type="checkbox"
            name="featured"
            defaultChecked={project?.featured ?? false}
          />{" "}
          Featured
        </label>

        <label className="label">
          Status

          <select
            className="select"
            name="status"
            defaultValue={project?.status ?? "ACTIVE"}
          >
            <option value="ACTIVE">ACTIVE</option>
            <option value="COMPLETED">COMPLETED</option>
            <option value="ARCHIVED">ARCHIVED</option>
          </select>
        </label>

        <button className="btn primary">
          Save project
        </button>
      </form>
    </>
  );
            }
