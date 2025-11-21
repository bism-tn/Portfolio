// import { sanityClient } from './sanity'

// export interface Post {
//   title: string
//   slug: { current: string }
//   mainImage?: any
//   publishedAt: string
//   authorName: string
// }

// export const getPosts = async (): Promise<Post[]> => {
//   const query = `*[_type == "post"] | order(publishedAt desc){
//     title,
//     slug,
//     mainImage,
//     publishedAt,
//     "authorName": author->name
//   }`
//   const posts: Post[] = await sanityClient.fetch(query)
//   return posts
// }
