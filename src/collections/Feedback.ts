import type { CollectionConfig } from 'payload'

export const Feedback: CollectionConfig = {
  slug: 'feedback',
  access: {
    read: () => true,
  },
  fields: [
  
      {
        name:'FeedBackTitle',
        type: 'text',
        required: true,
      },
      {
        name:'FeedBackSubTitle',
        type: 'text',
        required: true,
      },
      {
        name:'FeedBackCards',
        type: 'array',
        required: true,
        fields:[
          {
            name: 'FeedBackCardImage',
            type: 'upload',
            required: true,
            relationTo: 'media',
          },
          {
            name: 'TestimonialImage',
            type: 'upload',
            required: true,
            relationTo: 'media',
          },
          {
            name:'FeedBackTitle',
            type: 'text',
            required: true,
          },
          {
            name:'FeedBackSubText',
            type: 'text',
            required: true,
          },
          {
            name:'TestimonialName',
            type: 'text',
            required: true,
          },
          {
            name:'Date',
            type: 'date',
            required: true,
          },
        ]
      },
  ],
}
