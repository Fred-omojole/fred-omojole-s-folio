import { getAllPosts } from "@/lib/blogHelper";
import Link from "next/link";

function BlogListing() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen px-4 pb-24 ">
      <section className="mx-auto max-w-3xl">
        <h1 className="mt-3 text-4xl font-semibold text-[#102018] md:text-5xl">
          Notes from the build process.
        </h1>
        <p className="mt-4 max-w-xl text-sm text-[#405347] md:text-base">
          Pouring out ideas, experiments, and lessons learned while crafting
        </p>
      </section>

      <section className="relative mx-auto mt-10 max-w-3xl flex flex-col  blog-list">
        {posts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.title}>
            <div className="group py-5 flex flex-col gap-[0.9px]  first:pt-0 last:pb-0  blog-card">
              <h2 className="text-[15px] font-medium tracking-[0.01em] text-[#102018]  md:text-lg text-base">
                {post.title}
              </h2>

              <div className="mt-1 mb-4 flex items-center gap-2 text-xs text-[#6b7c71] md:text-[13px]">
                <span className=" font-medium">{post.date}</span>
                <span className="h-0.5 w-0.5 rounded-full bg-[#6b7c71] font-medium text-base" />
                <span>{post.readingTime}</span>
              </div>

              {/* <p className="mt-2 max-w-2xl text-sm text-[#405347]">
                {post.excerpt}
              </p> */}
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}

export default BlogListing;
