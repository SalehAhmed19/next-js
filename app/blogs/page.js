import Link from "next/link";

export default function BlogsPage() {
  const blogs = [
    { id: 1, title: "Blog 1", description: "Blog 1 description" },
    { id: 2, title: "Blog 2", description: "Blog 2 description" },
  ];

  return (
    <main className="mt-6">
      <div>Blogs</div>

      <ul className="mt-6">
        {blogs.map((blog) => (
          <li key={blog.title}>
            <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
