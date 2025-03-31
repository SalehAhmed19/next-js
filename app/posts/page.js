import getAllPosts from "@/lib/getAllPosts";

export default async function Posts() {
  const posts = await getAllPosts();
  console.log(posts);

  return (
    <main className="mt-6">
      <div>
        <h1>All posts</h1>

        <div className="mt-6">
          <ul className="mt-6">
            {posts.map((post) => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
