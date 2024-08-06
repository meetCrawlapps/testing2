import type { CollectionConfig } from 'payload'

export const AboutPage: CollectionConfig = {
  slug: 'aboutpage',
  access: {
    read: () => true,
  },
  fields: [
    {
        name: 'AboutHeader',
        type: 'text',
        required: true,
    },
    {
        name: 'AboutSubheader',
        type: 'text',
        required: true,
    },
    {
        name: 'OwnerName',
        type: 'text',
        required: true,
    },
    {
        name: 'OwnerSubText',
        type: 'text',
        required: true,
    },
    {
        name: 'OwnerDetails',
        type: 'text',
        required: true,
    },
    {
        name: 'OwnerImage',
        type: 'upload',
        required: true,
        relationTo:'media',
    },
  ],
}
