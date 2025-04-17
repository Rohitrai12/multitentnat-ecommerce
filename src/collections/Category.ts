import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'categories',
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    }
  ],
}
