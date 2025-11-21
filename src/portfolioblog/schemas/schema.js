// schemas/schema.js
import { defineSchema } from 'sanity'
import post from './post'
import author from './author'
import category from './category'
import blockContent from './blockContent'

export default defineSchema({
  name: 'default',
  types: [post, author, category, blockContent],
})
