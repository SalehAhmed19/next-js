export default function page({ params }) {
  const { slug } = params;
  return <div>Blog {slug}</div>;
}
