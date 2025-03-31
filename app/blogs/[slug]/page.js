import { notFound } from "next/navigation";

export default function BlogPage({ params }) {
  const { slug } = params;

  if (slug === "3") {
    notFound();
  }

  return (
    <main className="mt-6">
      <div>Blog {slug}</div>
    </main>
  );
}
