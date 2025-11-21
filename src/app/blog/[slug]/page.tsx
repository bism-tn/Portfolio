import Image from "next/image";
import Link from "next/link";
import { PortableText } from "next-sanity";
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
    body: any[];
}

async function getPost(slug: string) {
    const query = `*[_type == "post" && slug.current == $slug][0]{
    title,
    slug,
    mainImage,
    publishedAt,
    "author": author->name,
    body
  }`;

    return await sanityClient.fetch(query, { slug });
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post: Post = await getPost(slug);

    if (!post) return <p className="text-white text-center mt-20">Post not found</p>;

    return (
        <article className="min-h-screen bg-black text-white py-20 px-6 md:px-20">
            <div className="max-w-3xl mx-auto">
                {/* Back Arrow */}
                <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors mb-8 group"
                >
                    <svg
                        className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back to Blog
                </Link>

                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{post.title}</h1>

                <div className="flex items-center text-gray-400 mb-8">
                    <span className="mr-4">{new Date(post.publishedAt).toLocaleDateString()}</span>
                    <span>By {post.author}</span>
                </div>

                {post.mainImage && (
                    <div className="relative w-full h-96 mb-10 rounded-xl overflow-hidden">
                        <Image
                            src={urlFor(post.mainImage).url()}
                            alt={post.title}
                            fill
                            className="object-cover"
                        />
                    </div>
                )}

                <div className="prose prose-invert prose-lg max-w-none">
                    <PortableText value={post.body} />
                </div>
            </div>
        </article>
    );
}
