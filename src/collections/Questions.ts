import type { CollectionConfig } from 'payload'

export const Questions: CollectionConfig = {
  slug: 'questions',
  access: {
    read: () => true,
  },
  fields: [
    {
        name: 'Question',
        type: 'text',
        required: true,
      },
      {
        name: 'QuestionSubText',
        type: 'text',
        required: true,
      },
      {
        name: 'email',
        type: 'text',
        required: true,
      },
      {
        name: 'phone',
        type: 'text',
        required: true,
      },
  ],
}
