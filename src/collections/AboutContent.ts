import type { CollectionConfig } from 'payload'

export const AboutUs: CollectionConfig = {
  slug: 'about',
  access: {
    read: () => true,
  },
  fields: [
    {
        name: 'AboutUsHeading',
        type: 'text',
        required: true,
      },
    {
        name: 'AboutUsSubText',
        type: 'text',
        required: true,
      },
      {
        name: 'AboutUsAttributes',
        type: 'array',
        fields:[
          {
            name: 'AboutUsAttributeMainImage',
            type: 'upload',
            required: true,
            relationTo: 'media',
          },
          {
            name: 'AboutUsAttributeSubImage',
            type: 'upload',
            required: true,
            relationTo: 'media',
          },
          {
            name: 'AboutUsAttributeTitle',
            type: 'text',
            required: true,
          },
          {
            name: 'AboutUsAttributeSubTitle',
            type: 'text',
            required: true,
          },
          {
            name: 'AboutUsAttributeAdvantages',
            type: 'array',
            required: true,
            fields:[
              {
                name: 'AboutUsAttributeAdvantage',
                type: 'text',
                required: true,
              }
            ]
          },
        ]
      },
  ],
}
