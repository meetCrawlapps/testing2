import type { CollectionConfig } from 'payload'

export const Network: CollectionConfig = {
  slug: 'network',
  access: {
    read: () => true,
  },
  fields: [
    {
        name: 'NetworkHeading',
        type: 'text',
        required: true,
      },
    {
        name: 'NetworkSubText',
        type: 'text',
        required: true,
      },
      {
        name: 'NetworkFigure',
        type: 'array',
        required: true,
        fields:[
          {
            name: 'NetworkImage',
            type: 'upload',
            required: true,
            relationTo: 'media',
          },
          {
            name: 'NetworkImageTitle',
            type: 'text',
            required: true,
          },
        ]
      },
  ],
}
