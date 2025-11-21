import Link from "next/link";
import Image from "next/image";
import { sanityClient, urlFor } from "@/lib/sanity";

interface Post {
    title: string;
    slug: { current: string };
    mainImage: {
        asset: {
            _ref: string;
        };
    };
    publishedAt: string;
    author: string;
    description?: string;
}

async function getPosts() {
    const query = `*[_type == "post"]{
    title,
    slug,
    mainImage,
    publishedAt,
    "author": author->name,
    description
  } | order(publishedAt desc)`;

    return await sanityClient.fetch(query);
}

export default async function Blog() {
    const posts: Post[] = await getPosts();

    return (
        <section className="min-h-screen bg-black text-white py-20 px-6 md:px-20">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Blog</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                    <div
                        key={post.slug.current}
                        className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-purple-500 transition-shadow duration-300 group"
                    >
                        <Link href={`/blog/${post.slug.current}`}>
                            <div className="relative h-48 w-full">
                                {post.mainImage && (
                                    <Image
                                        src={urlFor(post.mainImage).url()}
                                        alt={post.title}
                                        fill
                                        className="object-cover"
                                    />
                                )}
                            </div>
                            <div className="p-6">
                                <h2 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                                    {post.title}
                                </h2>
                                <p className="text-gray-400 text-sm mb-4">
                                    {new Date(post.publishedAt).toLocaleDateString()} | {post.author}
                                </p>
                                {post.description && (
                                    <p className="text-gray-300 line-clamp-3">{post.description}</p>
                                )}
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
}
