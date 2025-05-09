import getPost from "@/lib/getPost";

export async function generateMetadata({ params }) {
  const { id } = params;
  const post = await getPost(id);

  return {
    title: post.title,
    description: post.body,
  };
}

export default async function PostPage({ params }) {
  const { id } = params;
  const post = await getPost(id);

  return (
    <main className="mt-6">
      <h2 className="text-xl text-blue-500 mb-3">{post.title}</h2>
      <p>{post.body}</p>
    </main>
  );
}
