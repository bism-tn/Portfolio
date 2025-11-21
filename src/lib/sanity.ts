import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const sanityClient = createClient({
  projectId: 'vkbsjv6h',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})

import { SanityImageSource } from '@sanity/image-url/lib/types/types'

const builder = imageUrlBuilder(sanityClient)
export const urlFor = (source: SanityImageSource) => builder.image(source)
